const puppetter = require("puppeteer");
const isLoggedIn = require("./helpers/isLoggedIn");
const cookiesHandler = require("./helpers/cookiesHandler");
const login = require("./login");
const tweet = require("./tweeter");
const initializer = async (req, res) => {
  const browser = await puppetter.launch({
    headless: false,
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });
  const page = await browser.newPage();
  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36"
  );
  page.setViewport({
    isMobile: false,
    hasTouch: false,
    width: 1366,
    height: 768
  });

  await cookiesHandler(page);
  await page.waitFor(500);
  await page.goto(process.env.TWITTER_LOGIN);
  if (await isLoggedIn(page)) {
    tweet(page, req.query.tweet, res);
  } else {
    login(page);
    tweet(page, req.query.tweet, res);
  }
};
module.exports = initializer;
