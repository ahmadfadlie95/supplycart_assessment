const browserScreen = require("../screenobjects/browser.screen");
const helpers = require("../helpers/generateData")

const customerName = helpers.generateName();
const customerEmail = helpers.generateEmail();
const subject = helpers.generateSubject();
const message = helpers.generateMessage();

describe('Contact Us', () => {
    it('Contact Us Automation', async () => {
        //Launch the browser
        await browser.maximizeWindow();

        //Navigate to the page
        await browser.url("https://automationexercise.com/");

        //Verify user is at Homepage
        await expect(browser.$(browserScreen.texts.featuredItems)).toBeDisplayed();
        await expect(browser.$(browserScreen.texts.featuredItems)).toHaveText("FEATURES ITEMS");

        //Click on Contact Us button
        await browser.$(browserScreen.buttons.contactUsBtn).click();

        //Verify "GET IN TOUCH" is visible
        await expect(browser.$(browserScreen.texts.getInTouch)).toBeDisplayed();
        await expect(browser.$(browserScreen.texts.getInTouch)).toHaveText("GET IN TOUCH");

        //Enter name, email, subject, message
        await browser.$(browserScreen.fields.nameField).setValue(customerName);
        await browser.$(browserScreen.fields.emailField).setValue(customerEmail);
        await browser.$(browserScreen.fields.subjectField).setValue(subject);
        await browser.$(browserScreen.fields.msgField).setValue(message)

        //Upload file
        const filePath = 'test/utils/testfile.txt';
        const remoteFilePath = await browser.uploadFile(filePath);
        const fileInput = browser.$(browserScreen.uploads.contactUsMedia);
        await fileInput.setValue(remoteFilePath);

        //Click Submit button
        await browser.$(browserScreen.buttons.submitFormBtn).click();

        //Accept Alert
        await browser.acceptAlert();

        //Verify success message
        await expect(browser.$(browserScreen.texts.successMsg)).toBeDisplayed();
        await expect(browser.$(browserScreen.texts.successMsg)).toHaveText("Success! Your details have been submitted successfully.");

        //Click Home button
        await browser.$(browserScreen.buttons.homeBtn).click();
    })
})