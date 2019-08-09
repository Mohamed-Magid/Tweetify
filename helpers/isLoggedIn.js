const isLoggedIn = async page => {
  await page.waitForSelector("title");
  const title = await page.title();
  console.log(title);
  return title === "Login on Twitter" ? false : true;
};

module.exports = isLoggedIn;