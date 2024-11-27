import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Templates{

	folder;
	modifiedBy;
	module;
	modifiedTime;
	subject;
	name;
	consentLinked;
	favourite;
	attachmentPresent;
	id;
	keyModified = new Map();
	/**
	 * The method to get the folder
	 * @returns {Folder} An instance of Folder
	 */
	getFolder()	{
		return this.folder;

	}

	/**
	 * The method to set the value to folder
	 * @param {Folder} folder An instance of Folder
	 */
	async setFolder(folder)	{
		const Folder = (await (import("./folder.js"))).MasterModel;
		if((folder != null) && (!(folder instanceof Folder)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: folder EXPECTED TYPE: Folder", null, null);
		}
		this.folder = folder;
		this.keyModified.set("folder", 1);

	}

	/**
	 * The method to get the modifiedBy
	 * @returns {Folder} An instance of Folder
	 */
	getModifiedBy()	{
		return this.modifiedBy;

	}

	/**
	 * The method to set the value to modifiedBy
	 * @param {Folder} modifiedBy An instance of Folder
	 */
	async setModifiedBy(modifiedBy)	{
		const Folder = (await (import("./folder.js"))).MasterModel;
		if((modifiedBy != null) && (!(modifiedBy instanceof Folder)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modifiedBy EXPECTED TYPE: Folder", null, null);
		}
		this.modifiedBy = modifiedBy;
		this.keyModified.set("modified_by", 1);

	}

	/**
	 * The method to get the module
	 * @returns {String} A String representing the module
	 */
	getModule()	{
		return this.module;

	}

	/**
	 * The method to set the value to module
	 * @param {String} module A String representing the module
	 */
	setModule(module)	{
		if((module != null) && (!(Object.prototype.toString.call(module) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: String", null, null);
		}
		this.module = module;
		this.keyModified.set("module", 1);

	}

	/**
	 * The method to get the modifiedTime
	 * @returns {Date} An instance of Date
	 */
	getModifiedTime()	{
		return this.modifiedTime;

	}

	/**
	 * The method to set the value to modifiedTime
	 * @param {Date} modifiedTime An instance of Date
	 */
	setModifiedTime(modifiedTime)	{
		if((modifiedTime != null) && (!(modifiedTime instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modifiedTime EXPECTED TYPE: Date", null, null);
		}
		this.modifiedTime = modifiedTime;
		this.keyModified.set("modified_time", 1);

	}

	/**
	 * The method to get the subject
	 * @returns {String} A String representing the subject
	 */
	getSubject()	{
		return this.subject;

	}

	/**
	 * The method to set the value to subject
	 * @param {String} subject A String representing the subject
	 */
	setSubject(subject)	{
		if((subject != null) && (!(Object.prototype.toString.call(subject) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: subject EXPECTED TYPE: String", null, null);
		}
		this.subject = subject;
		this.keyModified.set("subject", 1);

	}

	/**
	 * The method to get the name
	 * @returns {String} A String representing the name
	 */
	getName()	{
		return this.name;

	}

	/**
	 * The method to set the value to name
	 * @param {String} name A String representing the name
	 */
	setName(name)	{
		if((name != null) && (!(Object.prototype.toString.call(name) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: name EXPECTED TYPE: String", null, null);
		}
		this.name = name;
		this.keyModified.set("name", 1);

	}

	/**
	 * The method to get the consentLinked
	 * @returns {Boolean} A Boolean representing the consentLinked
	 */
	getConsentLinked()	{
		return this.consentLinked;

	}

	/**
	 * The method to set the value to consentLinked
	 * @param {Boolean} consentLinked A Boolean representing the consentLinked
	 */
	setConsentLinked(consentLinked)	{
		if((consentLinked != null) && (!(Object.prototype.toString.call(consentLinked) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: consentLinked EXPECTED TYPE: Boolean", null, null);
		}
		this.consentLinked = consentLinked;
		this.keyModified.set("consent_linked", 1);

	}

	/**
	 * The method to get the favourite
	 * @returns {Boolean} A Boolean representing the favourite
	 */
	getFavourite()	{
		return this.favourite;

	}

	/**
	 * The method to set the value to favourite
	 * @param {Boolean} favourite A Boolean representing the favourite
	 */
	setFavourite(favourite)	{
		if((favourite != null) && (!(Object.prototype.toString.call(favourite) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: favourite EXPECTED TYPE: Boolean", null, null);
		}
		this.favourite = favourite;
		this.keyModified.set("favourite", 1);

	}

	/**
	 * The method to get the attachmentPresent
	 * @returns {Boolean} A Boolean representing the attachmentPresent
	 */
	getAttachmentPresent()	{
		return this.attachmentPresent;

	}

	/**
	 * The method to set the value to attachmentPresent
	 * @param {Boolean} attachmentPresent A Boolean representing the attachmentPresent
	 */
	setAttachmentPresent(attachmentPresent)	{
		if((attachmentPresent != null) && (!(Object.prototype.toString.call(attachmentPresent) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: attachmentPresent EXPECTED TYPE: Boolean", null, null);
		}
		this.attachmentPresent = attachmentPresent;
		this.keyModified.set("attachment_present", 1);

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
	Templates as MasterModel,
	Templates as Templates
}
