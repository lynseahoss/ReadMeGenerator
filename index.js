const inquirer = require("inquirer")
const axios = require("axios");
const pdf = require("html-pdf");
const js = require("./utils/generateMarkdown.js")
const fs = require("fs")
// one dot = look in same folder currently in  for the wanted js file (generateMarkDown.js)
//two dots -- brings/moves up/back one directory/folder to look for js file 
//{}= makes an object (key:value)

const questions = [
{
    name: "username",
    type: "input",
    message: "Enter your GitHub Username",

},
{
    name: "title",
    type: "input",
    message: "Enter the Title of your GitHub Repository"
},
{
    name: "description",
    type: "input",
    message: "Enter a short description of your GitHub Repository"
},
{
    name: "install",
    type: "input",
    message: "Enter the installation process of the project"
},
{
    name: "usage",
    type: "input",
    message: "Enter the usage of project"
},

{
    name: "license",
    type: "list",
    message: "Choose your license type",
    choices: ["MIT", "Boost", "Apache 2.0", "GNU AGPLv3" ]

},
{
    name: "contributing",
    type: "input",
    message: "Enter contibuting factors/ authors"
},
{
    name: "test",
    type: "input",
    message: "Enter the current running tests on project"
},
{
    name: "quest1",
    type: "input",
    message: "Enter any questions for the project"
},

];


function init() {

    inquirer.prompt(questions).then(function(answer){
        
        axios.get(`https://api.github.com/users/${answer.username}`) 
        //github api inside of .get()s githubURL + username (find out how to access github api username)
        .then(res=> {
            console.log(encodeURI(answer.license))
           //to add a space in the license 
           answer.license = encodeURI(answer.license)

        })
       
        
     
    })
}

init();
//res gives resolution