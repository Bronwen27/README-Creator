const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
 {
    type: 'input',
    name: 'title',
    message: 'Please enter your repository title'
 },
 
 {
   type: 'input',
   name: 'description',
   message: 'Please write a brief description of your project along with programmes and languages used'
},

{
   type: 'input',
   name: 'installation',
   message: 'please describe any commands that will be needed to install/run or test any parts of your project'
},

{
   type: 'input',
   name: 'usage',
   message: 'Please write a brief summary of how to use your project, you may wish to include some image links'
},

{
   type: 'input',
   name: 'license',
   message: 'Please enter the license name that you are under',
   choices: ['MIT', 'Apache 2.0', 'GPLv3', 'BSD 3-Clause', 'Unlicensed']
},

{
   type: 'input',
   name: 'contribute',
   message: 'please write whether the user can contribute to this project and include the channels they should use'
},

{
   type: 'input',
   name: 'tests',
   message: 'Please enter any commands that are needed to run tests'
},

{
   type: 'input',
   name: 'githubName',
   message: 'Please enter your github user-name'
},

{
   type: 'input',
   name: 'email',
   message: 'Please enter your email address'
},

];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
 
}

// function to initialize program
function init() {
 

  inquirer.prompt(questions).then((response) => {
    
    console.log(response);

    writeToFile('README.md', generateMarkdown({...response}))
  });
}

// function call to initialize program
init();