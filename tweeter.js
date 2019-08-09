const tweet = async (page, tweetThis = "Dummy Tweet", res) => {
  await page.waitForSelector("a[aria-label=Tweet]");
  const tweet = await page.$("a[aria-label=Tweet]");
  await tweet.click();
  await page.waitFor(1000);
  await page.keyboard.type(tweetThis, { delay: 50 });
  await page.waitFor(1000);
  const tweetButton = await page.$("div[data-testid=tweetButton]");
  await tweetButton.click();

  res.json({
    status: "success",
    tweet: tweetThis
  });
};

module.exports = tweet;