var fs = require("fs");
var inquirer = require("inquirer");
var api = require("./utils/api");
var generateMarkdown = require("./utils/generateMarkdown");

const githubUserInquiry = [
  {
    type: "input",
    name: "githubUser",
    message: "Please enter your github user name:"
  }
];

const readmeInquiry = [
  {
    type: "input",
    name: "title",
    message: "Please enter the project title:"
  },
  {
    type: "input",
    name: "description",
    message: "Please enter the project description:"
  },
  {
    type: "input",
    name: "installation",
    message: "Please enter the installation instructions:"
  },
  {
    type: "input",
    name: "usage",
    message: "Please enter the usage instructions:"
  },
  {
    type: "input",
    name: "license",
    message: "Please enter the licence:"
  },
  {
    type: "input",
    name: "contribution",
    message: "Please enter the contribution details:"
  },
  {
    type: "input",
    name: "tests",
    message: "Please enter the tests details:"
  }
];

async function writeToFile(fileName, data) {
  const markdown = generateMarkdown(data);
  fs.writeFile(fileName, markdown, err => {
    if (err) throw err;
    console.log("Readme file generated successfully!");
  });
}

async function init() {
  try {
    const user = await inquirer.prompt(githubUserInquiry);
    const { email, avatar_url } = await api.getUser(user.githubUser);
    console.log("github user data loaded successfully");
    const readmeData = await inquirer.prompt(readmeInquiry);
    readmeData.username = user.githubUser;
    readmeData.avatar_url = avatar_url;
    if (email === null) {
      readmeData.email = "Private";
    } else {
      readmeData.email = `<a href="mailto:${email}">${email}</a>`;
    }
    writeToFile(readmeData.title + ".md", readmeData);
  } catch (error) {
    console.error(error);
  }
}

init();
