const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { getMaxListeners, listenerCount } = require("process");

possibleNumberOfEmployeesArray = [1,2,3,4];

const questions = [ {
    type: `list`,
    name: `numberOfInterns`,
    message: `How many Interns are a part of your team?`,
    choices: possibleNumberOfEmployeesArray
}, {
    type: `list`,
    name: `numberOfEngineers`,
    message: `How many Engineers are a part of your team?`,
    choices: possibleNumberOfEmployeesArray
}]

const managerInfo = [{
    type: `string`,
    name: `name`,
    message: `Manager name?`
}, {
    type: `string`,
    name: `id`,
    message: `Manager id?`
}, {
    type: `string`,
    name: `email`,
    message: `Manager email?`
}, {
    type: `string`,
    name: `officeNumber`,
    message: `Manager office number?`
}]


function teamBuilder(){

    inquirer
     .prompt(questions)

     .then(a => {
        let totalmembers = 1 + a.numberOfInterns + a.numberOfEngineers;
        let m = 1;
        let i = a.numberOfInterns;
        let e = a.numberOfEngineers;
        
        inquirer
            .prompt(managerInfo)

            .then(b=>{

        });
        
         

});

}

teamBuilder();




// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```