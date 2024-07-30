# **Environment Setup**

## Basic Environment Setup

### Install Xcode and Command Line Tools

Download the latest version of Xcode directly from the App Store.

Install Command Line Tools:

```shell
xcode-select --install
```

### Install Homebrew

```shell
/usr/bin/ruby -e "$(curl –fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" 
```

Check

```shell
brew -v   	// Check if Homebrew is installed
brew list   // View installed list
brew update // Update Homebrew
```

### Install Carthage

Carthage is a tool for managing dependencies, needed by Appium to build WebDriverAgent. You can install Carthage via Homebrew:

```shell
brew install carthage
```

Check

```shell
carthage version
```

## **Project Environment Setup**

Github: https://github.com/Ctere1/react-native-chat

You need to configure the `.env` file:

```shell
API_KEY=AIzaSyB1WIzfemQk-XtGyeLrR_1UIfN2-OavPFI
AUTH_DOMAIN=chatapptest-3f562.firebaseapp.com
PROJECT_ID=chatapptest-3f562
STORAGE_BUCKET=chatapptest-3f562
MESSAGING_SENDER_ID=581756950022
APP_ID=1:581756950022:web:66c0294d08e94321e71587
MEASUREMENT_ID=G-PKYEGJ3Q67
```

Run the commands

```shell
npm install
npx expo start
```

The project uses the following frameworks and dependencies:

