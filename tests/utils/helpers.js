const fs = require('fs');
const path = require('path');

/**
 * Waits for an element to be visible.
 * @param {WebdriverIO.Element} element - The element to wait for.
 * @param {number} timeout - Timeout in milliseconds.
 */
async function waitForElementVisible(element, timeout = process.env.EXPLICIT_WAIT || 15000) {
    try {
        await element.waitForDisplayed({ timeout });
    } catch (error) {
        throw new Error(`Element not visible after ${timeout}ms: ${error.message}`);
    }
}

/**
 * Captures a screenshot and saves it to the specified directory.
 * @param {string} filename - Name of the screenshot file.
 */
async function captureScreenshot(filename) {
    const screenshotDir = path.resolve(__dirname, '../../screenshots');
    if (!fs.existsSync(screenshotDir)) {
        fs.mkdirSync(screenshotDir, { recursive: true });
    }
    const filePath = path.join(screenshotDir, filename);
    await driver.saveScreenshot(filePath);
    console.log(`Screenshot saved: ${filePath}`);
}

/**
 * Scrolls to an element on the screen.
 * @param {WebdriverIO.Element} element - The element to scroll to.
 */
async function scrollToElement(element) {
    await driver.execute('mobile: scroll', { element: element.elementId });
}

/**
 * Logs a custom message for debugging purposes.
 * @param {string} message - The message to log.
 */
function logDebug(message) {
    if (process.env.ENABLE_DEBUG === 'true') {
        console.log(`[DEBUG]: ${message}`);
    }
}

/**
 * Waits for an element to exist.
 * @param {WebdriverIO.Element} element - The element to wait for.
 * @param {number} timeout - Timeout in milliseconds.
 */
async function waitForElementExist(element, timeout = process.env.EXPLICIT_WAIT || 15000) {
    try {
        await element.waitForExist({ timeout });
    } catch (error) {
        throw new Error(`Element not found after ${timeout}ms: ${error.message}`);
    }
}

/**
 * Retries an action multiple times.
 * @param {Function} action - The action to retry.
 * @param {number} retries - Number of retries.
 */
async function retryAction(action, retries = 3) {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            return await action();
        } catch (error) {
            if (attempt === retries) throw error;
            console.warn(`Retry ${attempt}/${retries} failed: ${error.message}`);
        }
    }
}

/**
 * Clicks a button by its text.
 * @param {string} buttonText - The text of the button to click.
 */
async function clickButtonByText(buttonText) {
    const button = await $(`//android.widget.Button[@text='${buttonText}']`);
    await waitForElementVisible(button);
    await button.click();
    logDebug(`Clicked the button: ${buttonText}`);
}

/**
 * Clicks a button by its data-test.
 * @param {string} id - The data-test of the button to click.
 */
async function findElementById(id) {
    try {
        const element = await $(`~${id}`);
        await element.waitForDisplayed({ timeout: 5000 });
        return element;
    } catch (error) {
        logger.error(`Error finding element by ID: ${id}`, error);
        throw error;
    }
}

/**
 * Function to tap on X,Y coordinates.
 * @param {int} x - The X coordinate to tap.
 * @param {int} y - The Y coordinate to tap.
 */
async function tapByCoordinates(x, y) {
    try {
        await driver.touchAction([
            { action: 'tap', x, y } // Ação de toque nas coordenadas fornecidas
        ]);
        logger.info(`Tapped on coordinates X: ${x}, Y: ${y}`);
    } catch (error) {
        logger.error(`Error tapping at coordinates X: ${x}, Y: ${y}`, error);
        throw error;
    }
}

module.exports = {
    waitForElementVisible,
    captureScreenshot,
    scrollToElement,
    logDebug,
    waitForElementExist,
    retryAction,
    clickButtonByText,
    findElementById,
    tapByCoordinates,
};
