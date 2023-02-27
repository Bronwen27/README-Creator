const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const ora = require('ora');

// array of questions for user
const questions = [
 {
    type: 'input',
    name: 'title',
    message: 'Please enter your repository title'
 },
 {
    type: 'input',
    name: 'userStory',
    message: 'Please write a brief description of the expectations of the user and what the purpose is for them using your project'
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
   name: 'deployedLink',
   message: 'Please enter your deployment link'
},

{
   type: 'input',
   name: 'license',
   message: 'Please enter the license name that you are under'
},

{
   type: 'input',
   name: 'tests',
   message: 'Please enter the names of any contributers to this project'
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