// Import the remote method from WebdriverIO
const { remote } = require('webdriverio');
// Import WebdriverIO's configuration options
const wdOpts = require('./wd_opts.js');

// Define an asynchronous function to run the login test
// The test goes from logging in to logging out
async function runTestCode() {

    // Initialize the driver instance using WebdriverIO's remote method
    const driver = await remote(wdOpts);

    // Use a try-catch block to catch and handle potential errors
    try {

        // Locate the username input field and enter the username
        const usernameField = await driver.$('//XCUIElementTypeTextField'); // Locate the username input field using XPath
        await usernameField.waitForDisplayed(); // Wait for the username input field to be displayed
        await usernameField.click(); // Click the username input field
        await usernameField.clearValue(); // Clear the value of the username input field
        const newValue = 'test@test.com'; // Define the username to be entered
        for (let char of newValue) { // Enter the username character by character
            await usernameField.addValue(char);
        }
        await driver.pause(1000); // Pause for 1 second

        // Locate the password input field and enter the password
        const passwordField = await driver.$('//XCUIElementTypeSecureTextField'); // Locate the password input field using XPath
        await passwordField.waitForDisplayed(); // Wait for the password input field to be displayed
        await passwordField.click(); // Click the password input field
        await passwordField.clearValue(); // Clear the value of the password input field
        const password = '123456'; // Define the password to be entered
        for (let char of password) { // Enter the password character by character
            await passwordField.addValue(char);
        }
        await driver.pause(1000); // Pause for 1 second

        // Simulate the Enter key operation (hide the keyboard)
        await driver.keys(['\uE007']); // '\uE007' is the Unicode code for the Enter key
        await driver.pause(1000); // Pause for 1 second

        // Locate and click the login button
        const submitButton = await driver.$('//XCUIElementTypeOther[@name=" Log In"]'); // Locate the login button using XPath
        await submitButton.waitForDisplayed(); // Wait for the login button to be displayed
        await submitButton.click(); // Click the login button
        await driver.pause(2000); // Pause for 2 seconds

        // After logging in successfully, locate and click the bottom settings button
        const settingsButton = await driver.$('//XCUIElementTypeButton[contains(@name, "Settings")]'); // Locate the settings button using XPath
        await settingsButton.waitForDisplayed(); // Wait for the settings button to be displayed
        await settingsButton.click(); // Click the settings button
        await driver.pause(1000); // Pause for 1 second

        // Locate the Account button using Predicate String and click it
        const accountButton = await driver.$('-ios predicate string:name == " Account Privacy, logout, delete account "'); // Locate the account button using Predicate String
        await accountButton.waitForDisplayed(); // Wait for the account button to be displayed
        await accountButton.click(); // Click the account button
        await driver.pause(1000); // Pause for 1 second

        // Locate and click the Logout button
        const logoutButton = await driver.$('-ios predicate string:name == " Logout"'); // Locate the logout button using Predicate String
        await logoutButton.waitForDisplayed(); // Wait for the logout button to be displayed
        await logoutButton.click(); // Click the logout button
        await driver.pause(1000); // Pause for 1 second

        // Confirm the logout operation, locate and click the confirm button
        const confirmLogoutButton = await driver.$('-ios predicate string:name == "Logout"'); // Locate the confirm button using Predicate String
        await confirmLogoutButton.waitForDisplayed(); // Wait for the confirm button to be displayed
        await confirmLogoutButton.click(); // Click the confirm button
        await driver.pause(1000); // Pause for 1 second

    } catch (error) {
        console.error(`Error during test execution: ${error.message}`);
    } finally {
        await driver.pause(1000);
        // Delete the session to free up memory
        await driver.deleteSession();
    }
}

// Run the test code
runTestCode();

