// Import the remote method from WebdriverIO
const { remote } = require('webdriverio');
// Import WebdriverIO configuration options
const wdOpts = require('./wd_opts.js');

// Define an async function to run the login test
// Login -> Send Message -> Logout
async function runSendMessageTest() {

    // Initialize the driver instance using WebdriverIO's remote method
    const driver = await remote(wdOpts);

    // Use a try-catch block to capture and handle any potential errors
    try {

        // Locate the username input field and enter the username
        const usernameField = await driver.$('//XCUIElementTypeTextField'); // Locate the username input field using XPath, adjust the selector as needed
        await usernameField.waitForDisplayed(); // Wait for the username input field to be displayed
        await usernameField.click(); // Click the username input field
        await usernameField.clearValue(); // Clear the content of the username input field
        const newValue = 'test@test.com'; // Define the username to be entered
        // Enter the username character by character
        for (let char of newValue) {
            await usernameField.addValue(char);
        }
        await driver.pause(1000); // Pause for 1 second to ensure the input operation is completed

        // Locate the password input field and enter the password
        const passwordField = await driver.$('//XCUIElementTypeSecureTextField'); // Locate the password input field using XPath, adjust the selector as needed
        await passwordField.waitForDisplayed(); // Wait for the password input field to be displayed
        await passwordField.click(); // Click the password input field
        await passwordField.clearValue(); // Clear the content of the password input field
        const password = '123456'; // Define the password to be entered
        // Enter the password character by character
        for (let char of password) {
            await passwordField.addValue(char);
        }
        await driver.pause(1000); // Pause for 1 second to ensure the input operation is completed

        // Simulate pressing the Enter key to submit the form
        await driver.keys(['\uE007']);
        await driver.pause(1000); // Pause for 1 second to ensure the submission operation is completed

        // Locate and click the login button
        const submitButton = await driver.$('//XCUIElementTypeOther[@name=" Log In"]'); // Locate the login button using XPath, adjust the selector as needed
        await submitButton.waitForDisplayed(); // Wait for the login button to be displayed
        await submitButton.click(); // Click the login button
        await driver.pause(2000); // Pause for 2 seconds to ensure the login operation is completed

        // Actions after successful login

        // Commented-out code for sending a message
        // Locate the message input box and click it
        // const sendMsgText = await driver.$('//XCUIElementTypeTextView[@name="Type a message..."]')
        // await sendMsgText.waitForDisplayed()
        // await sendMsgText.click()
        // await sendMsgText.clearValue()

        // Define the text content to be sent
        // const sendText = '123456'
        // Enter the text content character by character
        // for (let char of sendText) {
        //     await sendMsgText.addValue(char);
        // }

        // Pause for 2 seconds to ensure the input operation is completed
        // await driver.pause(2000)
        // Locate and click the send button
        // const sendButton = await driver.$('//XCUIElementTypeButton[@name="GC_SEND_TOUCHABLE"]')
        // await sendButton.waitForDisplayed()
        // await sendButton.click()

        // Locate and click the settings button
        const settingsButton = await driver.$('//XCUIElementTypeButton[contains(@name, "Settings")]'); // Locate the settings button using XPath, adjust the selector as needed
        await settingsButton.waitForDisplayed(); // Wait for the settings button to be displayed
        await settingsButton.click(); // Click the settings button
        await driver.pause(1000); // Pause for 1 second to ensure the click operation is completed

        // Use Predicate String to locate the "Account Privacy, logout, delete account" button and click it
        const pd = 'name == " Account Privacy, logout, delete account "'; // Use Predicate String to define the button name
        const accountButton = await driver.$('-ios predicate string:' + pd); // Use Predicate String to locate the button
        await accountButton.waitForDisplayed(); // Wait for the button to be displayed
        await accountButton.click(); // Click the button
        await driver.pause(1000); // Pause for 1 second to ensure the click operation is completed

        // Use Predicate String to locate the "Logout" button and click it
        const logoutButton = await driver.$('-ios predicate string:name == " Logout"'); // Use Predicate String to locate the logout button
        await logoutButton.waitForDisplayed(); // Wait for the logout button to be displayed
        await logoutButton.click(); // Click the logout button
        await driver.pause(1000); // Pause for 1 second to ensure the click operation is completed

        // Confirm logout
        const confirmLogoutButton = await driver.$('-ios predicate string:name == "Logout"'); // Use Predicate String to locate the confirm logout button
        await confirmLogoutButton.waitForDisplayed(); // Wait for the confirm logout button to be displayed
        await confirmLogoutButton.click(); // Click the confirm logout button
        await driver.pause(1000); // Pause for 1 second to ensure the click operation is completed

    } catch (error) {
        // Capture and print error messages
        console.error(`Error during test execution: ${error.message}`);
    } finally {
        // Regardless of whether an error occurs, pause for 1 second and delete the session
        await driver.pause(1000); // Pause for 1 second
        await driver.deleteSession(); // Delete the session to release resources
    }
}

// Run the send message test
runSendMessageTest();

