const fs = require('fs');
const path = require('path');

/**
 * Logger configuration
 */
const LOG_DIR = path.resolve(__dirname, '../../logs'); // Directory for log files
if (!fs.existsSync(LOG_DIR)) {
    fs.mkdirSync(LOG_DIR, { recursive: true });
}

const LOG_LEVELS = {
    INFO: 'INFO',
    DEBUG: 'DEBUG',
    WARN: 'WARN',
    ERROR: 'ERROR',
};

/**
 * Logs a message to the console and optionally to a file.
 * @param {string} level - Log level (INFO, DEBUG, WARN, ERROR).
 * @param {string} message - Log message.
 * @param {boolean} writeToFile - Whether to write to a log file (default: true).
 */
function log(level, message, writeToFile = true) {
    const timestamp = new Date().toISOString();
    const formattedMessage = `[${timestamp}] [${level}] ${message}`;
    
    // Log to console
    console.log(formattedMessage);

    // Optionally write to a file
    if (writeToFile) {
        const logFile = path.join(LOG_DIR, `${level.toLowerCase()}.log`);
        fs.appendFileSync(logFile, formattedMessage + '\n', 'utf8');
    }
}

/**
 * Info-level log.
 * @param {string} message - The message to log.
 */
function info(message) {
    log(LOG_LEVELS.INFO, message);
}

/**
 * Debug-level log.
 * @param {string} message - The message to log.
 */
function debug(message) {
    if (process.env.ENABLE_DEBUG === 'true') {
        log(LOG_LEVELS.DEBUG, message);
    }
}

/**
 * Warn-level log.
 * @param {string} message - The message to log.
 */
function warn(message) {
    log(LOG_LEVELS.WARN, message);
}

/**
 * Error-level log.
 * @param {string} message - The message to log.
 */
function error(message) {
    log(LOG_LEVELS.ERROR, message);
}

module.exports = {
    info,
    debug,
    warn,
    error,
};
