import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Permissions{

	view;
	edit;
	editSharedRecords;
	create;
	delete1;
	deleteAttachment;
	createAttachment;
	keyModified = new Map();
	/**
	 * The method to get the view
	 * @returns {Boolean} A Boolean representing the view
	 */
	getView()	{
		return this.view;

	}

	/**
	 * The method to set the value to view
	 * @param {Boolean} view A Boolean representing the view
	 */
	setView(view)	{
		if((view != null) && (!(Object.prototype.toString.call(view) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: view EXPECTED TYPE: Boolean", null, null);
		}
		this.view = view;
		this.keyModified.set("view", 1);

	}

	/**
	 * The method to get the edit
	 * @returns {Boolean} A Boolean representing the edit
	 */
	getEdit()	{
		return this.edit;

	}

	/**
	 * The method to set the value to edit
	 * @param {Boolean} edit A Boolean representing the edit
	 */
	setEdit(edit)	{
		if((edit != null) && (!(Object.prototype.toString.call(edit) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: edit EXPECTED TYPE: Boolean", null, null);
		}
		this.edit = edit;
		this.keyModified.set("edit", 1);

	}

	/**
	 * The method to get the editSharedRecords
	 * @returns {Boolean} A Boolean representing the editSharedRecords
	 */
	getEditSharedRecords()	{
		return this.editSharedRecords;

	}

	/**
	 * The method to set the value to editSharedRecords
	 * @param {Boolean} editSharedRecords A Boolean representing the editSharedRecords
	 */
	setEditSharedRecords(editSharedRecords)	{
		if((editSharedRecords != null) && (!(Object.prototype.toString.call(editSharedRecords) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: editSharedRecords EXPECTED TYPE: Boolean", null, null);
		}
		this.editSharedRecords = editSharedRecords;
		this.keyModified.set("edit_shared_records", 1);

	}

	/**
	 * The method to get the create
	 * @returns {Boolean} A Boolean representing the create
	 */
	getCreate()	{
		return this.create;

	}

	/**
	 * The method to set the value to create
	 * @param {Boolean} create A Boolean representing the create
	 */
	setCreate(create)	{
		if((create != null) && (!(Object.prototype.toString.call(create) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: create EXPECTED TYPE: Boolean", null, null);
		}
		this.create = create;
		this.keyModified.set("create", 1);

	}

	/**
	 * The method to get the delete
	 * @returns {Boolean} A Boolean representing the delete1
	 */
	getDelete()	{
		return this.delete1;

	}

	/**
	 * The method to set the value to delete
	 * @param {Boolean} delete1 A Boolean representing the delete1
	 */
	setDelete(delete1)	{
		if((delete1 != null) && (!(Object.prototype.toString.call(delete1) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: delete1 EXPECTED TYPE: Boolean", null, null);
		}
		this.delete1 = delete1;
		this.keyModified.set("delete", 1);

	}

	/**
	 * The method to get the deleteAttachment
	 * @returns {Boolean} A Boolean representing the deleteAttachment
	 */
	getDeleteAttachment()	{
		return this.deleteAttachment;

	}

	/**
	 * The method to set the value to deleteAttachment
	 * @param {Boolean} deleteAttachment A Boolean representing the deleteAttachment
	 */
	setDeleteAttachment(deleteAttachment)	{
		if((deleteAttachment != null) && (!(Object.prototype.toString.call(deleteAttachment) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: deleteAttachment EXPECTED TYPE: Boolean", null, null);
		}
		this.deleteAttachment = deleteAttachment;
		this.keyModified.set("delete_attachment", 1);

	}

	/**
	 * The method to get the createAttachment
	 * @returns {Boolean} A Boolean representing the createAttachment
	 */
	getCreateAttachment()	{
		return this.createAttachment;

	}

	/**
	 * The method to set the value to createAttachment
	 * @param {Boolean} createAttachment A Boolean representing the createAttachment
	 */
	setCreateAttachment(createAttachment)	{
		if((createAttachment != null) && (!(Object.prototype.toString.call(createAttachment) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createAttachment EXPECTED TYPE: Boolean", null, null);
		}
		this.createAttachment = createAttachment;
		this.keyModified.set("create_attachment", 1);

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
	Permissions as MasterModel,
	Permissions as Permissions
}
