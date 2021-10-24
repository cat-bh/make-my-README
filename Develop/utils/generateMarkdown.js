// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)`;
  }
  if (license === "Unlicense") {
    return `[![Unlicense](https://img.shields.io/badge/License-Unlicense-blue.svg)](https://unlicense.org/)`;
  }
  if (license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  if (license === "GPLv3") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') return 'https://choosealicense.com/licenses/mit/';
  if (license == 'GPLv3') return 'https://choosealicense.com/licenses/gpl-3.0/';
  if (license === 'Unlicense') return 'https://choosealicense.com/licenses/unlicense/';
  if (license === 'Apache') return 'https://choosealicense.com/licenses/apache-2.0/';

  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return " ";
  } else {
    return `## License`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents
- [Installation](#installation-instructions)
- [Usage](#usage-information)
- [Contributing](#contribution-guidelines)
- [Tests](#test-instructions)
- [Questions](#questions)

## Installation instructions

${data.installation}

## Usage information

${data.usage}

## Contribution guidelines

${data.contribution}

## Test instructions

${data.testing}

## Questions

Feel free to contact me with any questions!

GitHub profile: [${data.github}](https://github.com/${data.github})

Email: ${data.email}

${data.contact}

${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

`;
}

module.exports = generateMarkdown;
