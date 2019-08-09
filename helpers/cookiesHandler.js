const Cookies = require("../model/cookies");
const cookiesFetcher = async page => {
  let cookies = await Cookies.find();
  if (cookies.length > 0) {
    cookies = JSON.parse(cookies[0].cookies);
    cookies.forEach(cookie => {
      page.setCookie(cookie);
    });
  }
};

module.exports = cookiesFetcher;
