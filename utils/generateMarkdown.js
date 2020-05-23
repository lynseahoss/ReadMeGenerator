function generateMarkdown(data) {
  return `
# ${data.title} ![${data.license}]

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

## Contact Information
${data.email}
![User Img](${data.image})

`;
}

module.exports = generateMarkdown;
