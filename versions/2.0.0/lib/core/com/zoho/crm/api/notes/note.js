import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Note{

	modifiedTime;
	attachments;
	owner;
	createdTime;
	parentId;
	editable;
	isSharedToClient;
	sharingPermission;
	modifiedBy;
	size;
	state;
	voiceNote;
	id;
	createdBy;
	noteTitle;
	noteContent;
	keyModified = new Map();
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
		this.keyModified.set("Modified_Time", 1);

	}

	/**
	 * The method to get the attachments
	 * @returns {Array} An Array representing the attachments
	 */
	getAttachments()	{
		return this.attachments;

	}

	/**
	 * The method to set the value to attachments
	 * @param {Array} attachments An Array representing the attachments
	 */
	setAttachments(attachments)	{
		if((attachments != null) && (!(Object.prototype.toString.call(attachments) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: attachments EXPECTED TYPE: Array", null, null);
		}
		this.attachments = attachments;
		this.keyModified.set("$attachments", 1);

	}

	/**
	 * The method to get the owner
	 * @returns {MinifiedUser} An instance of MinifiedUser
	 */
	getOwner()	{
		return this.owner;

	}

	/**
	 * The method to set the value to owner
	 * @param {MinifiedUser} owner An instance of MinifiedUser
	 */
	async setOwner(owner)	{
		const MinifiedUser = (await (import("../users/minified_user.js"))).MasterModel;
		if((owner != null) && (!(owner instanceof MinifiedUser)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: owner EXPECTED TYPE: MinifiedUser", null, null);
		}
		this.owner = owner;
		this.keyModified.set("Owner", 1);

	}

	/**
	 * The method to get the createdTime
	 * @returns {Date} An instance of Date
	 */
	getCreatedTime()	{
		return this.createdTime;

	}

	/**
	 * The method to set the value to createdTime
	 * @param {Date} createdTime An instance of Date
	 */
	setCreatedTime(createdTime)	{
		if((createdTime != null) && (!(createdTime instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdTime EXPECTED TYPE: Date", null, null);
		}
		this.createdTime = createdTime;
		this.keyModified.set("Created_Time", 1);

	}

	/**
	 * The method to get the parentId
	 * @returns {ParentId} An instance of ParentId
	 */
	getParentId()	{
		return this.parentId;

	}

	/**
	 * The method to set the value to parentId
	 * @param {ParentId} parentId An instance of ParentId
	 */
	async setParentId(parentId)	{
		const ParentId = (await (import("./parent_id.js"))).MasterModel;
		if((parentId != null) && (!(parentId instanceof ParentId)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: parentId EXPECTED TYPE: ParentId", null, null);
		}
		this.parentId = parentId;
		this.keyModified.set("Parent_Id", 1);

	}

	/**
	 * The method to get the editable
	 * @returns {Boolean} A Boolean representing the editable
	 */
	getEditable()	{
		return this.editable;

	}

	/**
	 * The method to set the value to editable
	 * @param {Boolean} editable A Boolean representing the editable
	 */
	setEditable(editable)	{
		if((editable != null) && (!(Object.prototype.toString.call(editable) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: editable EXPECTED TYPE: Boolean", null, null);
		}
		this.editable = editable;
		this.keyModified.set("$editable", 1);

	}

	/**
	 * The method to get the isSharedToClient
	 * @returns {Boolean} A Boolean representing the isSharedToClient
	 */
	getIsSharedToClient()	{
		return this.isSharedToClient;

	}

	/**
	 * The method to set the value to isSharedToClient
	 * @param {Boolean} isSharedToClient A Boolean representing the isSharedToClient
	 */
	setIsSharedToClient(isSharedToClient)	{
		if((isSharedToClient != null) && (!(Object.prototype.toString.call(isSharedToClient) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: isSharedToClient EXPECTED TYPE: Boolean", null, null);
		}
		this.isSharedToClient = isSharedToClient;
		this.keyModified.set("$is_shared_to_client", 1);

	}

	/**
	 * The method to get the sharingPermission
	 * @returns {String} A String representing the sharingPermission
	 */
	getSharingPermission()	{
		return this.sharingPermission;

	}

	/**
	 * The method to set the value to sharingPermission
	 * @param {String} sharingPermission A String representing the sharingPermission
	 */
	setSharingPermission(sharingPermission)	{
		if((sharingPermission != null) && (!(Object.prototype.toString.call(sharingPermission) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sharingPermission EXPECTED TYPE: String", null, null);
		}
		this.sharingPermission = sharingPermission;
		this.keyModified.set("$sharing_permission", 1);

	}

	/**
	 * The method to get the modifiedBy
	 * @returns {MinifiedUser} An instance of MinifiedUser
	 */
	getModifiedBy()	{
		return this.modifiedBy;

	}

	/**
	 * The method to set the value to modifiedBy
	 * @param {MinifiedUser} modifiedBy An instance of MinifiedUser
	 */
	async setModifiedBy(modifiedBy)	{
		const MinifiedUser = (await (import("../users/minified_user.js"))).MasterModel;
		if((modifiedBy != null) && (!(modifiedBy instanceof MinifiedUser)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modifiedBy EXPECTED TYPE: MinifiedUser", null, null);
		}
		this.modifiedBy = modifiedBy;
		this.keyModified.set("Modified_By", 1);

	}

	/**
	 * The method to get the size
	 * @returns {String} A String representing the size
	 */
	getSize()	{
		return this.size;

	}

	/**
	 * The method to set the value to size
	 * @param {String} size A String representing the size
	 */
	setSize(size)	{
		if((size != null) && (!(Object.prototype.toString.call(size) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: size EXPECTED TYPE: String", null, null);
		}
		this.size = size;
		this.keyModified.set("$size", 1);

	}

	/**
	 * The method to get the state
	 * @returns {String} A String representing the state
	 */
	getState()	{
		return this.state;

	}

	/**
	 * The method to set the value to state
	 * @param {String} state A String representing the state
	 */
	setState(state)	{
		if((state != null) && (!(Object.prototype.toString.call(state) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: state EXPECTED TYPE: String", null, null);
		}
		this.state = state;
		this.keyModified.set("$state", 1);

	}

	/**
	 * The method to get the voiceNote
	 * @returns {Boolean} A Boolean representing the voiceNote
	 */
	getVoiceNote()	{
		return this.voiceNote;

	}

	/**
	 * The method to set the value to voiceNote
	 * @param {Boolean} voiceNote A Boolean representing the voiceNote
	 */
	setVoiceNote(voiceNote)	{
		if((voiceNote != null) && (!(Object.prototype.toString.call(voiceNote) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: voiceNote EXPECTED TYPE: Boolean", null, null);
		}
		this.voiceNote = voiceNote;
		this.keyModified.set("$voice_note", 1);

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
	 * The method to get the createdBy
	 * @returns {MinifiedUser} An instance of MinifiedUser
	 */
	getCreatedBy()	{
		return this.createdBy;

	}

	/**
	 * The method to set the value to createdBy
	 * @param {MinifiedUser} createdBy An instance of MinifiedUser
	 */
	async setCreatedBy(createdBy)	{
		const MinifiedUser = (await (import("../users/minified_user.js"))).MasterModel;
		if((createdBy != null) && (!(createdBy instanceof MinifiedUser)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdBy EXPECTED TYPE: MinifiedUser", null, null);
		}
		this.createdBy = createdBy;
		this.keyModified.set("Created_By", 1);

	}

	/**
	 * The method to get the noteTitle
	 * @returns {String} A String representing the noteTitle
	 */
	getNoteTitle()	{
		return this.noteTitle;

	}

	/**
	 * The method to set the value to noteTitle
	 * @param {String} noteTitle A String representing the noteTitle
	 */
	setNoteTitle(noteTitle)	{
		if((noteTitle != null) && (!(Object.prototype.toString.call(noteTitle) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: noteTitle EXPECTED TYPE: String", null, null);
		}
		this.noteTitle = noteTitle;
		this.keyModified.set("Note_Title", 1);

	}

	/**
	 * The method to get the noteContent
	 * @returns {String} A String representing the noteContent
	 */
	getNoteContent()	{
		return this.noteContent;

	}

	/**
	 * The method to set the value to noteContent
	 * @param {String} noteContent A String representing the noteContent
	 */
	setNoteContent(noteContent)	{
		if((noteContent != null) && (!(Object.prototype.toString.call(noteContent) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: noteContent EXPECTED TYPE: String", null, null);
		}
		this.noteContent = noteContent;
		this.keyModified.set("Note_Content", 1);

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
	Note as MasterModel,
	Note as Note
}
