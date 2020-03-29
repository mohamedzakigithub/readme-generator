const axios = require("axios");

const api = {
  async getUser(username, password) {
    try {
      const user = await axios.get("https://api.github.com/user", {
        auth: {
          username: username,
          password: password
        }
      });

      const emails = await axios.get("https://api.github.com/user/emails", {
        auth: {
          username: username,
          password: password
        }
      });
      const { avatar_url } = user.data;
      const { email } = emails.data.filter(obj => obj.primary === true)[0];
      return { email, avatar_url };
    } catch (error) {
      return console.log("API Error: " + error.response.statusText);
    }
  }
};
module.exports = api;
