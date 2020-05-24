const inquirer = require("inquirer")
const axios = require("axios");
const js = require("./utils/generateMarkdown.js")
const fs = require("fs")


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
    message: "Enter the command to run the project",
    default: "npm i"
},
{
    name: "usage",
    type: "input",
    message: "Enter what the purpose of this project is for the user"
},

{
    name: "license",
    type: "list",
    message: "Choose your license type",
    choices: ["MIT", "BSD3", "Apache 2.0", "GNU AGPLv3", "None" ]

},
{
    name: "contributing",
    type: "input",
    message: "Enter what are the contributing factors for this repository"
},
{
    name: "test",
    type: "input",
    message: "Enter the command to test the project",
    default: "npm test"
},
{
    name: "email",
    type: "input",
    message: "Enter your email associated with Github"
},
{
    name: "image",
    type: "input",
    message: "Enter URL Link to profile picture"
}

];


function init() {
    //prompting inquirer to run the questions and then make an object with user answers
    inquirer.prompt(questions).then(function(answer){
        
        axios.get(`https://api.github.com/users/${answer.username}`) 
        //github api inside of .get()s githubURL + username (find out how to access github api username)
        .then(res=> {
            console.log(encodeURI(answer.license))
           //to add a space in the license 
           answer.license = encodeURI(answer.license)
           //writeFile will write/push user answers to README.md 
            fs.writeFile("README.md", js({...answer, ...res}), err =>{
                if (err){
                    console.log(err)
                    return
                }
                console.log("ReadMe created")
            })
        })
       
        
     
    })
}

init();
