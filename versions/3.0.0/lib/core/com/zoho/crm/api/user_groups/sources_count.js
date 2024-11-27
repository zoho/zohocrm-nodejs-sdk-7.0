import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class SourcesCount{

	territories;
	roles;
	groups;
	users;
	keyModified = new Map();
	/**
	 * The method to get the territories
	 * @returns {number} A number representing the territories
	 */
	getTerritories()	{
		return this.territories;

	}

	/**
	 * The method to set the value to territories
	 * @param {number} territories A number representing the territories
	 */
	setTerritories(territories)	{
		if((territories != null) && (!(Object.prototype.toString.call(territories) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: territories EXPECTED TYPE: number", null, null);
		}
		this.territories = territories;
		this.keyModified.set("territories", 1);

	}

	/**
	 * The method to get the roles
	 * @returns {number} A number representing the roles
	 */
	getRoles()	{
		return this.roles;

	}

	/**
	 * The method to set the value to roles
	 * @param {number} roles A number representing the roles
	 */
	setRoles(roles)	{
		if((roles != null) && (!(Object.prototype.toString.call(roles) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: roles EXPECTED TYPE: number", null, null);
		}
		this.roles = roles;
		this.keyModified.set("roles", 1);

	}

	/**
	 * The method to get the groups
	 * @returns {number} A number representing the groups
	 */
	getGroups()	{
		return this.groups;

	}

	/**
	 * The method to set the value to groups
	 * @param {number} groups A number representing the groups
	 */
	setGroups(groups)	{
		if((groups != null) && (!(Object.prototype.toString.call(groups) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: groups EXPECTED TYPE: number", null, null);
		}
		this.groups = groups;
		this.keyModified.set("groups", 1);

	}

	/**
	 * The method to get the users
	 * @returns {Users} An instance of Users
	 */
	getUsers()	{
		return this.users;

	}

	/**
	 * The method to set the value to users
	 * @param {Users} users An instance of Users
	 */
	async setUsers(users)	{
		const Users = (await (import("./users.js"))).MasterModel;
		if((users != null) && (!(users instanceof Users)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: users EXPECTED TYPE: Users", null, null);
		}
		this.users = users;
		this.keyModified.set("users", 1);

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
	SourcesCount as MasterModel,
	SourcesCount as SourcesCount
}
