import {Choice} from "../../../../../../utils/util/choice.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class AppointmentPreference{

	showJobSheet;
	whenDurationExceeds;
	whenAppointmentCompleted;
	allowBookingOutsideServiceAvailability;
	allowBookingOutsideBusinesshours;
	dealRecordConfiguration;
	keyModified = new Map();
	/**
	 * The method to get the showJobSheet
	 * @returns {Boolean} A Boolean representing the showJobSheet
	 */
	getShowJobSheet()	{
		return this.showJobSheet;

	}

	/**
	 * The method to set the value to showJobSheet
	 * @param {Boolean} showJobSheet A Boolean representing the showJobSheet
	 */
	setShowJobSheet(showJobSheet)	{
		if((showJobSheet != null) && (!(Object.prototype.toString.call(showJobSheet) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: showJobSheet EXPECTED TYPE: Boolean", null, null);
		}
		this.showJobSheet = showJobSheet;
		this.keyModified.set("show_job_sheet", 1);

	}

	/**
	 * The method to get the whenDurationExceeds
	 * @returns {String} A String representing the whenDurationExceeds
	 */
	getWhenDurationExceeds()	{
		return this.whenDurationExceeds;

	}

	/**
	 * The method to set the value to whenDurationExceeds
	 * @param {String} whenDurationExceeds A String representing the whenDurationExceeds
	 */
	setWhenDurationExceeds(whenDurationExceeds)	{
		if((whenDurationExceeds != null) && (!(Object.prototype.toString.call(whenDurationExceeds) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: whenDurationExceeds EXPECTED TYPE: String", null, null);
		}
		this.whenDurationExceeds = whenDurationExceeds;
		this.keyModified.set("when_duration_exceeds", 1);

	}

	/**
	 * The method to get the whenAppointmentCompleted
	 * @returns {Choice} An instance of Choice
	 */
	getWhenAppointmentCompleted()	{
		return this.whenAppointmentCompleted;

	}

	/**
	 * The method to set the value to whenAppointmentCompleted
	 * @param {Choice} whenAppointmentCompleted An instance of Choice
	 */
	setWhenAppointmentCompleted(whenAppointmentCompleted)	{
		if((whenAppointmentCompleted != null) && (!(whenAppointmentCompleted instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: whenAppointmentCompleted EXPECTED TYPE: Choice", null, null);
		}
		this.whenAppointmentCompleted = whenAppointmentCompleted;
		this.keyModified.set("when_appointment_completed", 1);

	}

	/**
	 * The method to get the allowBookingOutsideServiceAvailability
	 * @returns {Boolean} A Boolean representing the allowBookingOutsideServiceAvailability
	 */
	getAllowBookingOutsideServiceAvailability()	{
		return this.allowBookingOutsideServiceAvailability;

	}

	/**
	 * The method to set the value to allowBookingOutsideServiceAvailability
	 * @param {Boolean} allowBookingOutsideServiceAvailability A Boolean representing the allowBookingOutsideServiceAvailability
	 */
	setAllowBookingOutsideServiceAvailability(allowBookingOutsideServiceAvailability)	{
		if((allowBookingOutsideServiceAvailability != null) && (!(Object.prototype.toString.call(allowBookingOutsideServiceAvailability) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: allowBookingOutsideServiceAvailability EXPECTED TYPE: Boolean", null, null);
		}
		this.allowBookingOutsideServiceAvailability = allowBookingOutsideServiceAvailability;
		this.keyModified.set("allow_booking_outside_service_availability", 1);

	}

	/**
	 * The method to get the allowBookingOutsideBusinesshours
	 * @returns {Boolean} A Boolean representing the allowBookingOutsideBusinesshours
	 */
	getAllowBookingOutsideBusinesshours()	{
		return this.allowBookingOutsideBusinesshours;

	}

	/**
	 * The method to set the value to allowBookingOutsideBusinesshours
	 * @param {Boolean} allowBookingOutsideBusinesshours A Boolean representing the allowBookingOutsideBusinesshours
	 */
	setAllowBookingOutsideBusinesshours(allowBookingOutsideBusinesshours)	{
		if((allowBookingOutsideBusinesshours != null) && (!(Object.prototype.toString.call(allowBookingOutsideBusinesshours) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: allowBookingOutsideBusinesshours EXPECTED TYPE: Boolean", null, null);
		}
		this.allowBookingOutsideBusinesshours = allowBookingOutsideBusinesshours;
		this.keyModified.set("allow_booking_outside_businesshours", 1);

	}

	/**
	 * The method to get the dealRecordConfiguration
	 * @returns {DealRecordConfiguration} An instance of DealRecordConfiguration
	 */
	getDealRecordConfiguration()	{
		return this.dealRecordConfiguration;

	}

	/**
	 * The method to set the value to dealRecordConfiguration
	 * @param {DealRecordConfiguration} dealRecordConfiguration An instance of DealRecordConfiguration
	 */
	async setDealRecordConfiguration(dealRecordConfiguration)	{
		const DealRecordConfiguration = (await (import("./deal_record_configuration.js"))).MasterModel;
		if((dealRecordConfiguration != null) && (!(dealRecordConfiguration instanceof DealRecordConfiguration)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: dealRecordConfiguration EXPECTED TYPE: DealRecordConfiguration", null, null);
		}
		this.dealRecordConfiguration = dealRecordConfiguration;
		this.keyModified.set("deal_record_configuration", 1);

	}

	/**
	 * The method to check if the user has modified the given key
	 * @param {String} key A String representing the key
	 * @returns {number} A number representing the modification
	 */
	isKeyModified(key)	{
		if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
		}
		if(this.keyModified.has(key))	{
			return this.keyModified.get(key);
		}
		return null;

	}

	/**
	 * The method to mark the given key as modified
	 * @param {String} key A String representing the key
	 * @param {number} modification A number representing the modification
	 */
	setKeyModified(key, modification)	{
		if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
		}
		if((modification != null) && (!(Object.prototype.toString.call(modification) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modification EXPECTED TYPE: number", null, null);
		}
		this.keyModified.set(key, modification);

	}

}
export {
	AppointmentPreference as MasterModel,
	AppointmentPreference as AppointmentPreference
}
