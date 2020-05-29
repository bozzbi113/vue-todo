/**
 * LoggingService static methods to control output of log messages
 *
 */
class LoggingService {
  // Properties
  //

  /**
   * LEVEL Enum
   * @static
   * @returns {Object} LEVEL: ERROR, WARN, ALL
   */
  static LEVEL = Object.freeze({
    ERROR: Symbol("Errors Only"),
    WARN: Symbol("Errors & Warnings Only"),
    ALL: Symbol("Errors, Warnings, Information & Logging"),
    NONE: Symbol("None")
  });

  /** @static */
  static level = LoggingService.LEVEL.ALL;

  /** @static */

  static active = true;

  // Methods
  //

  /**
   * Output a log message
   * @static
   * @param {String} message
   */
  static log(message) {
    if (LoggingService.active) {
      if (LoggingService.level === LoggingService.LEVEL.ALL) {
        console.log(message);
      }
    }
  }

  /**
   * Output an information message
   * @static
   * @param {String} message
   */
  static info(message) {
    if (LoggingService.active) {
      if (LoggingService.level === LoggingService.LEVEL.ALL) {
        console.info(message);
      }
    }
  }

  /**
   * Output a warning message
   * @static
   * @param {String} message
   */
  static warn(message) {
    if (LoggingService.active) {
      if (
        LoggingService.level === LoggingService.LEVEL.ALL ||
        LoggingService.level === LoggingService.LEVEL.WARN
      ) {
        console.warn(message);
      }
    }
  }

  /**
   * Output an error message
   * @static
   * @param {String} message
   */
  static error(message) {
    if (
      LoggingService.active &&
      LoggingService.level !== LoggingService.LEVEL.NONE
    ) {
      console.error(message);
    }
  }
}

export default LoggingService;
