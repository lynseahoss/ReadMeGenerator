const inquirer = require("inquirer")
const axios = require("axios");
const pdf = require("html-pdf");
const js = require("./utils/generateMarkdown.js")

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
    name: "projectName",
    type: "input",
    message: "Enter your Github Repository Link"
},
{
    name: "license",
    type: "list",
    message: "Choose your license type",
    choices: ["MIT", "Apache", "GNU", ]

},

{
    name: "color",
    type: "list",
    message: "Choose your favourite color",
    choices: ["pink","purple", "green", "black"]
}
];

function writeToFile(fileName, data) {
}

function init() {
//uses inquirer to get info needed- calls to gitH to get users profile back
//parameters are what go into ()s of a function to let developers know what the function expects
    inquirer.prompt(questions).then(function(answer){
        //promise function
        axios.get("https://api.github.com/users/" + username) 
        //github api inside of .get()s githubURL + username (find out how to access github api username)
        .then(res)
        //.then gives info back
        writeToFile()
    })
}

init();
//res gives resolution