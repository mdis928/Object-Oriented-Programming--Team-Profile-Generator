const inquirer = require ('inquirer');
const fs = require ('fs');

// update generateHTML later
const generateHTML = require ('./src');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')


// const generatorMarkdown = require('./generateMarkdown')

// array of questions
const questions = [
    {
        type: 'input',
        message: 'What is the name of your team manager?',
        name: 'Name',
    },
    {
        type: 'input',
        message: 'Please enter employee ID',
        name: 'ID'
      
    },
    {
        type: 'input',
        message: "Please enter the email addressw",
        name: "Email"
    },
    {
        type: 'input',
        message: "Please enter office number",
        name: "Office Number"
    },
    {
        type: "list",
        message: "Do you want to add more team members?",
        name: "Add any team members",
        choices: ["Engineer", "Intern", "I don't want to add anymore team members"]
    },
    {
        type: "input",
        message: "What is the name of the Engineer?",
        name: "Engineer"
    },
    {
        type: "input",
        message: "what is the GitHub username",
        name: "GitHub"
    },
    {
        type: "input",
        message: "What is the name of the Intern",
        name: "Name"
    },
    {
        type: "input",
        message: "What is the name of the school",
        name: "School"
    },
    { 
        type: "input",
        message: "what is your email address?",
        name: "Email"

    },
    
  ]