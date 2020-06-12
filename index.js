var inquirer = require("inquirer");
var fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);
// array of questions for user
// const questions = [];
function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is your project title?",
      name: "title",
    },
    {
      type: "input",
      message: "What is your project site URL?",
      name: "url",
    },
    {
      type: "input",
      message: "Enter in a description of your project:",
      name: "description",
    },
    {
      type: "input",
      message: "Enter in installation instructions of your project:",
      name: "installation",
    },
    {
      type: "input",
      message: "Enter in the usage information for your project:",
      name: "usage",
    },
    {
      type: "input",
      message: "Would you like to credit anyone for this project?",
      name: "credits",
    },
    {
      type: "input",
      message: "Enter in the test instructions for this project:",
      name: "tests",
    },
    {
      type: "list",
      message: "Choose a license from the following list:",
      choices: [
        "MIT",
        "Academic Free License v3.0",
        "GNU General Public License v2.0",
      ],
      name: "license",
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "github",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
  ]);
}

//badges?
//choose a license from a list - badge added near the top of the readme and also added in license name
//enter github username - add link to github profile in questions section
//enter email address - added to questions section with instructions on how to reach me with additional questions
//each link in table of contents takes me to corresponding section of README

// function to write README file

// function writeToFile(fileName, data) {}

function writeToFile(response) {
  var readMeText = `# ${response.title}


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
${response.license}


## Credits
${response.credits}


## Tests
${response.tests}


## Questions
If you have any additional questions please contact me at ${response.email}.
GitHub: https://github.com/${response.github}
`;

  return readMeText;
}

async function init() {
  try {
    const response = await promptUser();

    const readMeText = writeToFile(response);

    await writeFileAsync("README.md", readMeText);

    console.log("Successfully wrote to README.md");
  } catch (err) {
    console.log(err);
  }
}

init();

// function to initialize program
// function init() {}

// function call to initialize program
// init();
