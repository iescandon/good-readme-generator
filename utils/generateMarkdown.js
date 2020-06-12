// function to generate markdown for README

function generateMarkdown(response) {
  var spaceTitle = response.license.replace(/ /g, "%20");

  return `# ${response.title} ![GitHub license](https://img.shields.io/badge/license-${spaceTitle}-blue.svg)


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
