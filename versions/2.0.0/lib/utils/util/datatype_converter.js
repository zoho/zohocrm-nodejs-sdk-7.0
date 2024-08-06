import {Constants} from "./constants.js";
import moment from 'moment-timezone';

/**
 * This class converts JSON value to the expected object type and vice versa.
 */
class DatatypeConverter {
    static preConverterMap = new Map();
    static postConverterMap = new Map();

    /**
     * This method is to initialize the PreConverter and PostConverter lambda functions.
     */
    static init() {
        if (this.preConverterMap.size != 0 && this.postConverterMap.size != 0) {
            return;
        }
        var string = (obj) => { return obj.toString(); }
        var integer = (obj) => { return parseInt(obj); }
        var long = (obj) => { return obj.toString() != Constants.NULL_VALUE ? BigInt(obj) : null; }
        var longToString = (obj) => { return obj.toString() }
        var bool = (obj) => { return Boolean(obj); }
        var stringToDateTime = (obj) => { return new Date(obj); }
        var dateTimeToString = (obj) => { return obj.toISOString().split('.')[0] + "Z"; }
        var dateToString = (obj) => { return obj.toISOString().split('T')[0]; }
        var stringToDate = (obj) => { return new Date(obj); }
        var double = (obj) => { return parseFloat(obj.toString()); }
        var preObject = (obj) => { return this.preConvertObjectData(obj); }
        var postObject = (obj) => { return this.postConvertObjectData(obj); }
        var stringtoTimeZone = (obj) => { return moment.tz.zone(obj); }
        var timeZonetoSting = (obj) => { return obj.name; }
        var stringtoLocalTime = (obj) => { 
            const splittedInputTime = obj.split(':');
            let currentDate = new Date();
            currentDate.setHours(splittedInputTime[0]);
            currentDate.setMinutes(splittedInputTime[1]);
            return currentDate;
        }
        var localTimetoSting = (obj) => { 
            let hour = obj.getHours();
            let minute = obj.getMinutes();
            if(hour == 0) {
                hour = "00";
            }
            if(minute == 0) {
                minute = "00";
            }
            return hour + ":" + minute;
        }
        this.addToMap(Constants.STRING_NAMESPACE.toLowerCase(), string, string);
        this.addToMap(Constants.INTEGER_NAMESPACE.toLowerCase(), integer, integer);
        this.addToMap(Constants.LONG_NAMESPACE.toLowerCase(), long, longToString);
        this.addToMap(Constants.BOOLEAN_NAMESPACE.toLowerCase(), bool, bool);
        this.addToMap(Constants.DATE_NAMESPACE.toLowerCase(), stringToDate, dateToString);
        this.addToMap(Constants.DATETIME_NAMESPACE.toLowerCase(), stringToDateTime, dateTimeToString);
        this.addToMap(Constants.DOUBLE_NAMESPACE.toLowerCase(), double, double);
        this.addToMap(Constants.FLOAT_NAMESPACE.toLowerCase(), double, double);
        this.addToMap(Constants.OBJECT_NAMESPACE.toLowerCase(), preObject, postObject);
        this.addToMap(Constants.TIMEZONE_NAMESPACE.toLowerCase(), stringtoTimeZone, timeZonetoSting);
        this.addToMap(Constants.STRING_TYPE.toLowerCase(), string, string);
        this.addToMap(Constants.INTEGER_TYPE.toLowerCase(), integer, integer);
        this.addToMap(Constants.DATE_TYPE.toLowerCase(), stringToDateTime, dateTimeToString);
        this.addToMap(Constants.NUMBER_TYPE.toLowerCase(), double, double);
        this.addToMap(Constants.LOCALTIME_NAMESPACE.toLowerCase(), stringtoLocalTime, localTimetoSting);
    }

    static preConvertObjectData(obj) {
        return obj;
    }

    static postConvertObjectData(obj) {
        if (Array.isArray(obj) && obj.length > 0) {
            let list = [];
            for (let data of obj) {
                if (data instanceof Date) {
                    if (data.getHours() == 0 && data.getMinutes() == 0 && data.getSeconds() == 0) {
                        list.push(this.postConvert(data, Constants.DATE_NAMESPACE.toLowerCase()));
                    }
                    else {
                        list.push(this.postConvert(data, Constants.DATETIME_NAMESPACE.toLowerCase()));
                    }
                }
                else if (data instanceof Map) {
                    this.postConvertObjectData(data);
                }
                else {
                    list.push(data);
                }
            }
            return list;
        }
        else if (obj instanceof Map) {
            let requestObject = {};
            for (let key of Array.from(obj.keys())) {
                let value = obj.get(key);
                if (Array.isArray(value)) {
                    requestObject[key] = this.postConvertObjectData(value);
                }
                else if (value instanceof Date) {
                    if (value.getHours() == 0 && value.getMinutes() == 0 && value.getSeconds() == 0) {
                        requestObject[key] = this.postConvert(value, Constants.DATE_NAMESPACE.toLowerCase());
                    }
                    else {
                        requestObject[key] = this.postConvert(value, Constants.DATETIME_NAMESPACE.toLowerCase());
                    }
                }
                else if (value instanceof Map) {
                    requestObject[key] = this.postConvertObjectData(value);
                }
                else {
                    requestObject[key] = value;
                }
            }
            return requestObject;
        }
        else if (obj instanceof Date) {
            if (obj.getHours() == 0 && obj.getMinutes() == 0 && obj.getSeconds() == 0) {
                return this.postConvert(obj, Constants.DATE_NAMESPACE.toLowerCase());
            }
            else {
                return this.postConvert(obj, Constants.DATETIME_NAMESPACE.toLowerCase());
            }
        }
        else {
            return obj;
        }
    }

    /**
     * This method is to add PreConverter and PostConverter instance.
     * @param {string} name - A String containing the data type class name.
     * @param {object} preConverter - A PreConverter instance.
     * @param {object} postConverter - A PostConverter instance.
     */
    static addToMap(name, preConverter, postConverter) {
        this.preConverterMap.set(name, preConverter);
        this.postConverterMap.set(name, postConverter);
    }

    /**
     * This method is to convert JSON value to expected data value.
     * @param {object} obj - An Object containing the JSON value.
     * @param {string} type - A String containing the expected method return type.
     * @throws {Error}
     */
    static preConvert(obj, type) {
        this.init();
        if (this.preConverterMap.has(type)) {
            return this.preConverterMap.get(type)(obj);
        }
        return obj;
    }

    /**
     * This method to convert JavaScript data to JSON data value.
     * @param {object} obj - An object containing the JavaScript data value.
     * @param {string} type - A String containing the expected method return type.
     * @throws {Error}
     */
    static postConvert(obj, type) {
        this.init();
        if (this.postConverterMap.has(type)) {
            return this.postConverterMap.get(type)(obj);
        }
        return obj;
    }
}
export {
    DatatypeConverter as DatatypeConverter,
    DatatypeConverter as MasterModel
}