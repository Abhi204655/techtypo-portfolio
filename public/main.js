const path = require("path")
const fs = require("fs")

const dirPath = path.join(__dirname, "../projects")
let projectlist = []

const months = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    "10": "October",
    "11": "November",
    "12": "December"
}

const formatDate = (date) => {
    const datetimeArray = date.split("T")
    const dateArray = datetimeArray[0].split("-")
    const timeArray = datetimeArray[1].split(":")
    const month = dateArray[1]
    const monthName = months[dateArray[1]]
    const day = dateArray[2]
    const year = dateArray[0]
    const time = `${timeArray[0]}:${timeArray[1]}`

    return { "month": month, "monthName": monthName, "day": day, "year": year, "time": time }
}



const getProjects = () => {
    fs.readdir(dirPath, (err, files) => {
        if (err) {
            return console.log("Failed to list contents of directory: " + err)
        }
        let ilist = []
        files.forEach((file, i) => {
            let obj = {}
            let post
            fs.readFile(`${dirPath}/${file}`, "utf8", (err, contents) => {
                const getMetadataIndices = (acc, elem, i) => {
                    if (/^---/.test(elem)) {
                        acc.push(i)
                    }
                    return acc
                }
                const parseMetadata = ({ lines, metadataIndices }) => {
                    if (metadataIndices.length > 0) {
                        let metadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1])
                        metadata.forEach(line => {
                            let key = line.split(": ")[0];
                            if (key == "tags") {
                                let tagData = line.split(": ")[1].split(" ");
                                // console.log(tagData);
                                obj[key] = tagData;
                            } else {
                                obj[key] = line.split(": ")[1]
                            }
                        })
                        return obj
                    }
                }
                const parseContent = ({ lines, metadataIndices }) => {
                    if (metadataIndices.length > 0) {
                        lines = lines.slice(metadataIndices[1] + 1, lines.length)
                    }
                    return lines.join("\n")
                }
                console.log(contents.split(":"));
                const lines = contents.split("\n")
                const metadataIndices = lines.reduce(getMetadataIndices, [])
                const metadata = parseMetadata({ lines, metadataIndices })
                const content = parseContent({ lines, metadataIndices })
                // console.log(content);
                const parsedDate = metadata.date ? formatDate(metadata.date) : new Date()
                const datestring = `${parsedDate["year"]}-${parsedDate["month"]}-${parsedDate["day"]}T${parsedDate["time"]}:00`
                const date = new Date(datestring)
                const timestamp = date.getTime() / 1000
                project = {
                    id: timestamp,
                    title: metadata.title ? metadata.title : "No title given",
                    desc: metadata.desc ? metadata.desc : "No description found",
                    image: metadata.image,
                    githubLink: metadata.githubLink ? metadata.githubLink : null,
                    liveLink: metadata.liveLink ? metadata.liveLink : null,
                    tags: metadata.tags ? metadata.tags : []
                }
                projectlist.push(project)
                ilist.push(i)
                if (ilist.length === files.length) {
                    const sortedList = projectlist.sort((a, b) => {
                        return a.id < b.id ? 1 : -1
                    })
                    let data = JSON.stringify(sortedList)
                    fs.writeFileSync("src/projects.json", data)
                }
            })
        })
    })
    return
}

getProjects()
