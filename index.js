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

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
