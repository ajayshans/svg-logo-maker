// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateSVG = require('./lib/generateSVG.js');

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please provide 3 characters for your logo:'
        // Sample Input: SVG
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please select the desired shape of your logo:',
        choices: ['circle', 'triangle', 'square']
        // Sample Input: circle
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please provide desired color keyword/hexadecimal for text:'
        // Sample Input: white/FFFFFF
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please provide desired color keyword/hexadecimal for your shape:'
        // Sample Input: purple/800080
    }          
];

// Create a function to write svg file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data => writeToFile('./logo.svg', generateSVG(data))))
    .then(() => console.log('Successfully created logo.svg'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();