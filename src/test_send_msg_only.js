// Import the remote method from WebdriverIO
const { remote } = require('webdriverio');
// Import WebdriverIO configuration options
const wdOpts = require('./wd_opts.js');

// Define an async function to run the login test
// Test sending a message, requires manual login
async function runSendMessageTest() {

    // Initialize the driver instance using WebdriverIO's remote method
    const driver = await remote(wdOpts);

    // Use a try-catch block to capture and handle any potential errors
    try {
        // Define the text content to be sent
        const sendText = 'hello';

        // Locate the message input box and click it
        const sendMsgText = await driver.$('//XCUIElementTypeTextView[@name="Type a message..."]'); // Locate the message input box using XPath
        await sendMsgText.waitForDisplayed(); // Wait for the message input box to be displayed
        await sendMsgText.click(); // Click the message input box
        await sendMsgText.clearValue(); // Clear the content of the message input box
        // Input the text content character by character
        for (let char of sendText) {
            await sendMsgText.addValue(char); // Add each character to the message input box
        }

        await driver.pause(1000); // Pause for 1 second to ensure the input operation is completed

        // Locate and click the send button
        const sendButton = await driver.$('//XCUIElementTypeButton[@name="GC_SEND_TOUCHABLE"]'); // Locate the send button using XPath
        await sendButton.waitForDisplayed(); // Wait for the send button to be displayed
        await sendButton.click(); // Click the send button

        await driver.pause(1000); // Pause for 1 second to ensure the click operation is completed
        await driver.keys(['\uE007']); // Simulate pressing the Enter key

    } catch (error) {
        // Capture and print error messages
        console.error(`Error during test execution: ${error.message}`);
    } finally {
        // Regardless of whether an error occurs, pause for 1 second and delete the session
        await driver.pause(1000); // Pause for 1 second
        await driver.deleteSession(); // Delete the session to release resources
    }
}

// Run the simple send message test
runSendMessageTest();

