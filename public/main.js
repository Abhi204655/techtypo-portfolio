const { exec } = require("child_process");
let m2j = require('markdown-to-json');
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
            return console.log("Failed to list contents of directory: " + err);
        }
        let ilist = [];
        files.forEach((file, i) => {
            exec(`m2j ${dirPath}/${file}`, (error, stdout, stderr) => {
                if (error) {
                    console.log(`error: ${error.message}`);
                    return;
                }
                if (stderr) {
                    console.log(`stderr: ${stderr}`);
                    return;
                }
                stdout = JSON.parse(stdout);
                const name = file.split('.')[0];
                projectlist.push(stdout[`${name}`]);

                ilist.push(i);
                if (ilist.length === files.length) {
                    const sortedList = projectlist.sort((a, b) => {
                        return a.id < b.id ? 1 : -1
                    })
                    let data = JSON.stringify(sortedList)
                    fs.writeFileSync("src/projects.json", data)
                }
            });
        })
    })
}


getProjects();