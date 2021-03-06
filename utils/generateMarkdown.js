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
  * [Purpose of Project](#usage)
  * [Project License](#license)
  * [Contributing Authors](#contributing)
  * [Tests Performed](#tests)
  * [Questions](#questions)
 
## Install
Process of how to install project in terminal:
  \`\`\`
  ${data.install}
  \`\`\`
## Usage
${data.usage} 
## License
This project is using the license ${data.license}
## Contributing Authors
${data.contributing}
## Tests 
\`\`\`
${data.test}
\`\`\`
## Questions
If you have any questions about this see contact [${data.username}](github.com/${data.username}) via email [${data.email}](mailto:${data.email})

![User Img](${data.image})

`;
}

module.exports = generateMarkdown;
