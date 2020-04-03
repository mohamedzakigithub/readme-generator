// Requiring the node modules
const axios = require("axios");
require("dotenv").config();

// Get the user data from the environmental variables
const githubUsername = process.env.GITHUB_USERNAME;
const githubPassword = process.env.GITHUB_PASSWORD;

// Call the github api using axios
const api = {
  async getUser(username) {
    try {
      const userData = await axios.get("https://api.github.com/users/" + username, {
        auth: {
          username: githubUsername,
          password: githubPassword
        }
      });
      const { email, avatar_url } = userData.data;
      return { email, avatar_url };
    } catch (error) {
      // Catch and display errors
      return console.log("An error occurred: " + error.response.statusText);
    }
  }
};
module.exports = api;
