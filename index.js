const inquirer = require('inqurier');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = () =>
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Project name:',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Project description:',
        },
        {
            type: 'input',
            name: 'install',
            message: 'Installation instructions:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Instructions for use:',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Contribution guidelines:',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Test instructions:'
        },
        {
            type: "list",
            name: "license",
            message: "License information:",
            choices: 
            [
              "The MIT License",
              "GNU GPL v3",
              "ISC License (ISC)",
              "IBM Public License Version 1.0",
              "Mozilla Public License 2.0",
            ]
        },
        {
            type: 'input',
            name: 'github',
            message: 'GitHub username:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Email address:'
        },
    ]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
