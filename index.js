const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
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
            type: 'list',
            name: 'license',
            message: 'License information:',
            choices: 
            [
              'Apache License 2.0',
              'The MIT License',
              'IBM Public License Version 1.0',
              'Mozilla Public License 2.0',
              'None',
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
            message: 'Email address:',
        },
    ])
    .then((answers) => {
        const filename = `${answers.title}.md`;
        fs.writeFile(filename, generateMarkdown(answers), (err) =>
    err ? console.log(err) : console.log('Success!')
  );
    })
