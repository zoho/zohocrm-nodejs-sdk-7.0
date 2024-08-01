import pkg from "winston";
import {Levels} from "./logger.js";

/**
 * The class to initialize the SDK logger.
 */
class SDKLogger {
    constructor(loggerInstance) {
        let winston = pkg;
        if (loggerInstance.getLevel() === Levels.OFF || loggerInstance.getFilePath() == null || loggerInstance.getFilePath() === "") {
            winston.configure({
                silent : true,
                transports: [
                    new winston.transports.Console({
                        silent: true
                    })
                ]
            });
        }
        else {
            winston.configure({
                level: loggerInstance.level,
                format: winston.format.combine(
                    winston.format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
                    winston.format.prettyPrint()
                ),
                transports: [
                    new winston.transports.File({
                        filename: loggerInstance.getFilePath()
                    })
                ]
            });
        }
    }
    /**
     * The method to initialize SDKLogger
     * @param {Logger} loggerInstance A Logger class instance
     */
    static initialize(loggerInstance) {
        return new SDKLogger(loggerInstance);
    }
}

export {
    SDKLogger as SDKLogger,
    SDKLogger as MasterModel
}