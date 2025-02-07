import {Choice} from "../../../../../../utils/util/choice.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Query{

	module;
	cvid;
	fields;
	page;
	criteria;
	fileType;
	pageToken;
	keyModified = new Map();
	/**
	 * The method to get the module
	 * @returns {MinifiedModule} An instance of MinifiedModule
	 */
	getModule()	{
		return this.module;

	}

	/**
	 * The method to set the value to module
	 * @param {MinifiedModule} module An instance of MinifiedModule
	 */
	async setModule(module)	{
		const MinifiedModule = (await (import("../modules/minified_module.js"))).MasterModel;
		if((module != null) && (!(module instanceof MinifiedModule)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: MinifiedModule", null, null);
		}
		this.module = module;
		this.keyModified.set("module", 1);

	}

	/**
	 * The method to get the cvid
	 * @returns {BigInt} A BigInt representing the cvid
	 */
	getCvid()	{
		return this.cvid;

	}

	/**
	 * The method to set the value to cvid
	 * @param {BigInt} cvid A BigInt representing the cvid
	 */
	setCvid(cvid)	{
		if((cvid != null) && (!(Object.prototype.toString.call(cvid) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: cvid EXPECTED TYPE: BigInt", null, null);
		}
		this.cvid = cvid;
		this.keyModified.set("cvid", 1);

	}

	/**
	 * The method to get the fields
	 * @returns {Array} An Array representing the fields
	 */
	getFields()	{
		return this.fields;

	}

	/**
	 * The method to set the value to fields
	 * @param {Array} fields An Array representing the fields
	 */
	setFields(fields)	{
		if((fields != null) && (!(Object.prototype.toString.call(fields) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fields EXPECTED TYPE: Array", null, null);
		}
		this.fields = fields;
		this.keyModified.set("fields", 1);

	}

	/**
	 * The method to get the page
	 * @returns {number} A number representing the page
	 */
	getPage()	{
		return this.page;

	}

	/**
	 * The method to set the value to page
	 * @param {number} page A number representing the page
	 */
	setPage(page)	{
		if((page != null) && (!(Object.prototype.toString.call(page) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: page EXPECTED TYPE: number", null, null);
		}
		this.page = page;
		this.keyModified.set("page", 1);

	}

	/**
	 * The method to get the criteria
	 * @returns {Criteria} An instance of Criteria
	 */
	getCriteria()	{
		return this.criteria;

	}

	/**
	 * The method to set the value to criteria
	 * @param {Criteria} criteria An instance of Criteria
	 */
	async setCriteria(criteria)	{
		const Criteria = (await (import("./criteria.js"))).MasterModel;
		if((criteria != null) && (!(criteria instanceof Criteria)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: criteria EXPECTED TYPE: Criteria", null, null);
		}
		this.criteria = criteria;
		this.keyModified.set("criteria", 1);

	}

	/**
	 * The method to get the fileType
	 * @returns {Choice} An instance of Choice
	 */
	getFileType()	{
		return this.fileType;

	}

	/**
	 * The method to set the value to fileType
	 * @param {Choice} fileType An instance of Choice
	 */
	setFileType(fileType)	{
		if((fileType != null) && (!(fileType instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fileType EXPECTED TYPE: Choice", null, null);
		}
		this.fileType = fileType;
		this.keyModified.set("file_type", 1);

	}

	/**
	 * The method to get the pageToken
	 * @returns {String} A String representing the pageToken
	 */
	getPageToken()	{
		return this.pageToken;

	}

	/**
	 * The method to set the value to pageToken
	 * @param {String} pageToken A String representing the pageToken
	 */
	setPageToken(pageToken)	{
		if((pageToken != null) && (!(Object.prototype.toString.call(pageToken) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: pageToken EXPECTED TYPE: String", null, null);
		}
		this.pageToken = pageToken;
		this.keyModified.set("page_token", 1);

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
	Query as MasterModel,
	Query as Query
}
