import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class UsersUnavailability{

	service;
	title;
	allDay;
	tpCalendarId;
	tpEventId;
	comments;
	from;
	id;
	to;
	user;
	keyModified = new Map();
	/**
	 * The method to get the service
	 * @returns {String} A String representing the service
	 */
	getService()	{
		return this.service;

	}

	/**
	 * The method to set the value to service
	 * @param {String} service A String representing the service
	 */
	setService(service)	{
		if((service != null) && (!(Object.prototype.toString.call(service) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: service EXPECTED TYPE: String", null, null);
		}
		this.service = service;
		this.keyModified.set("service", 1);

	}

	/**
	 * The method to get the title
	 * @returns {String} A String representing the title
	 */
	getTitle()	{
		return this.title;

	}

	/**
	 * The method to set the value to title
	 * @param {String} title A String representing the title
	 */
	setTitle(title)	{
		if((title != null) && (!(Object.prototype.toString.call(title) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: title EXPECTED TYPE: String", null, null);
		}
		this.title = title;
		this.keyModified.set("title", 1);

	}

	/**
	 * The method to get the allDay
	 * @returns {Boolean} A Boolean representing the allDay
	 */
	getAllDay()	{
		return this.allDay;

	}

	/**
	 * The method to set the value to allDay
	 * @param {Boolean} allDay A Boolean representing the allDay
	 */
	setAllDay(allDay)	{
		if((allDay != null) && (!(Object.prototype.toString.call(allDay) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: allDay EXPECTED TYPE: Boolean", null, null);
		}
		this.allDay = allDay;
		this.keyModified.set("all_day", 1);

	}

	/**
	 * The method to get the tpCalendarId
	 * @returns {String} A String representing the tpCalendarId
	 */
	getTpCalendarId()	{
		return this.tpCalendarId;

	}

	/**
	 * The method to set the value to tpCalendarId
	 * @param {String} tpCalendarId A String representing the tpCalendarId
	 */
	setTpCalendarId(tpCalendarId)	{
		if((tpCalendarId != null) && (!(Object.prototype.toString.call(tpCalendarId) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: tpCalendarId EXPECTED TYPE: String", null, null);
		}
		this.tpCalendarId = tpCalendarId;
		this.keyModified.set("tp_calendar_id", 1);

	}

	/**
	 * The method to get the tpEventId
	 * @returns {String} A String representing the tpEventId
	 */
	getTpEventId()	{
		return this.tpEventId;

	}

	/**
	 * The method to set the value to tpEventId
	 * @param {String} tpEventId A String representing the tpEventId
	 */
	setTpEventId(tpEventId)	{
		if((tpEventId != null) && (!(Object.prototype.toString.call(tpEventId) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: tpEventId EXPECTED TYPE: String", null, null);
		}
		this.tpEventId = tpEventId;
		this.keyModified.set("tp_event_id", 1);

	}

	/**
	 * The method to get the comments
	 * @returns {String} A String representing the comments
	 */
	getComments()	{
		return this.comments;

	}

	/**
	 * The method to set the value to comments
	 * @param {String} comments A String representing the comments
	 */
	setComments(comments)	{
		if((comments != null) && (!(Object.prototype.toString.call(comments) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: comments EXPECTED TYPE: String", null, null);
		}
		this.comments = comments;
		this.keyModified.set("comments", 1);

	}

	/**
	 * The method to get the from
	 * @returns {Date} An instance of Date
	 */
	getFrom()	{
		return this.from;

	}

	/**
	 * The method to set the value to from
	 * @param {Date} from An instance of Date
	 */
	setFrom(from)	{
		if((from != null) && (!(from instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: from EXPECTED TYPE: Date", null, null);
		}
		this.from = from;
		this.keyModified.set("from", 1);

	}

	/**
	 * The method to get the id
	 * @returns {BigInt} A BigInt representing the id
	 */
	getId()	{
		return this.id;

	}

	/**
	 * The method to set the value to id
	 * @param {BigInt} id A BigInt representing the id
	 */
	setId(id)	{
		if((id != null) && (!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		this.id = id;
		this.keyModified.set("id", 1);

	}

	/**
	 * The method to get the to
	 * @returns {Date} An instance of Date
	 */
	getTo()	{
		return this.to;

	}

	/**
	 * The method to set the value to to
	 * @param {Date} to An instance of Date
	 */
	setTo(to)	{
		if((to != null) && (!(to instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: to EXPECTED TYPE: Date", null, null);
		}
		this.to = to;
		this.keyModified.set("to", 1);

	}

	/**
	 * The method to get the user
	 * @returns {User} An instance of User
	 */
	getUser()	{
		return this.user;

	}

	/**
	 * The method to set the value to user
	 * @param {User} user An instance of User
	 */
	async setUser(user)	{
		const User = (await (import("./user.js"))).MasterModel;
		if((user != null) && (!(user instanceof User)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: user EXPECTED TYPE: User", null, null);
		}
		this.user = user;
		this.keyModified.set("user", 1);

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
	UsersUnavailability as MasterModel,
	UsersUnavailability as UsersUnavailability
}