> - [Expo](https://expo.dev/)
> - [React](https://react.dev/)
> - [React Native](https://reactnative.dev/)
> - [Firebase](https://firebase.google.com/)
> - [react-native-gifted-chat](https://github.com/FaridSafi/react-native-gifted-chat)
> - [react-native-emoji-modal](https://github.com/staltz/react-native-emoji-modal)

Xcode, simulator,

Install Xcode Command Line Tools

Open Xcode, choose Settings… from the Xcode menu (or press cmd⌘+,). Go to Locations and install tools by selecting the latest version in the Command Line Tools dropdown menu.

Install watchman

### Install nodejs and npm

Nodejs, npm

```shell
brew install node
```

Check

```shell
node -v
```

Nodejs comes with npm

```shell
npm -v
```

### Install Expo Go

Download the app from the App Store, or visit the Expo Go page on the App Store to download it.

Once installed, scan the project's QR code to quickly preview the project.

### Project Preview Testing (on iOS simulator or by scanning with iOS device)

```shell
npx expo start
```

After scanning the project, you can preview the app by scanning with an iOS device.

**Common Issues**

Check1: If Xcode is already installed but tools like appium-doctor or expo indicate it is not, run the command:

```shell
xcodebuild -version
sudo xcode-select -r
```

**Common Commands**

```shell
xcrun simctl list | grep '(Booted)'  # View the UDID of started simulators
instruments -s devices      # List all devices, including real devices, simulators, and Mac
```

### **Project Compilation for Real Device** (Deploy and run on iOS real devices)

1. Install EAS CLI

```shell
npm install -g eas-cli
```

1. Create an Expo account and log in

https://expo.dev/signup

Login command: `eas login`

1. Configure the project

```shell
eas build:configure
```

If you want to run on a simulator:

```json
{
 "build": {
  "development": {
   "developmentClient": true,
   "distribution": "internal",
   "ios": {
    "simulator": true
   }
  }
 }
}
```

1. To install the development version on an iOS device, you need to create a temporary provisioning profile. Create one by running the following command:

```shell
eas device:create
```

Run the following command to create a development build:

```shell
eas build --platform ios --profile development
```

1. Open Developer Mode

After the build is complete, scan the QR code in the terminal. When it appears in the camera app, click "Open in iTunes." Alternatively, open the link displayed on the terminal on the device.

Once confirmed, the app will appear in the device’s app library.

## **Automated Testing Environment Setup**

Appium issue collection: https://discuss.appium.io/

About installing WebDriverAgent: https://docs.katalon.com/katalon-studio/manage-projects/set-up-projects/mobile-testing/ios/mobile-install-webdriveragent-for-real-ios-devices-in-katalon-studio

You can try using Katalon Studio to install WebDriverAgent

### Install appium & appium-doctor

Download link: https://github.com/appium/appium-desktop

Install Appium via npm, ensure Node.js is installed:

```shell
npm i -g appium
npm i -g appium-doctor
```

Check

```shell
appium -v
appium-doctor
appium-doctor --ios
```

Connection parameters

```json
{
    "platformName":"iOS",
    "platformVersion":"17.5",
    "deviceName":"iPhone 13 Pro",
    "automationName":"XCUITest",
    "uuid":"",
    "bundleId":"",
    "xcodeOrgId":"<Team ID>",
    "xcodeSigningId":"iPhone Developer"
}
```

You also need to install Appium Desktop (optional) and Appium Inspector (optional)

```py
from appium import webdriver

desired_caps = {
    'platformName': 'iOS',
    'platformVersion': '14.4',  # Replace with your iOS simulator version
    'deviceName': 'iPhone 11',  # Replace with your iOS simulator device name
    'app': '<path_to_your_app>',  # Replace with the path to your app
    'automationName': 'XCUITest'
}

driver = webdriver.Remote('http://localhost:4723/wd/hub', desired_caps)
```

### Install Appium Inspector

Download link (Github): https://github.com/appium/appium-inspector

### Install Appium Desktop

- Run Appium-Desktop
- Start the server
- Click "Start New Session" and enter relevant parameters in Desired Capabilities, then click "Start Session"
- After a successful run, a control interface will appear, allowing you to control the running app on the phone

### Install WebDriverAgent (running on a simulator)

<span style="font-size:20px;font-weight:bold">It is recommended to use the official WebDriverAgent from Appium</span>

```shell
git clone https://github.com/Unity-Technologies/AppiumWebDriverAgent.git
```

### **Simulator**

Xcode, Appium Desktop, Nodejs,

Ios-deploy, brew,

Real devices: libimobiledevice, Carthage,




```shell
npm install ios-deploy
brew install carthage
```

## iOS Real Device Testing and Deployment

### Install ios-deploy

Installation

```shell
brew install ios-deploy
```

Common operations

```shell
ios-deploy --list_bundel_id
ios-deploy -c # View currently connected devices
ios-deploy --[xxx.app] # Install APP
ios-deploy --id [udid] --uninstall_only --bundle_id [bundleId] # Uninstall application
ios-deploy --id [udid] --list_bundle_id # View all applications
ios-deploy --id [udid] --exists --bundle_id # Check if application is installed
```

### Install xcpretty

```
gem install xcpretty
```

### Install ideviceinstaller & libimobiledevice

- `libimobiledevice` is a cross-platform software library; it does not depend on any existing private libraries and does not require jailbreaking. This development package allows easy access to device file systems, retrieving device information, backing up and restoring devices, managing SpringBoard icons, managing installed apps, and accessing contacts, calendars, notes, and bookmarks.
- `ideviceinstaller` is a tool for interacting with the iOS device's installation_proxy, allowing you to install, upgrade, uninstall, archive, restore, and list installed or archived apps. This tool is used for running tests on real devices, **by default** it is included.

Installation

```shell
brew install ideviceinstaller
brew install libimobiledevice --HEAD # Install the latest updates
```

Common commands

```shell
idevice_id -l # Display the UDID of the currently connected device
instruments -s devices # List all devices, including real devices, simulators, and Mac

# Install application
ideviceinstaller -u [udid] -i [xxx.ipa] # xxx.ipa is the path to the app locally  

# Uninstall application
ideviceinstaller -u [udid] -U [bundleId]

# View installed applications on the device
ideviceinstaller -u [udid] -l # View third-party apps installed on the device
ideviceinstaller -u [udid] -l -o list_user # Same as above, view third-party apps installed on the device
ideviceinstaller -u [udid] -l -o list_all # View all applications installed on the device, including Apple system apps
```

### **Install WebDriverAgent (using Facebook's version)**

GitHub: [Facebook Archive WebDriverAgent](https://github.com/facebookarchive/WebDriverAgent)

Since the Facebook project is no longer maintained, it's recommended to use the version maintained by Appium:

GitHub: [Appium WebDriverAgent](https://github.com/appium/WebDriverAgent)

WebDriverAgent, developed by Facebook, is an open-source project based on XCTest.framework that provides WebDriver protocol support on iOS. It allows for operations like starting/stopping apps and interacting with the UI.

The WebDriver protocol is a JSON-based HTTP specification that standardizes interaction formats across platforms like iOS, Android, and browsers. This "driver layer" abstracts platform differences and allows for automated UI operations in a unified manner. Selenium, commonly used for web scraping, implements WebDriver for browsers, while WebDriverAgent does the same for iOS.

On Windows: `C:\Users\31734\AppData\Local\Programs\Appium Server GUI\app\node_modules\appium\node_modules\appium-webdriveragent`

On macOS: `/Applications/Appium.app/Contents/Resources/app/node_modules/appium/node_modules/appium-webdriveragent`

1. Clone the project and navigate to the project directory.
2. Run the command: `./Scripts/bootstrap.sh`
3. Open `WebDriverAgent.xcodeproj`.
4. Configure developer information.

Modify the project:

> - WebDriverAgentLib
> - WebDriverAgentRunable
> - IntegrationApp

Modification locations:

> Product Bundle Identifier
>
> iOS Deployment Target
>
> Team

Under "Signing & Capabilities," set `WebDriverAgentLib` and `WebDriverAgentRunner` to "Automatically manage signing" and select your development team under "Team."

Install the certificate:

```shell
xcodebuild -project WebDriverAgent.xcodeproj -scheme WebDriverAgentRunner -destination 'id=your_device_udid' test
```

To obtain the UUID: **Use iTunes, iTools, PP Assistant, XCode, etc.**

Upon successful installation, Xcode will print logs with an IP address and port number. Enter `http://(ip_address):(port_number)/status` in a browser. If JSON data is returned, the installation was successful. If some iPhone devices cannot access the service using the IP and port, you may need to forward the port from the phone to the Mac.

### **Running on a Real Device**

Apple ID, WebDriverAgent

1. Connect and use Python

2. Run in terminal with Command + R

3. Download and install dependencies

4. onfiguration points

# **Usability Testing**

Evaluate the application's UI and user experience, identify usability issues, and provide suggestions for improvement. Focus on navigation, layout consistency, and user feedback. Assess ease of use for tasks like sending messages and navigation.

Evaluation points: interface design, navigation and layout, feedback and prompts, operability, error handling, response time, accessibility, user personalization, security, stability, reliability.

Common issues:

1. Login page: In the iOS simulator, the keyboard does not appear when clicking the username and password fields.
2. Chat page: The emoji input method's close function is not user-friendly; suggest adding a close button in the lower-left corner or hiding it by swiping down.
3. Chat page: When the emoji input method is open, clicking the input box triggers the system keyboard, causing the view to shift; suggest setting the height to 0 when hiding the emoji input method.
4. Functional issues: Unable to send images in the chat interface, users cannot change their name or email, the about page is too basic, users cannot update their avatar, email verification is needed during registration.
5. Aesthetic issues: The message prompt at the bottom should be fixed, and group chat height should be within the visible area.
6. Security: Require a verification code during user login to reduce unnecessary server load from web scrapers and automated scripts.

Usability Testing Summary:

**Interface Design Optimization**:

- **Login and Registration Screens**: Increase the top padding for `Log In` and `Sign In` buttons to enhance visual comfort and cleanliness.
- Home page: Remove the blue unknown marker at the top.

**Navigation and Layout Adjustments**:

- **Tab Panel Layout**: Introduce at least three tabs to balance the bottom space and avoid the empty feeling caused by only two tabs.
- **Profile Page**: Reduce the size of the user avatar for better integration into the page layout while maintaining balance.
- **Chat Interface**: Adjust the message input box width to reduce frequent word wrapping and improve information display.

**Feedback and Prompt Improvements**:

- **Input Box Stability**: Fix the flickering issue with input boxes and keyboards on login and registration pages to ensure a stable interface.
- **Weak Network**: Address long response times and lack of debounce and throttling for buttons, which may cause errors or abnormal data.

**Personalization Enhancements**:

- **Interface Customization**: Add options for users to customize font styles, background colors, and layouts to enhance engagement and satisfaction.

**Architecture and Stability Improvements**:

- **System Architecture**: Optimize the system architecture to enhance stability and reliability, reduce dependency on external services (e.g., Firebase), and mitigate service interruptions.
- **Sensitive Data Protection**: Further strengthen user permission management to prevent unauthorized access to sensitive information, despite .env file protection.
- **Slow Network Loading**: Improve loading speed in weak network conditions.

**Error Handling and Response Time**:

- **Error Handling Mechanism**: Implement a comprehensive error monitoring and feedback system to provide clear error messages and solutions to users.
- **Response Time Improvement**: Optimize backend logic and database queries to reduce user wait times and improve overall responsiveness.

**Accessibility Enhancements**:

- **Accessibility Design**: Consider adding accessibility features such as screen reader support and high-contrast modes to meet diverse user needs and improve product accessibility.

Usability issues:

1. After logging in, users cannot log out; suggest adding a logout function.
2. Many functions in the app are unusable or incomplete; unfinished features should not be included in testing or release versions.
3. During email registration, validate the email and require manual activation to prevent unlimited registrations.
4. During initial password setup, add a confirmation password field to prevent login issues due to incorrect password entries.
5. Passwords should be validated and protected against simplicity to prevent leakage.

# **Performance Testing**

Conduct basic performance testing to measure application load times, performance under different network conditions (3G, 4G, WIFI), and the time required for sending and receiving messages. Record performance metrics.

Use **Instruments** tool, built into XCode:

> in bandwidth: Downlink bandwidth in packet loss: Downlink packet loss rate in delay: Downlink delay in ms out bandwidth: Uplink bandwidth out packet loss: Uplink packet loss rate out delay: Uplink delay DNS delay: DNS resolution delay protocol: Optional values are Any, IPv4, IPv6 interface: Optional values are ALL, Wi-Fi, cellular

Performance Testing Summary:

1. Scenario: Uploading large or multiple images in weak network conditions causes the progress bar to freeze halfway and restart.
   - Reason: Chunked upload logic is flawed, leading to continuous re-uploading from the start when requests time out.
2. Scenario: Difficulty logging in or being disconnected immediately after login in weak network conditions.
   - Reason: Lack of buffering mechanism and uniform timeout settings for different network conditions.
   - Solution: Set different timeout values for wifi, 2G, 3G, and 4G networks.
3. Scenario: Long data return times in weak network conditions, with interactive elements on the page causing crashes or triggering incorrect data.
   - Reason: Lack of compatibility handling for data-dependent controls before data returns.
4. Scenario: Continuous search requests when typing keywords, with final search results being quickly overridden by previous results.
   - Reason: Slow responses to intermediate requests causing final results to be overwritten by previous data.

# **Automation Testing**

As per the task requirements, two automation test cases should be created: login and sending/receiving messages. Ensure that these tests can run on iOS platforms (using simulators) and provide scripts and running instructions (with comments).

## Create Project

```shell
npm init -y
```

Install dependencies

```shell
npm install --save-dev webdriverio
npm install @wdio/appium-service
npm install @wdio/cli
npm install @wdio/local-runner
```

## Functional Testing

### **Login**
```js
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
```
### **Send Msg**
```js
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
```
### **Receive Msg**
```js
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
```
 