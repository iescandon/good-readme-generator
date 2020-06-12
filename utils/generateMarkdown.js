// function to generate markdown for README

// const licenseArray = [{ name }];

function generateMarkdown(response) {
  return `# ${response.title}


# Live Site
${response.url}


## Description 
${response.description}


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Credits](#credits)
* [Tests](#tests)
* [Questions](#questions)


## Installation
${response.installation}


## Usage 
${response.usage}


## License
[![GitHub license](https://img.shields.io/badge/license-${response.license}-blue.svg)]
The license is ${response.license}


## Credits
${response.credits}


## Tests
${response.tests}


## Questions
If you have any additional questions please contact me at ${response.email}.
GitHub: https://github.com/${response.github}
`;
}

module.exports = generateMarkdown;
