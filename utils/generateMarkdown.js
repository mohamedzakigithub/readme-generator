// A function using string literal to return the generated readme file with populated section.
function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contribution}

## Tests
${data.tests}

## Questions

For questions please contact the project owner

<img src="${data.avatar_url}" width="100"/><br/>
Gihthub profile: <a href="https://github.com/${data.username}">${data.username}</a>   <img alt="GitHub followers" src="https://img.shields.io/github/followers/${data.username}"><br/>Email: ${data.email}

`;
}

module.exports = generateMarkdown;
