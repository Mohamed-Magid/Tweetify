require("./db/mongoose");
const Cookies = require("./model/cookies");
const login = async (page) => {
  await page.waitForSelector(".js-username-field");
  const email = await page.$(".js-username-field");
  await email.click();
  await page.keyboard.type(process.env.TWITTER_EMAIL, { delay: 10 });
  await page.waitFor(500);
  const password = await page.$(".js-password-field");
  await password.click();
  await page.keyboard.type(process.env.TWITTER_PASSWORD, { delay: 10 });
  await page.waitFor(500);
  const login = await page.$("button[type=submit]");
  await login.click();
  await page.waitFor(2000);
  findAndReplaceCookies(page);
};

const findAndReplaceCookies = async page => {
  const existingCookies = Cookies.find();
  if (existingCookies) await existingCookies.remove();
  const cookies = new Cookies({
    cookies: JSON.stringify(await page.cookies())
  });
  await cookies.save();
};

module.exports = login;