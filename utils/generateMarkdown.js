function generateMarkdown(data) {
  return `
# ${data.title}

## ${data.description}

## Table of Contents

  * [Steps to Install](#install)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing Authors](#contributing)
  * [Tests](#test)
  * [Contact Information](#email)
  * [Profile Image](#image) 
`;
}

module.exports = generateMarkdown;
