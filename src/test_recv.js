const { remote } = require('webdriverio'); // Import the remote function from the webdriverio library
const wdOpts = require('./wd_opts.js'); // Import WebDriver configuration options

async function runRecvTest() {
    // Connect to the Appium service using the configuration options
    const driver = await remote(wdOpts);

    /**
     * Get the current local time
     * @returns {string} The string representation of the current time
     */
    function getLocalTime() {
        const now = new Date(); // Get the current date and time
        return now.toLocaleTimeString('en-US', { hour12: true }); // Return the local time string in 12-hour format
    }

    /**
     * Parse a time string into a time object
     * @param {string} timeString - Time string, e.g., "8:14 PM"
     * @returns {Date} The parsed time object
     */
    function parseTime(timeString) {
        const [time, period] = timeString.split(' '); // Split the time string into time and AM/PM
        let [hours, minutes] = time.split(':').map(Number); // Split the time into hours and minutes, and convert to numbers
        if (period === 'PM' && hours !== 12) hours += 12; // If PM and the hour is not 12, add 12 to the hour
        if (period === 'AM' && hours === 12) hours = 0; // If AM and the hour is 12, set the hour to 0
        return new Date(0, 0, 0, hours, minutes); // Return a date object
    }

    /**
     * Compare two time strings
     * @param {string} time1 - The first time string
     * @param {string} time2 - The second time string
     * @returns {boolean} True if the first time is greater than the second time, otherwise false
     */
    function compareTime(time1, time2) {
        let t1 = parseTime(time1); // Parse the first time string
        let t2 = parseTime(time2); // Parse the second time string
        return t1 > t2; // Compare the two time objects
    }

    /**
     * Parse message content and time string
     * @param {string} message - Message string, e.g., "Hello! 8:14 PM"
     * @returns {Object|null} Object containing content and time string, or null if parsing fails
     */
    function parseMessage(message) {
        const regex = /(.*\s+(\d{1,2}:\d{2}\s+[APM]{2}))/; // Regular expression to extract message content and time
        const match = message.match(regex); // Match the message string
        if (match) {
            const content = match[1].trim(); // Extract and trim the content
            const timeString = match[2]; // Extract the time string
            return {
                content,
                timeString
            };
        }
        return null; // Return null if no match is found
    }

    const messageText = ''; // Initialize message text (not used)
    let historyMessageList = []; // Collection to store history messages
    let myMessageList = []; // Collection to store own messages (not used)

    /**
     * Wait for a new message to arrive and check if there is a new message
     * @returns {boolean} True if there is a new message, otherwise false
     */
    async function waitMessage() {
        const messages = await driver.$$('-ios predicate string:type == "XCUIElementTypeStaticText"'); // Get all message text elements
        let hasMessage = false; // Flag indicating if a new message is received
        for (let message of messages) {
            const text = await message.getText(); // Get the text content of the message
            if (!historyMessageList.includes(text) && !myMessageList.includes(text)) {
                // If the message is not in the history message collection
                historyMessageList.push(text); // Add the new message to the history message collection
                console.log('Message received:', text); // Output the new message
                hasMessage = true; // Flag indicating a new message is received
            }
        }
        return hasMessage; // Return whether a new message is received
    }

    // Main process
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
        console.error(`Error during test execution: ${error.message}`); // Catch and output errors that occur during test execution
    } finally {
        await driver.pause(1000); // Pause for 1 second
        await driver.deleteSession(); // Close the WebDriver session
    }
}

runRecvTest(); // Execute the test function

