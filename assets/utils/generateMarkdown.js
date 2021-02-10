function generateTitle(data) {
  if (data.projectTitle.trim(" ") === "") {
    return "";
  } else {
    return data.projectTitle;
  }
}

function generateLicense(data) {
  let badge;
  let license;
  switch (data.license) {
    case "Apache 2.0":
      badge =
        "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GPL":
      badge =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "MIT":
      badge =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Eclipse":
      badge =
        "[![License](https://img.shields.io/badge/License-EPL%201.0-blue.svg)](https://opensource.org/licenses/EPL-1.0)";
      break;
  }
  data.license === "none"
    ? (license = "")
    : (license = `### <a id='license'></a>${badge}`);
  return license;
}

function generateDescription(data) {
  if ((data.description.trim = "")) {
    return "";
  } else {
    return data.description;
  }
}

function generateMarkdown(data) {
  let title = generateTitle(data);
  let license = generateLicense(data);
  let description = generateDescription(data);

  return `# **${title}**\n
  ## Description\n
  ${description}\n
  ${license}\n
  ---\n
  Contents\n---\n [Head](#head) - [Install](#install) - [Use](#usage) - [Testing](#testing) - [Questions](#questions)\n
  ---\n
  ## <a id="install"></a> Installation\n  
  Recommended: Install via ${data.installMethod}\n  
  > ${data.install}\n   

  ## <a id="usage"></a> Usage\n
  ${data.usage}\n

  ## <a id="testing"></a> Testing\n
  ${data.testI}\n
  ---\n
  ## Contribution guidelines\n
  ${data.contribution}\n
  ---\n
  ## <a id='questions'></a> Questions?\nFor questions about the application, or about possible contributions, reach out using one of the methods below:\n> [Github](https://github.com/${data.username})  \n[Email](mailto:${data.email})\n`;
}

module.exports = {
  genMD: generateMarkdown,
};
