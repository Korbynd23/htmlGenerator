const fs = require("fs")
const inquirer = require("inquirer")
const generateHtml = require("./utils/generateHtml")

inquirer
    .prompt([
        {
        type: "input",
        name: "fullName",
        message: "Please enter your name?"
        },
        {
        type: "input",
        name: "location",
        message: "What is your location?"
        },
        {
        type: "input",
        name: "bio",
        message: "Please enter a short bio about yourself."
        },
        {
        type: "input",
        name: "linkedin",
        message: "Please enter your LinkedIn URL."
        },
        {
        type: "input",
        name: "gitHub",
        message: "Please enter your GitHub URL."
        },
        {
        type: "list",
        name: "genre",
        message: "Whats your favorite movie genre?",
        choices: ["Fantasy", "Action", "Romance", "Thriller", "Horror", "Comedy"]
        },
    ])
    .then((response) => {
        console.log(response)
        const html = generateHtml(response)
        if (!response.fullName || !response.location || !response.bio || !response.genre || !response.linkedin || !response.gitHub) {
            console.log("You missed some fields, please start over")
            return;
        } 
        fs.writeFile("./dist/index.html", html, (err) => err ? console.log("You missed some fields, please start over") : console.log("html created"))
    }) 