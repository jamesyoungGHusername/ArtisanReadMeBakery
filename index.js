// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


const genMd = require('./utils/generateMarkdown.js');
//Named constant same as class definition.
const Question = require('./utils/Question.js');

//possible question types
const qTypes = {
    input: "input",
    number: "number",
    confirm: "confirm",
    list: "list",
    rawlist: "rawlist",
    expand: "expand",
    checkbox: "checkbox",
    password: "password",
    editor: "editor"
}

//  array of questions for user input
const questions = [
    new Question(qTypes.input,"What is the name of your project?","Title"),
    new Question(qTypes.input,"Describe your project.","Description"),
    new Question(qTypes.input,"How should your app be installed?","Installation"),
    new Question(qTypes.input,"How should your app be used?","Usage"),
    //The open source initiative has an api, and I considered pulling the full license list for this app, but turns out there are a LOT of open source licenses. The below are the most popular.
    new Question(qTypes.list,"What license will you be using?","License",["MIT License","Apache 2.0","BSD 3-Clause","BSD 2-Clause","GNU GPL","GNU LGPL","Mozilla Public License 2.0","Common Development and Distribution License","Eclipse Public License version 2.0"]),
    new Question(qTypes.input,"Who contributed?","Credits"),
    new Question(qTypes.input,"How should someone contribute?","Contributing"),
    new Question(qTypes.input,"Any special testing instructions?","Testing"),
    new Question(qTypes.input,"What is your github username?","GitHub"),
    new Question(qTypes.input,"What is your email?","Email")
    ];

var sections=[]

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,genMd(data),(err)=>
        err ? console.error(err) : console.log('File written.')
    );
}

//function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) =>
        {
            writeToFile("TestREADME.md",response);
        }
    );
}





// Function call to initialize app
init();


