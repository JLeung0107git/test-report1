const { remote } = require('webdriverio'); // Import the remote function from the webdriverio library
const wdOpts = require('./wd_opts.js'); // Import WebDriver configuration options

async function runRecvMessageTest() {
    // Connect to the Appium service using the configuration options
    const driver = await remote(wdOpts);

    /**
     * Parse message content and time string
     * @param {string} message - Message string, e.g., "Hello! 8:14 PM"
     * @returns {Object|null} Object containing content and time string, or null if parsing fails
     */
    function parseMessage(message) {
        const regex = /(.*\s+(\d{1,2}:\d{2}\s+[APM]{2}))/;
        const match = message.match(regex); // Use regex to match message content and time string
        if (match) {
            const content = match[1].trim(); // Extract message content and trim whitespace
            const timeString = match[2]; // Extract time string
            return {
                content,
                timeString
            };
        }
        return null; // Return null if no match is found
    }

    /**
     * Wait for a new message to arrive and check if there is a new message
     * @returns {boolean} True if there is a new message, otherwise false
     */
    async function waitMessage() {
        // Use iOS predicate to query all static text elements (messages)
        const messages = await driver.$$('-ios predicate string:type == "XCUIElementTypeStaticText"');
        let hasMessage = false; // Flag indicating if a new message is received
        for (let message of messages) {
            const text = await message.getText(); // Get the text content of the message
            console.log('Message received:', text); // Output the message text
            hasMessage = true; // Flag indicating a new message is received
        }
        return hasMessage; // Return whether a new message is received
    }

    try {
        let messageReceived = false; // Flag indicating if a message is received
        while (true) {
            messageReceived = await waitMessage(); // Wait and check if there is a new message
            if (!messageReceived) {
                console.log("No new message"); // If no new message
                await driver.pause(2000); // Wait for 2 seconds before checking again
            }
        }
    } catch (error) {
        // Catch and output errors that occur during test execution
        console.error(`Error during test execution: ${error.message}`);
    } finally {
        // At the end of the test, pause for 1 second and close the WebDriver session
        await driver.pause(1000);
        await driver.deleteSession();
    }
}

// Execute the message receive test function
runRecvMessageTest();

