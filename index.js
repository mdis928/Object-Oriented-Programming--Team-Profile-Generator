const inquirer = require ('inquirer');
const fs = require ('fs');
const path = require ('path')
// const generateHTML = require ('./src');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "index.html");
const render = require("./src/page-template.js");


// const generatorMarkdown = require('./generateMarkdown')

const team = []

// This funtion sets up the initial prompt. The switch funtion runs that whatever you choose. Easier way to write if/else 
function createTeam () {
    inquirer.prompt ([
        {
            type: "list",
            message: "Which type of team member would you like to add?",
            name: "MyTeamMemberProfile",
            choices: ["Manager", "Engineer", "Intern", "No one else"]
        }
    ]).then (userChoice => {
        switch (userChoice.MyTeamMemberProfile) {
            case "Manager":
                addManager ()
                break
            case "Engineer":
                addEngineer ()
                break
            case "Intern":
                addIntern ()
                break
            default:
                writeHTML ()
        }
    })
}

// array of questions
// const questions = [
//     {
//         type: 'input',
//         message: 'What is the name of your team manager?',
//         name: 'Name',
//     },
//     {
//         type: 'input',
//         message: 'Please enter employee ID',
//         name: 'ID'
      
//     },
//     {
//         type: 'input',
//         message: "Please enter the email addressw",
//         name: "Email"
//     },
//     {
//         type: 'input',
//         message: "Please enter office number",
//         name: "Office Number"
//     },
//     {
//         type: "list",
//         message: "Do you want to add more team members?",
//         name: "Add any team members",
//         choices: ["Engineer", "Intern", "I don't want to add anymore team members"]
//     },
//     {
//         type: "input",
//         message: "What is the name of the Engineer?",
//         name: "Engineer"
//     },
//     {
//         type: "input",
//         message: "What is the GitHub username",
//         name: "GitHub"
//     },
//     {
//         type: "input",
//         message: "What is the name of the Intern",
//         name: "Name"
//     },
//     {
//         type: "input",
//         message: "What is the name of the school",
//         name: "School"
//     },
//     { 
//         type: "input",
//         message: "what is your email address?",
//         name: "Email"

//     },
//   ]

  

//   function writeToFile (fileName, data) {

//     fs.writeFile(fileName, data, function(err) {
//         console.log(fileName)
//         console.log(data)
//         if (err) {
//               return console.log(err)
//         } else {
//             console.log('Sucess! Please check out the Team Profile')
//         }
//     })
// }


function addManager(){
    inquirer
        .prompt ([
            {
                type: 'input',
                message: 'What is the name of your team manager?',
                name: 'ManagerName',
            },
            {
                type: 'input',
                message: 'Please enter the employee ID',
                name: 'ManagerID'
              
            },
            {
                type: 'input',
                message: "Please enter the email address",
                name: "ManagerEmail"
            },
            {
                type: 'input',
                message: "Please enter office number",
                name: "ManagerOfficeNumber"
            },
        ]).then (answers =>{
            const manager = new Manager (answers.ManagerName, answers.ManagerID, answers.ManagerEmail, answers.ManagerOfficeNumber)
            team.push (manager)
            createTeam ()
        })
}

function addEngineer(){
    inquirer
        .prompt ([
            {
                type: 'input',
                message: 'What is the name of the Engineer?',
                name: 'EngineerName',
            },
            {
                type: 'input',
                message: 'Please enter the employee ID',
                name: 'EngineerID'
            },
            {
                type: 'input',
                message: "Please enter the email address",
                name: "EngineerEmail"
            },
            {
                type: 'input',
                message: "Please enter the gitHub username",
                name: "gitHubUser"
            },
        ]).then (answers =>{
            const engineer = new Engineer (answers.EngineerName, answers.EngineerID, answers.EngineerEmail, answers.gitHubUser)
            team.push (engineer)
            createTeam ()
        })
}

function addIntern(){
    inquirer
        .prompt ([
            {
                type: 'input',
                message: 'What is the name of your Intern?',
                name: 'InternName',
            },
            {
                type: 'input',
                message: 'Please enter the employee ID',
                name: 'InternID'
            },
            {
                type: 'input',
                message: "Please enter the email address",
                name: "InternEmail"
            },
            {
                type: 'input',
                message: "Please enter the school name",
                name: "schoolName"
            },
        ]).then (answers =>{
            const intern = new Intern (answers.InternName, answers.InternID, answers.InternEmail, answers.schoolName)
            team.push (intern)
            createTeam ()
        })
}
        
        function writeHTML () {
            if (!fs.existsSync(OUTPUT_DIR)) {
                fs.mkdirSync(OUTPUT_DIR)
              }
              fs.writeFileSync(outputPath, render(team));
        }    
        
        createTeam () 




























//     function init () {
//     inquirer.prompt (questions)
//     .then(function(data) {
//         writeToFile("index.html", generatorMarkdown(data));
//         console.log(data)
//     })
// }

// init();
