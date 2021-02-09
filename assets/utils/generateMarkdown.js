// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let badge;
  let license;
  switch (data.license) {
    case "Apache":
      badge =
        "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GPL":
      badge =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "MIT":
      badge =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Eclipse":
      badge =
        "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
      break;
  }
  data.license === "none"
    ? (license = "")
    : (license = `### <a id='license'></a> License\n${badge}`);
  return `# **${data.projectTitle}**\n
  ## Description\n
  ${data.description}\n
  ${license}\n
  ---\n
  Contents\n---\n [Head](#head) - [Install](#install) - [Use](#usage) - [Testing](#testing) - [Questions](#questions)\n
  ---\n
  ## <a id="install"></a> Installation\n
  Recommended: Install via ${data.installMethod}\n
  > ${data.install}   \n

  ## <a id="usage"></a> Usage\n
  ${data.usage}\n

  ## <a id="testing"></a> Testing\n For testing purposes, the ${data.testI} method is recommended\n\n
  ---\n
  ## Contribution guidelines\n
  ${data.contribution}\n
  ---\n
  ## <a id='questions'></a> Questions?\nReach out:\n> [Github](https://github.com/${data.username})  \n[Email](mailto:${data.email})\n`;
}

module.exports = {
  genMD: generateMarkdown,
};
