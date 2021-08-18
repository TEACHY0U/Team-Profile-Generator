// import employee classes
const inquirer = require('inquirer');

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
        name: 'additionalTeamMember',
        message: 'Select team members to add',
        choices: ["Engineer", "Intern"]
        },
])

.then(answers => {

})