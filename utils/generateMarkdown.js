function generateMarkdown(data) {
  return `
# ${data.title}

## ${data.description}

## Table of Contents

  * [Steps to Install](#install)
  * [Purpose of Application](#usage)
  * [Project Technology](#technology)
  * [License](#license)
  * [Contributing Authors](#contributing)
  * [Tests](#test)
  * [Contact Information](#email)
  * [Profile Image](#image) 
  
----
## Steps to Install
${data.install}


## Purpose of Application
${data.usage} 


## Project License
### ${data.license}


`;
}

module.exports = generateMarkdown;
