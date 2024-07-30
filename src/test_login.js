// Import the remote method from WebdriverIO
const { remote } = require('webdriverio');
// Import WebdriverIO's configuration options
const wdOpts = require('./wd_opts.js');

// Define an asynchronous function to run the login test
// Test logging in
async function runLoginTest() {

    // Initialize the driver instance using WebdriverIO's remote method
    const driver = await remote(wdOpts);

    // Use a try-catch block to catch and handle potential errors
    try {
        const username = 'test@test.com'; // Define the username to be entered
        const password = '123456'; // Define the password to be entered

        // Locate the username input field and enter the username
        const usernameField = await driver.$('//XCUIElementTypeTextField'); // Locate the username input field using XPath
        await usernameField.waitForDisplayed(); // Wait for the username input field to be displayed
        await usernameField.click(); // Click the username input field
        await usernameField.clearValue(); // Clear the value of the username input field
        for (let char of username) { // Enter the username character by character
            await usernameField.addValue(char);
        }
        await driver.pause(1000); // Pause for 1 second to ensure the input operation is completed

        // Locate the password input field and enter the password
        const passwordField = await driver.$('//XCUIElementTypeSecureTextField'); // Locate the password input field using XPath
        await passwordField.waitForDisplayed(); // Wait for the password input field to be displayed
        await passwordField.click(); // Click the password input field
        await passwordField.clearValue(); // Clear the value of the password input field
        for (let char of password) { // Enter the password character by character
            await passwordField.addValue(char);
        }
        await driver.pause(1000); // Pause for 1 second to ensure the input operation is completed

        // Simulate the Enter key operation (hide the keyboard)
        await driver.keys(['\uE007']); // '\uE007' is the Unicode code for the Enter key
        await driver.pause(1000); // Pause for 1 second

        // Locate and click the login button
        const loginButton = await driver.$('//XCUIElementTypeOther[@name=" Log In"]'); // Locate the login button using XPath
        await loginButton.waitForDisplayed(); // Wait for the login button to be displayed
        await loginButton.click(); // Click the login button
        await driver.pause(1000); // Pause for 1 second to ensure the click operation is completed

    } catch (error) {
        // Catch errors and print the error message
        console.error(`Error during test execution: ${error.message}`);
    } finally {
        // Regardless of whether an error occurs, pause for 1 second and delete the session
        await driver.pause(1000); // Pause for 1 second
        await driver.deleteSession(); // Delete the session to free up resources
    }
}

// Run the login test
runLoginTest();

