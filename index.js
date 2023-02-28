const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
 {
    type: 'input',
    name: 'title',
    message: 'Please enter your repository title: '
 },
 
 {
   type: 'input',
   name: 'description',
   message: 'Please write a brief description of your project along with programmes and languages used: '
},

{
   type: 'input',
   name: 'installation',
   message: 'please describe any commands that will be needed to install/run or test any parts of your project: '
},

{
   type: 'input',
   name: 'usage',
   message: 'Please write a brief summary of how to use your project, you may wish to include some image links: '
},

{
   type: 'list',
   name: 'license',
   message: 'Please enter the license name that you are under: ',
   choices: ['MIT', 'Apache 2.0', 'GPLv3', 'BSD 3-Clause', 'Unlicensed']
},

{
   type: 'input',
   name: 'contribute',
   message: 'please write whether the user can contribute to this project and include the channels they should use: '
},

{
   type: 'input',
   name: 'tests',
   message: 'Please enter any commands that are needed to run tests: '
},

{
   type: 'input',
   name: 'githubName',
   message: 'Please enter your github user-name: '
},

{
   type: 'input',
   name: 'email',
   message: 'Please enter your email address: '
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

// function to add license badges

function renderLicenseBadge(license) {
   const licenses = {
     "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
     "Apache 2.0": "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
     "GPLv3": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
     "BSD 3-Clause": "[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
     "Unlicensed": "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
   };
   return licenses[license];
 }

// function call to initialize program
init();