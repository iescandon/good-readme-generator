// function to generate markdown for README

const licenseArray = [
  {
    name: "MIT License",
    license:
      "Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.",
  },
  //  {
  //    name:
  //    license: ,
  //  }
];

// TODO .replace to replace spaces with %20\

//TODO if else statement

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
