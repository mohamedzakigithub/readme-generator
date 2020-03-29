function generateMarkdown(data) {
  return `
# ${data.title}

<img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/${data.username}/${data.title}">

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

<img src="${data.avatar_url}" style="height:100px"/>
<br>
Email: <a href="mailto:${data.email}">${data.email}</a>

`;
}

module.exports = generateMarkdown;
