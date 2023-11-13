const { Select } = require('selenium-webdriver');
const {Builder, By} = require('selenium-webdriver');
(async function helloSelenium() {
  let driver = await new Builder().forBrowser('chrome').build();
  const screenShotId=process.argv[2];
  await driver.get('https://nop-qa.portnov.com');
const login = driver.findElement(By.className('ico-login'))
const actions = driver.actions({async: true})
await actions.move({origin:login})
.pause(1000)
.click()
.perform();
await actions.pause(2000)
const Email = await driver.findElement(By.id("Email"));
await driver.actions()
.sendKeys(Email,"8@111.com")
.perform();
const Password = await driver.findElement(By.id("Password"));
await driver.actions()
.sendKeys(Password,"123456")
.perform();
const submit = driver.findElement(By.className('button-1 login-button'))
submit.click();
await driver.actions()
.pause(5000)
.perform();

const submitScreenShot =await driver.takeScreenshot()
require("fs")
.writeFile(`${screenShotId}.png`,submitScreenShot,"base64",function(err)

{console.log(err);

})




// await actions.pause(20000)
// await driver.quit();
})();