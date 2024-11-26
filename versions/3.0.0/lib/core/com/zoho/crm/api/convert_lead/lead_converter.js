import {Choice} from "../../../../../../utils/util/choice.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class LeadConverter{

	overwrite;
	notifyLeadOwner;
	notifyNewEntityOwner;
	moveAttachmentsTo;
	accounts;
	contacts;
	assignTo;
	deals;
	addToExistingRecord;
	carryOverTags;
	keyModified = new Map();
	/**
	 * The method to get the overwrite
	 * @returns {Boolean} A Boolean representing the overwrite
	 */
	getOverwrite()	{
		return this.overwrite;

	}

	/**
	 * The method to set the value to overwrite
	 * @param {Boolean} overwrite A Boolean representing the overwrite
	 */
	setOverwrite(overwrite)	{
		if((overwrite != null) && (!(Object.prototype.toString.call(overwrite) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: overwrite EXPECTED TYPE: Boolean", null, null);
		}
		this.overwrite = overwrite;
		this.keyModified.set("overwrite", 1);

	}

	/**
	 * The method to get the notifyLeadOwner
	 * @returns {Boolean} A Boolean representing the notifyLeadOwner
	 */
	getNotifyLeadOwner()	{
		return this.notifyLeadOwner;

	}

	/**
	 * The method to set the value to notifyLeadOwner
	 * @param {Boolean} notifyLeadOwner A Boolean representing the notifyLeadOwner
	 */
	setNotifyLeadOwner(notifyLeadOwner)	{
		if((notifyLeadOwner != null) && (!(Object.prototype.toString.call(notifyLeadOwner) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: notifyLeadOwner EXPECTED TYPE: Boolean", null, null);
		}
		this.notifyLeadOwner = notifyLeadOwner;
		this.keyModified.set("notify_lead_owner", 1);

	}

	/**
	 * The method to get the notifyNewEntityOwner
	 * @returns {Boolean} A Boolean representing the notifyNewEntityOwner
	 */
	getNotifyNewEntityOwner()	{
		return this.notifyNewEntityOwner;

	}

	/**
	 * The method to set the value to notifyNewEntityOwner
	 * @param {Boolean} notifyNewEntityOwner A Boolean representing the notifyNewEntityOwner
	 */
	setNotifyNewEntityOwner(notifyNewEntityOwner)	{
		if((notifyNewEntityOwner != null) && (!(Object.prototype.toString.call(notifyNewEntityOwner) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: notifyNewEntityOwner EXPECTED TYPE: Boolean", null, null);
		}
		this.notifyNewEntityOwner = notifyNewEntityOwner;
		this.keyModified.set("notify_new_entity_owner", 1);

	}

	/**
	 * The method to get the moveAttachmentsTo
	 * @returns {MoveAttachmentsTo} An instance of MoveAttachmentsTo
	 */
	getMoveAttachmentsTo()	{
		return this.moveAttachmentsTo;

	}

	/**
	 * The method to set the value to moveAttachmentsTo
	 * @param {MoveAttachmentsTo} moveAttachmentsTo An instance of MoveAttachmentsTo
	 */
	async setMoveAttachmentsTo(moveAttachmentsTo)	{
		const MoveAttachmentsTo = (await (import("./move_attachments_to.js"))).MasterModel;
		if((moveAttachmentsTo != null) && (!(moveAttachmentsTo instanceof MoveAttachmentsTo)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moveAttachmentsTo EXPECTED TYPE: MoveAttachmentsTo", null, null);
		}
		this.moveAttachmentsTo = moveAttachmentsTo;
		this.keyModified.set("move_attachments_to", 1);

	}

	/**
	 * The method to get the accounts
	 * @returns {Record} An instance of Record
	 */
	getAccounts()	{
		return this.accounts;

	}

	/**
	 * The method to set the value to accounts
	 * @param {Record} accounts An instance of Record
	 */
	async setAccounts(accounts)	{
		const Record = (await (import("../record/record.js"))).MasterModel;
		if((accounts != null) && (!(accounts instanceof Record)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: accounts EXPECTED TYPE: Record", null, null);
		}
		this.accounts = accounts;
		this.keyModified.set("Accounts", 1);

	}

	/**
	 * The method to get the contacts
	 * @returns {Record} An instance of Record
	 */
	getContacts()	{
		return this.contacts;

	}

	/**
	 * The method to set the value to contacts
	 * @param {Record} contacts An instance of Record
	 */
	async setContacts(contacts)	{
		const Record = (await (import("../record/record.js"))).MasterModel;
		if((contacts != null) && (!(contacts instanceof Record)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: contacts EXPECTED TYPE: Record", null, null);
		}
		this.contacts = contacts;
		this.keyModified.set("Contacts", 1);

	}

	/**
	 * The method to get the assignTo
	 * @returns {MinifiedUser} An instance of MinifiedUser
	 */
	getAssignTo()	{
		return this.assignTo;

	}

	/**
	 * The method to set the value to assignTo
	 * @param {MinifiedUser} assignTo An instance of MinifiedUser
	 */
	async setAssignTo(assignTo)	{
		const MinifiedUser = (await (import("../users/minified_user.js"))).MasterModel;
		if((assignTo != null) && (!(assignTo instanceof MinifiedUser)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: assignTo EXPECTED TYPE: MinifiedUser", null, null);
		}
		this.assignTo = assignTo;
		this.keyModified.set("assign_to", 1);

	}

	/**
	 * The method to get the deals
	 * @returns {Record} An instance of Record
	 */
	getDeals()	{
		return this.deals;

	}

	/**
	 * The method to set the value to deals
	 * @param {Record} deals An instance of Record
	 */
	async setDeals(deals)	{
		const Record = (await (import("../record/record.js"))).MasterModel;
		if((deals != null) && (!(deals instanceof Record)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: deals EXPECTED TYPE: Record", null, null);
		}
		this.deals = deals;
		this.keyModified.set("Deals", 1);

	}

	/**
	 * The method to get the addToExistingRecord
	 * @returns {Choice} An instance of Choice
	 */
	getAddToExistingRecord()	{
		return this.addToExistingRecord;

	}

	/**
	 * The method to set the value to addToExistingRecord
	 * @param {Choice} addToExistingRecord An instance of Choice
	 */
	setAddToExistingRecord(addToExistingRecord)	{
		if((addToExistingRecord != null) && (!(addToExistingRecord instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: addToExistingRecord EXPECTED TYPE: Choice", null, null);
		}
		this.addToExistingRecord = addToExistingRecord;
		this.keyModified.set("add_to_existing_record", 1);

	}

	/**
	 * The method to get the carryOverTags
	 * @returns {CarryOverTags} An instance of CarryOverTags
	 */
	getCarryOverTags()	{
		return this.carryOverTags;

	}

	/**
	 * The method to set the value to carryOverTags
	 * @param {CarryOverTags} carryOverTags An instance of CarryOverTags
	 */
	async setCarryOverTags(carryOverTags)	{
		const CarryOverTags = (await (import("./carry_over_tags.js"))).MasterModel;
		if((carryOverTags != null) && (!(carryOverTags instanceof CarryOverTags)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: carryOverTags EXPECTED TYPE: CarryOverTags", null, null);
		}
		this.carryOverTags = carryOverTags;
		this.keyModified.set("carry_over_tags", 1);

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
	LeadConverter as MasterModel,
	LeadConverter as LeadConverter
}
