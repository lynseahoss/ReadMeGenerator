function generateMarkdown(data) {
  return `
# ${data.title}

## ${data.description}

## Table of Contents

  * [Steps to Install](#install)
  * [Purpose of Application](#usage)
  * [License](#license)
  * [Contributing Authors](#contributing)
  * [Tests Performed](#test)
  * [Contact Information](#email)
  * [Profile Image](#image) 
  
----
## Steps to Install
${data.install}


## Purpose of Application
${data.usage} 


## Project License
${data.license}

## Contributing Authors
${data.contributing}

## Tests Performed
${data.test}

##

`;
}

module.exports = generateMarkdown;
