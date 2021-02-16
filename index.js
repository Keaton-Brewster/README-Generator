// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const md = require("./assets/utils/generateMarkdown.js");
const chalk = require("chalk");

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
        message: `${chalk.green("What is your username?")}`,
        name: "username",
      },
      {
        type: "input",
        message: `${chalk.green("What is your email address?")}`,
        name: "email",
      },
      {
        type: "input",
        message: `${chalk.green(
          "What is the title of this project?"
        )}`,
        name: "projectTitle",
      },
      {
        type: "input",
        message: `${chalk.green(
          "Give a description of your application (to leave blank, type nothing)"
        )}`,
        name: "description",
      },
      {
        type: "list",
        message: `${chalk.green(
          "What method of install is recommended? (to leave blank, type nothing)"
        )}`,
        choices: ["bash", "GitHub"],
        name: "installMethod",
      },
      {
        type: "input",
        message: `${chalk.green(
          "What do users need to know about how to install your application? (to leave blank, type nothing)"
        )}`,
        name: "install",
      },
      {
        type: "input",
        message: `${chalk.green(
          "Give instructions on how to use your application. (to leave blank, type nothing)"
        )}`,
        name: "usage",
      },
      {
        type: "input",
        message: `${chalk.green(
          "What are your contribution guidelines? (to leave blank, type nothing)"
        )}`,
        name: "contribution",
      },
      {
        type: "input",
        message: `${chalk.green(
          "What do users need to know about testing your application? (to leave blank, type nothing)"
        )}`,
        name: "testI",
      },
      {
        type: "list",
        message: `${chalk.green(
          "Under which of the following will your application be licensed?"
        )}`,
        choices: ["Apache 2.0", "GPL", "Eclipse", "MIT", "Not licensed"],
        name: "license",
      },
      {
        type: "input",
        message: `${chalk.green(
          "What technologies are utilized in your application? (to leave blank, type nothing)"
        )}`,
        name: "technologies",
      },
    ])
    .then((data) => {
      writeToFile(`${data.projectTitle.trim(" ")}.md`, data);
    });
}
// Function call to initialize app
init();
