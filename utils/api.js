const axios = require("axios");
require("dotenv").config();

const githubUsername = process.env.GITHUB_USERNAME;
const githubPassword = process.env.GITHUB_PASSWORD;

const api = {
  async getUser(username) {
    try {
      const userData = await axios.get(
        "https://api.github.com/users/" + username,
        {
          auth: {
            username: githubUsername,
            password: githubPassword
          }
        }
      );
      const { email, avatar_url } = userData.data;
      return { email, avatar_url };
    } catch (error) {
      return console.log(error);
    }
  }
};
module.exports = api;
