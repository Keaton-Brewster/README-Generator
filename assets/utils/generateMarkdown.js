function generateTitle(data) {
  if (data.projectTitle.trim(" ") === "") {
    return "";
  } else {
    return `${data.projectTitle}`;
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
  data.license === "Not licensed"
    ? (license = "")
    : (license = `### <a id='license'></a>${badge}\nThis application is covered under the ${data.license} license.\n`);
  return license;
}

function generateDescription(data) {
  if ((data.description.trim = "")) {
    return "";
  } else {
    return `## Description\n
${data.description}\n`;
  }
}

function generateInstallation(data) {
  if (data.install.trim(" ") === "") {
    return "";
  } else {
    return `---\n## <a id="install"></a> Installation\n
Recommended: Install via ${data.installMethod}\n
${data.install}\n`;
  }
}

function generateUsage(data) {
  if (data.usage.trim(" ") === "") {
    return "";
  } else {
    return `---\n## <a id="usage"></a> Usage\n
${data.usage}\n`;
  }
}

function generateTesting(data) {
  if (data.testI.trim(" ") === "") {
    return "";
  } else {
    return `---\n## <a id="testing"></a> Testing\n
${data.testI}\n`;
  }
}

function generateContributions(data) {
  if (data.contribution.trim(" ") === "") {
    return "";
  } else {
    return `---\n## Contribution guidelines\n
${data.contribution}\n`;
  }
}

function generateQuestions(data) {
  if (data.email.trim(" ") === "" && data.username.trim(" ") === "") {
    return "";
  } else {
    return `---\n## <a id='questions'></a> Questions?\n
For questions about the application, or about possible contributions, reach out using one of the methods below:   \n
> [Github](https://github.com/${data.username})  \n[Email](mailto:${data.email})\n`;
  }
}

function generateTechnologies(data) {
  if (data.technologies.trim(" ") === "") {
    return "";
  } else {
    return `---\n### Technologies utilized:\n${data.technologies}\n`;
  }
}

function generateMarkdown(data) {
  let title = generateTitle(data),
    description = generateDescription(data),
    license = generateLicense(data),
    installation = generateInstallation(data),
    usage = generateUsage(data),
    testing = generateTesting(data),
    contribution = generateContributions(data),
    questions = generateQuestions(data),
    technologies = generateTechnologies(data);

  return `# **${title}**\n
  ${description}
  ${license}
  ---\n
  Contents\n---\n [Head](#head) - [Install](#install) - [Use](#usage) - [Testing](#testing) - [Questions](#questions)\n
  ${installation}
  ${usage}
  ${testing}
  ${contribution}
  ${questions}
  ${technologies}`;
}

module.exports = {
  genMD: generateMarkdown,
};
