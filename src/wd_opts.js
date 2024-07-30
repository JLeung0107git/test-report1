// WebDriverIO configuration options
const wdOpts = {
    // Hostname: Specify the address of the Appium server
    hostname: '127.0.0.1', // Using the local address, i.e., the local Appium server

    // Port number: Specify the port of the Appium server
    port: 4723,  // Default port number for the Appium server

    // Path: Specify the path to the WebDriver server
    path: '/', // Adjust the path according to the actual WebDriver server, usually the root path

    // Capabilities: Define the capabilities of the automation test device and application
    capabilities: {
        // Platform name: Specify the mobile operating system to test
        "platformName": "iOS", // The test platform is iOS

        // Platform version: Specify the operating system version of the device
        "appium:platformVersion": "17.5", // The iOS device system version is 17.5

        // Device name: Specify the name of the test device
        "appium:deviceName": "iPhone 15", // The test device is iPhone 15

        // Automation name: Specify the automation engine to use
        "appium:automationName": "XCUITest", // Use XCUITest as the automation engine

        // App bundle ID: Specify the bundle ID of the test application
        "appium:bundleId": "host.exp.Exponent", // The bundle ID of the application to be tested

        // No reset: Specify whether to reset the application state after the test
        "appium:noReset": "true" // Set to true to retain the application data and not reset the app state after the test
    }
};

// Export the configuration options
module.exports = wdOpts;

