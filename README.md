# readme-generator

A node.js CLI app to generate a readme.md file for a project using user inputs to populate default readme.md sections.

- [Installation](#Installation)
- [Environmental variables setup](#Environmental-variables-setup)
- [Usage](#Usage)
- [Generated file contents](#Generated-file-contents)

## Installation

Clone the app repository then run the following command to install the app dependencies.

```sh
npm install
```

## Environmental variables setup

Open the .ev_example file and add your github user name and password as per the example below then rename the file to ( .env ). The app uses these data to access the github api. The .env file is included in the .gitignore file to stop it from being pushed to github for security.

```sh
GITHUB_USERNAME = enter username here
GITHUB_PASSWORD = enter password here
```

## Usage

To run the app, use the following command in a terminal.

```sh
node index.js
```

Then follow the command prompt to enter the requested information.

## Generated file contents

The app will generate a README.md file in the output folder. The app will overwrite any existing README.md file preexisting in the output folder. The generated readme.md file will have the following default sections.

- Installation
- Usage
- License
- Contributing
- Tests
- Questions
  - Github profile avatar
  - Github followers badge
  - Github profile link
  - Github public email
