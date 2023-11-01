// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please provide 3 characters for your logo:'
        // Sample Input: SVG
    },
    {
        type: 'list',
        name: 'logoShape',
        message: 'Please select the desired shape of your logo:',
        choices: ['circle', 'triangle', 'square']
        // Sample Input: circle
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please provide desired color keyword/hexadecimal (excl #) for text:'
        // Sample Input: white/FFFFFF
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please provide desired color keyword/hexadecimal (excl #) for your shape:'
        // Sample Input: purple/800080
    }           
];

// TODO: Create a function to write svg file

// TODO: Create a function to initialize app

// TODO: Function call to initialize app
