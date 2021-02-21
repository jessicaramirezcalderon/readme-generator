
// Packages needed for this application

const inquirer = require('inquirer');
const license = require('./license.js');
const fs = require('fs');
const util = require('util');

const writeToFile = util.promisify(fs.writeFile);

// Array of questions for user input
const questions = () =>
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please describe your project',
        },
        {
            type: 'input',
            name: 'instructions',
            message: 'What are the installation instructions',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please add usage information',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What are the contribution guidelines',
        },
        {
            type: 'input',
            name: 'test',
            message: 'What are the test instructions',
        },
        {
            type: 'list',
            name: 'license',
            choices: Object.keys(license),
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address',
        },
    ])

// Assign user input to file

const generateRM = (answers) =>
    `## Title

${answers.title}

## Description

${answers.description}

## Table of contents

<!--ts-->
   * [Table of contents](#table-of-contents)
   * [Description](#description)
   * [Installation](#installation)
   * [Usage](#usage)
   * [License](#license)
   * [Contributing](#contributing)
   * [Tests](#tests)
   * [Questions](#questions)
  

<!--te-->

## Installation

\`\`\`bash

${answers.instructions}

\`\`\`

## Usage

\`\`\`bash

${answers.usage}

\`\`\`

## Contributing

${answers.contribution}

## Tests

\`\`\`bash

${answers.test}

\`\`\`

## License

${answers.license}

## Questions

Contact me at:  

| Email:                 | GitHub:                    |
| -----------------------| ---------------------------|
| ${answers.email}       | ${answers.username}        |

`;


//init application
questions()
    .then((answers) => {
        const updatedAnswers = {
            ...answers,
            license: license[answers.license]
        };
        return writeToFile('sampleReadMe.md', generateRM(updatedAnswers));
    })
    .catch((err) => console.error(err));

