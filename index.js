const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
 {
    input: 'input',
    questionName: 'Name',
    message: 'Please enter your Github username'
 },

 {
    input: 'input',
    questionName: 'userName',
    message: 'Please enter your repository name'
 },

 {
    input: 'input',
    questionName: 'userStory',
    message: 'Please enter your repository name'
 },

 {
   input: 'input',
   questionName: 'description',
   message: 'Please write a breif description of your prject along with programmes and languages used'
},

{
   input: 'input',
   questionName: 'usage',
   message: 'Please write a breif summary of how to use your project, you may wish to include some image links'
},

{
   input: 'input',
   questionName: 'commands',
   message: 'please enter any commands that will be needed to install/ run  or test any parts of your project'
},

{
   input: 'input',
   questionName: 'deployedLink',
   message: 'Please enter your deployment link'
},

{
   input: 'input',
   questionName: 'license',
   message: 'Please enter the license that you are under'
},

];

// function to write README file
function writeToFile(fileName, data) {

  fs.writeFileSync(fileName, data);
  console.log('File saved!');
}

writeToFile('README.md', '# My Project\nThis is a description of my project.');


// function to initialize program
const inquirer = require('inquirer');
const ora = require('ora');

function init() {
  const spinner = ora('Loading questions...').start();

  inquirer.createPromptModule(questions).then((response) => {
    spinner.stop();
    console.log(response);
  });
}

// function call to initialize program
init();
