var fs = require("fs");
var inquirer = require("inquirer");
var api = require("./utils/api");
var generateMarkdown = require("./utils/generateMarkdown");
require("dotenv").config();

const password = process.env.githubPassword;

const usernameInquiry = [
  {
    type: "input",
    name: "username",
    message: "Please enter your github user name:"
  }
];

const readmeInquiry = [
  {
    type: "input",
    name: "title",
    message: "Please enter the project title / repository name:"
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
    const username = await inquirer.prompt(usernameInquiry);
    const { email, avatar_url } = await api.getUser(
      username.username,
      password
    );
    console.log("User data loaded successfully");
    const readmeData = await inquirer.prompt(readmeInquiry);
    readmeData.username = username.username;
    readmeData.email = email;
    readmeData.avatar_url = avatar_url;
    writeToFile(readmeData.title + ".md", readmeData);
  } catch (error) {
    console.error("Something went wrong, Cannot retrieve user data!");
  }
}

init();
