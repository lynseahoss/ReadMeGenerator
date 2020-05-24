function gitHubRepoURL(username, title) {
  const gitHubTitle = title.toLowerCase().split(" ").join("-");
  return `https://github.com/${username}/${gitHubTitle}`;
}

function licenseBadge(license, username, title) {
  if (license !== "None") {
    return `[![GitHub license](https://img.shields.io/badge/license-${license}-pink.svg)](${gitHubRepoURL(username, title)})`
  }
  return ''
}

function generateMarkdown(data) {
  return `
# ${data.title} ${licenseBadge(data.license, data.username, data.title)}

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

## Questions
If you have any questions about this see contact [${data.username}](github.com/${data.username}) via email [${data.username}](mailto:${data.email})



![User Img](${data.image})

`;
}

module.exports = generateMarkdown;
