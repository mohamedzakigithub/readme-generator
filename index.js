// Require the necessary nodea and local packages.
var fs = require("fs");
var inquirer = require("inquirer");
var api = require("./utils/api");
var generateMarkdown = require("./utils/generateMarkdown");

// Inquirer prompt object for github username.
const githubUserInquiry = [
  {
    type: "input",
    name: "githubUser",
    message: "Please enter your github user name:"
  }
];

// Inquirer prompt object for the readme sections.
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
    message: "Please enter the licence information:"
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

// A functionto write the generated readme file to the output folder.
async function writeToFile(fileName, data) {
  const markdown = generateMarkdown(data);
  fs.writeFile(`./output/${fileName}`, markdown, err => {
    if (err) throw err;
    console.log("Readme file generated successfully!");
  });
}

// The main function that pulls the user data and calll the functions to generate the readme file and write the file
// to the disk
async function init() {
  try {
    const user = await inquirer.prompt(githubUserInquiry);
    const userData = await api.getUser(user.githubUser);
    if (!userData) {
      throw "Cannot find user";
    }
    const { email, avatar_url } = userData;
    console.log("github user data loaded successfully");
    const readmeData = await inquirer.prompt(readmeInquiry);
    readmeData.username = user.githubUser;
    readmeData.avatar_url = avatar_url;
    if (email === null) {
      readmeData.email = "Private";
    } else {
      readmeData.email = `<a href="mailto:${email}">${email}</a>`;
    }
    writeToFile("README.md", readmeData);
  } catch (error) {
    console.error(error);
  }
}

// invoking the nit function.
init();
