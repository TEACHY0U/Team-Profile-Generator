// import employee classes
const inquirer = require('inquirer');
const fs = require('fs');
const { error } = require('console');
const generatedHtmlFilePath = './dist/TeamProfile.html'

let teamMembers = [];

inquirer
.prompt([
    {
        type: 'input',
        name: 'managerName',
        message: "Enter team manager's name",
        },
        {
        type: 'input',
        name: 'managerID',
        message: "Enter team manager's employee ID.",
        },
        {
        type: 'input',
        name: 'managerEmail',
        message: 'Enter team managers email',
        },
        {
        type: 'input',
        name: 'managerOfficeNumber',
        message: 'Enter team managers office number',
        },
        {
        type: 'list',
        name: 'additionalTeamMembers',
        message: 'Select team members to add',
        choices: ["Engineer", "Intern"]
        },
])

.then(answers => {
    let manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber);

    teamMembers.push(manager);

.catch(error => {
    if(error.isTtyError) {
    } else {
    }
});

function addIntern(){
    inquirer
.prompt([
    {
        type: 'input',
        name: 'internName',
        message: "Enter inters name",
        },
        {
        type: 'input',
        name: 'internID',
        message: "Enter interns employee ID.",
        },
        {
        type: 'input',
        name: 'internEmail',
        message: 'Enter interns email',
        },
        {
        type: 'input',
        name: 'internSchool',
        message: 'Enter interns school',
        },
        {
        type: 'list',
        name: 'additionalTeamMembers',
        message: 'Select team members to add',
        choices: ["Engineer", "Intern", "Exit"]
        },
])

.then(answers => {
    let intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);

    teamMembers.push(intern);


.catch(error => {
    if(error.isTtyError) {
    } else {
    }
});

}


function generateHTML()