// GIVEN a command-line application that accepts user input

// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions


// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
// ```


// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const license = require('./license.js');
//const fs = require('fs');
//const util = require('util');

// TODO: Create an array of questions for user input
const questions = () =>
    inquirer.prompt([
        {
            // WHEN I enter my project title
            // THEN this is displayed as the title of the README
            type: 'input',
            name: 'name',
            message: 'What is your the name of your project?',
        },
        {
            // WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
            // THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
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
            // WHEN I choose a license for my application from a list of options
            // THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
            type: 'list',
            name: 'license',
            choices: ['AL', 'AR'],
        },
        {
            // WHEN I enter my GitHub username
            // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username',
        },
        {
            // WHEN I enter my email address
            // THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
            type: 'input',
            name: 'email',
            message: 'What is your email address',
        },
    ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
//init();
//questions();
console.log(license);


////////////////////////////////////////////



// const writeFileAsync = util.promisify(fs.writeFile);


// promptUser()
//   .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
//   .then(() => console.log('Successfully wrote to index.html'))
//   .catch((err) => console.error(err));

