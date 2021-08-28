// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log("Please enter your title!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project!'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please input any installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage instructions. How is your project meant to be used?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can people contribute to your project? What are the contribution guidelines?'
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Enter instructions for testing the application: '
    },
    {
        type: 'input',
        name: 'contact',
        message: 'Enter any additional information about contacting you:'
    }, 
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like for this project?',
        choices: ['MIT', 'GPLv3', 'Unlicense', 'None']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(path.join('./dist', fileName), data, err => {
        if (err) {

        }
    })
}

// TODO: Create a function to initialize app
function init() {
    console.log('Welcome to the README generator! Please answer all the following questions for the best quality README');
    inquirer.prompt(questions)
        .then(responses => {
            console.log(responses);
            generateMarkdown(responses);
        })
}

// Function call to initialize app
init();
