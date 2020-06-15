const licenseArray = [
  {
    name: "Apache License 2.0",
    link: "https://www.apache.org/licenses/LICENSE-2.0.txt",
  },
  {
    name: "GNU General Public License v3.0",
    link: "https://www.gnu.org/licenses/gpl-3.0.en.html",
  },
  {
    name: "MIT License",
    link: "https://opensource.org/licenses/MIT",
  },
  {
    name: "BSD T-Clause 'Simplified' License",
    link: "https://opensource.org/licenses/BSD-2-Clause",
  },
  {
    name: "BSD 3-Clause 'New' or 'Revised' License",
    link: "https://spdx.org/licenses/BSD-3-Clause.html",
  },
  {
    name: "Creative Commons Zero v1.0 Universal",
    link: "https://choosealicense.com/licenses/cc0-1.0/",
  },
  {
    name: "Eclipse Public License 2.0",
    link: "https://www.eclipse.org/legal/epl-2.0/",
  },
  {
    name: "GNU Affero General Public License v2.1",
    link: "https://www.gnu.org/licenses/agpl-3.0.en.html",
  },
  {
    name: "GNU General Public License v2.0",
    link: "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
  },
  {
    name: "GNU Lesser General Public License v2.1",
    link: "https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html",
  },
  {
    name: "GNU Lesser General Public License v3.0",
    link: "https://www.gnu.org/licenses/lgpl-3.0.en.html",
  },
  {
    name: "Mozilla Public License 2.0",
    link: "https://www.mozilla.org/en-US/MPL/2.0/",
  },
  {
    name: "The Unilicense",
    link: "https://unlicense.org/",
  },
];

// function to generate markdown for README
function generateMarkdown(response) {
  let spaceTitle = response.license.replace(/ /g, "%20");
  let licenseLink = "";

  for (var i = 0; i < licenseArray.length; i++) {
    if (response.license === licenseArray[i].name) {
      licenseLink = licenseArray[i].link;
    }
  }

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
Copyright (c) [2020]
The license is ${response.license}. 
Read more about it at ${licenseLink}.



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
