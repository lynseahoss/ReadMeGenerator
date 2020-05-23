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
    choices: ["MIT", "Boost", "Apache", "GNU AGPLv3" ]

},
{
    name: "contributing",
    type: "input",
    message: "Enter the contibuting information of the project"
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

{
    name: "color",
    type: "list",
    message: "Choose your favourite color",
    choices: ["pink","purple", "green", "black"]
}
];

function writeToFile(fileName, data) {
    pdf.create(data, options).toFile(fileName, function(err, res) {
        if (err) return console.log(err);
        console.log(res); 
      });
}

function init() {
//uses inquirer to get info needed- calls to gitH to get users profile back
//parameters are what go into ()s of a function to let developers know what the function expects
    inquirer.prompt(questions).then(function(answer){
        //promise function
        axios.get(`https://api.github.com/users/${answer.username}`) 
        //github api inside of .get()s githubURL + username (find out how to access github api username)
        .then(res=> {
            // res.data.color = answer.color
            res.data.title = answer.title
            res.data.description = answer.description
            res.data.install = answer.install
            res.data.usage = answer.usage
            res.data.contributing = answer.contributing
            res.data.test = answer.test
            res.data.quest1 = answer.quest1 

        })
        console.log("Woo!")
        
        //.then gives info back in an object form

        writeToFile()
    })
}

init();
//res gives resolution