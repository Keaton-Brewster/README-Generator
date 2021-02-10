// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const md = require("./utils/generateMarkdown.js");

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, md.genMD(data), (err) => {
    err
      ? console.error(err)
      : console.log("New README created in current directory");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquire();
}

function inquire() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your username?",
        name: "username",
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email",
      },
      {
        type: "input",
        message:
          "What is the title of this project? (No spaces or special characters besides -)",
        name: "projectTitle",
      },
      {
        type: "input",
        message: "Give a description of your application:",
        name: "description",
      },
      {
        type: "list",
        message: "What method of install is recommended?",
        choices: ["bash", "GitHub"],
        name: "installMethod",
      },
      {
        type: "input",
        message:
          "What do users need to know about how to install your application?",
        name: "install",
      },
      {
        type: "input",
        message: "Give instructions on how to use your application:",
        name: "usage",
      },
      {
        type: "input",
        message: "What are your contribution guidelines?",
        name: "contribution",
      },
      {
        type: "input",
        message: "What do users need to know about testing your application?",
        name: "testI",
      },
      {
        type: "list",
        message: "Under which of the following will your application be licensed?",
        choices: ["Apache 2.0", "GPL", "Eclipse", "MIT", "none"],
        name: "license",
      },
      {
        type: "input",
        message: "What technologies are utilized in your application?",
        name: "technologies"
      }
    ])
    .then((data) => {
      writeToFile("README.md", data);
    });
}
// Function call to initialize app
init();
