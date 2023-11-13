const { Select } = require('selenium-webdriver');
const {Builder, By} = require('selenium-webdriver');
(async function helloSelenium() {
  let driver = await new Builder().forBrowser('chrome').build();

  const email=process.argv[2];
  const screenShotId=process.argv[3];

  await driver.get('https://nop-qa.portnov.com');
const register = driver.findElement(By.className('ico-register'))
const actions = driver.actions({async: true})
await actions.move({origin:register})
.pause(1000)
.click()
.perform();
await actions.pause(5000)
const GenderRadio = await driver.findElement(By.id("gender-female"));
await driver.actions().move({origin:GenderRadio})
.pause(1000)
.click()
.perform();
const LastName = await driver.findElement(By.id("LastName"));
await driver.actions()
.sendKeys(LastName,"B")
.perform();
const daysSelect= new Select(driver.findElement(By.name("DateOfBirthDay")))
await daysSelect.selectByVisibleText("31");
const monthsSelect= new Select(driver.findElement(By.name("DateOfBirthMonth")))
await monthsSelect.selectByVisibleText("December");
const YearsSelect= new Select(driver.findElement(By.name("DateOfBirthYear")))
await YearsSelect.selectByVisibleText("1982");
const Email = await driver.findElement(By.id("Email"));
await driver.actions()
.sendKeys(Email,email)
.perform();
const Company = await driver.findElement(By.id("Company"));
await driver.actions()
.sendKeys(Company,"NTG")
.perform();
const Password = await driver.findElement(By.id("Password"));
await driver.actions()
.sendKeys(Password,"123456")
.perform();
const ConfirmPassword = await driver.findElement(By.id("ConfirmPassword"));
await driver.actions()
.sendKeys(ConfirmPassword,"123456")
.perform();

const NewsletterCheck=driver.findElement(By.id("Newsletter"))
NewsletterCheck.click();
const submit = driver.findElement(By.id('register-button'))
submit.click();
await driver.actions()
.pause(5000)
.perform();

const submitScreenShot =await driver.takeScreenshot()
require("fs")
.writeFile(`${screenShotId}.png`,submitScreenShot,'base64',function(err)
{console.log(err);
})
})();