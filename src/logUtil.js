class LogUtil {
    static logInfo(loggerName, message, ...args) {
        LogUtil.logMessage('INFO', loggerName, message, args);
    }

    static logError(loggerName, message, ...args) {
        LogUtil.logMessage('ERROR', loggerName, message, args);
    }

    static logErrorWithThrowable(loggerName, message, throwable) {
        LogUtil.logMessage('ERROR', loggerName, `${message} ${throwable.stack || throwable}`);
    }

    static showAsciiArt() {
        console.log('\u001B[33mTrakteer Listener by fleurdefontaine(1053137534298902538)\u001B[0m');
    }

    static logMessage(level, loggerName, message, args = []) {
        const timestamp = new Date().toISOString();
        const formattedMessage = `[${timestamp}] [${level}] [${loggerName}] ${message} ${args.join(' ')}`;
        console[level === 'ERROR' ? 'error' : 'log'](formattedMessage);
    }
}

module.exports = LogUtil;