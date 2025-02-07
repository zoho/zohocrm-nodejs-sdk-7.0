import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class AssociationResponse{

	type;
	resource;
	detail;
	keyModified = new Map();
	/**
	 * The method to get the type
	 * @returns {String} A String representing the type
	 */
	getType()	{
		return this.type;

	}

	/**
	 * The method to set the value to type
	 * @param {String} type A String representing the type
	 */
	setType(type)	{
		if((type != null) && (!(Object.prototype.toString.call(type) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: type EXPECTED TYPE: String", null, null);
		}
		this.type = type;
		this.keyModified.set("type", 1);

	}

	/**
	 * The method to get the resource
	 * @returns {Resource} An instance of Resource
	 */
	getResource()	{
		return this.resource;

	}

	/**
	 * The method to set the value to resource
	 * @param {Resource} resource An instance of Resource
	 */
	async setResource(resource)	{
		const Resource = (await (import("./resource.js"))).MasterModel;
		if((resource != null) && (!(resource instanceof Resource)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: resource EXPECTED TYPE: Resource", null, null);
		}
		this.resource = resource;
		this.keyModified.set("resource", 1);

	}

	/**
	 * The method to get the detail
	 * @returns {AssociationModule} An instance of AssociationModule
	 */
	getDetail()	{
		return this.detail;

	}

	/**
	 * The method to set the value to detail
	 * @param {AssociationModule} detail An instance of AssociationModule
	 */
	async setDetail(detail)	{
		const AssociationModule = (await (import("./association_module.js"))).MasterModel;
		if((detail != null) && (!(detail instanceof AssociationModule)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: detail EXPECTED TYPE: AssociationModule", null, null);
		}
		this.detail = detail;
		this.keyModified.set("detail", 1);

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
	AssociationResponse as MasterModel,
	AssociationResponse as AssociationResponse
}
