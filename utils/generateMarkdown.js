function generateMarkdown(data) {
  return `
# ${data.title}

## ${data.description}

## Table of Contents

  * [Steps to Install](#install)
  * [User Story](#usage)
  * [User Acceptance](#acceptance)
  * [Project Technology](#technology)
  * [License](#license)
  * [Contributing Authors](#contributing)
  * [Tests](#test)
  * [Contact Information](#email)
  * [Profile Image](#image) 
  
----
## Steps to Install
### ${data.install}


## User Story
### ${data.usage}


`;
}

module.exports = generateMarkdown;
