function gitHubRepoURL(username, title) {
  const gitHubTitle = title.toLowerCase().split(" ").join("-");
  
}

function generateMarkdown(data) {
  return `
# ${data.title} ![License](https://img.shields.io/badge/license-${data.license}-pink)

## Project Description
${data.description}

## Table of Contents
  * [Steps to Install](#install)
  * [Purpose of Application](#usage)
  * [License](#license)
  * [Contributing Authors](#contributing)
  * [Tests Performed](#test)
  * [Contact Information](#email)
  * [Profile Image](#image) 
  

## Steps to Install
Process of how to install project in terminal:
  \`\`\`
  ${data.install}
  \`\`\`

## Purpose of Project
${data.usage} 


## Project License
This project is using the license ${data.license}


## Contributing Authors
${data.contributing}


## Tests Performed
\`\`\`
${data.test}
\`\`\`

## Contact Information
${data.email}


![User Img](${data.image})

`;
}

module.exports = generateMarkdown;
