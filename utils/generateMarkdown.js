function renderLicenseBadge(license) {
  switch(license) {
    case 'Apache License 2.0':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case 'The MIT License':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case 'IBM Public License Version 1.0':
      return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
    case 'Mozilla Public License 2.0':
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    case 'None':
      return '';
  }
}

function renderLicenseLink(license) {
  if (license === 'None') {
    return ''
  }
  else {
    return `* [License](#license)`
  }
}

function renderLicenseSection(license) {
  if (license === 'None') {
    return ''
  }
  else {
    return `## License:
${license}`
  }
}

function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description:
${data.description}

## Table of Contents:
${renderLicenseLink(data.license)}
* [Installation](#installation)
* [Usage](#usage)
* [How to Contribute](#how-to-contribute)

${renderLicenseSection(data.license)}

## Installation:
${data.install}

## Usage:
${data.usage}

## How to Contribute:
${data.contribution}

## Tests:
${data.tests}

## Questions:
Email: ${data.email}

GitHub: ${data.github}
`;
}

module.exports = generateMarkdown;
