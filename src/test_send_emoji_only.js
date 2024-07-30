// Import the remote method from WebdriverIO
const { remote } = require('webdriverio');
// Import WebdriverIO configuration options
const wdOpts = require('./wd_opts.js');

// Define an async function to run the login test
// Test sending an emoji, requires manual login
async function runTestCode() {

    // Initialize the driver instance using WebdriverIO's remote method
    const driver = await remote(wdOpts);

    // Use a try-catch block to capture and handle any potential errors
    try {
        // Define the emoji to be sent
        const emoji = '😄';

        // Locate the message input box and click it
        const sendMsgText = await driver.$('//XCUIElementTypeOther[@name=""]'); // Locate the message input box using XPath
        await sendMsgText.waitForDisplayed(); // Wait for the message input box to be displayed
        await sendMsgText.click(); // Click the message input box
        await driver.pause(1000); // Pause for 1 second to ensure the click operation is completed

        // Locate and click the emoji to be sent
        const sendButton = await driver.$(`-ios predicate string:name == "${emoji}"`); // Locate the send button using iOS predicate string
        await sendButton.waitForDisplayed(); // Wait for the send button to be displayed
        await sendButton.click(); // Click the send button

    } catch (error) {
        console.error(`Error during test execution: ${error.message}`);
    } finally {
        // Regardless of whether an error occurs, pause for 1 second and delete the session
        await driver.pause(1000); // Pause for 1 second
        await driver.deleteSession(); // Delete the session to release resources
    }
}

// Run the login test
runTestCode();

