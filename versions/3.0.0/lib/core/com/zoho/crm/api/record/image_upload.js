import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class ImageUpload{

	previewIdS;
	fileNameS;
	descriptionS;
	sizeS;
	id;
	sequenceNumberS;
	stateS;
	fileIdS;
	delete1;
	createdTimeS;
	modifiedTimeS;
	createdByS;
	ownerS;
	modifiedByS;
	keyModified = new Map();
	/**
	 * The method to get the previewIdS
	 * @returns {String} A String representing the previewIdS
	 */
	getPreviewIdS()	{
		return this.previewIdS;

	}

	/**
	 * The method to set the value to previewIdS
	 * @param {String} previewIdS A String representing the previewIdS
	 */
	setPreviewIdS(previewIdS)	{
		if((previewIdS != null) && (!(Object.prototype.toString.call(previewIdS) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: previewIdS EXPECTED TYPE: String", null, null);
		}
		this.previewIdS = previewIdS;
		this.keyModified.set("Preview_Id__s", 1);

	}

	/**
	 * The method to get the fileNameS
	 * @returns {String} A String representing the fileNameS
	 */
	getFileNameS()	{
		return this.fileNameS;

	}

	/**
	 * The method to set the value to fileNameS
	 * @param {String} fileNameS A String representing the fileNameS
	 */
	setFileNameS(fileNameS)	{
		if((fileNameS != null) && (!(Object.prototype.toString.call(fileNameS) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fileNameS EXPECTED TYPE: String", null, null);
		}
		this.fileNameS = fileNameS;
		this.keyModified.set("File_Name__s", 1);

	}

	/**
	 * The method to get the descriptionS
	 * @returns {String} A String representing the descriptionS
	 */
	getDescriptionS()	{
		return this.descriptionS;

	}

	/**
	 * The method to set the value to descriptionS
	 * @param {String} descriptionS A String representing the descriptionS
	 */
	setDescriptionS(descriptionS)	{
		if((descriptionS != null) && (!(Object.prototype.toString.call(descriptionS) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: descriptionS EXPECTED TYPE: String", null, null);
		}
		this.descriptionS = descriptionS;
		this.keyModified.set("Description__s", 1);

	}

	/**
	 * The method to get the sizeS
	 * @returns {String} A String representing the sizeS
	 */
	getSizeS()	{
		return this.sizeS;

	}

	/**
	 * The method to set the value to sizeS
	 * @param {String} sizeS A String representing the sizeS
	 */
	setSizeS(sizeS)	{
		if((sizeS != null) && (!(Object.prototype.toString.call(sizeS) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sizeS EXPECTED TYPE: String", null, null);
		}
		this.sizeS = sizeS;
		this.keyModified.set("Size__s", 1);

	}

	/**
	 * The method to get the id
	 * @returns {String} A String representing the id
	 */
	getId()	{
		return this.id;

	}

	/**
	 * The method to set the value to id
	 * @param {String} id A String representing the id
	 */
	setId(id)	{
		if((id != null) && (!(Object.prototype.toString.call(id) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: String", null, null);
		}
		this.id = id;
		this.keyModified.set("id", 1);

	}

	/**
	 * The method to get the sequenceNumberS
	 * @returns {BigInt} A BigInt representing the sequenceNumberS
	 */
	getSequenceNumberS()	{
		return this.sequenceNumberS;

	}

	/**
	 * The method to set the value to sequenceNumberS
	 * @param {BigInt} sequenceNumberS A BigInt representing the sequenceNumberS
	 */
	setSequenceNumberS(sequenceNumberS)	{
		if((sequenceNumberS != null) && (!(Object.prototype.toString.call(sequenceNumberS) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sequenceNumberS EXPECTED TYPE: BigInt", null, null);
		}
		this.sequenceNumberS = sequenceNumberS;
		this.keyModified.set("Sequence_Number__s", 1);

	}

	/**
	 * The method to get the stateS
	 * @returns {String} A String representing the stateS
	 */
	getStateS()	{
		return this.stateS;

	}

	/**
	 * The method to set the value to stateS
	 * @param {String} stateS A String representing the stateS
	 */
	setStateS(stateS)	{
		if((stateS != null) && (!(Object.prototype.toString.call(stateS) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: stateS EXPECTED TYPE: String", null, null);
		}
		this.stateS = stateS;
		this.keyModified.set("State__s", 1);

	}

	/**
	 * The method to get the fileIdS
	 * @returns {String} A String representing the fileIdS
	 */
	getFileIdS()	{
		return this.fileIdS;

	}

	/**
	 * The method to set the value to fileIdS
	 * @param {String} fileIdS A String representing the fileIdS
	 */
	setFileIdS(fileIdS)	{
		if((fileIdS != null) && (!(Object.prototype.toString.call(fileIdS) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fileIdS EXPECTED TYPE: String", null, null);
		}
		this.fileIdS = fileIdS;
		this.keyModified.set("File_Id__s", 1);

	}

	/**
	 * The method to get the delete
	 * @returns {String} A String representing the delete1
	 */
	getDelete()	{
		return this.delete1;

	}

	/**
	 * The method to set the value to delete
	 * @param {String} delete1 A String representing the delete1
	 */
	setDelete(delete1)	{
		if((delete1 != null) && (!(Object.prototype.toString.call(delete1) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: delete1 EXPECTED TYPE: String", null, null);
		}
		this.delete1 = delete1;
		this.keyModified.set("_delete", 1);

	}

	/**
	 * The method to get the createdTimeS
	 * @returns {Date} An instance of Date
	 */
	getCreatedTimeS()	{
		return this.createdTimeS;

	}

	/**
	 * The method to set the value to createdTimeS
	 * @param {Date} createdTimeS An instance of Date
	 */
	setCreatedTimeS(createdTimeS)	{
		if((createdTimeS != null) && (!(createdTimeS instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdTimeS EXPECTED TYPE: Date", null, null);
		}
		this.createdTimeS = createdTimeS;
		this.keyModified.set("Created_Time__s", 1);

	}

	/**
	 * The method to get the modifiedTimeS
	 * @returns {Date} An instance of Date
	 */
	getModifiedTimeS()	{
		return this.modifiedTimeS;

	}

	/**
	 * The method to set the value to modifiedTimeS
	 * @param {Date} modifiedTimeS An instance of Date
	 */
	setModifiedTimeS(modifiedTimeS)	{
		if((modifiedTimeS != null) && (!(modifiedTimeS instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modifiedTimeS EXPECTED TYPE: Date", null, null);
		}
		this.modifiedTimeS = modifiedTimeS;
		this.keyModified.set("Modified_Time__s", 1);

	}

	/**
	 * The method to get the createdByS
	 * @returns {MinifiedUser} An instance of MinifiedUser
	 */
	getCreatedByS()	{
		return this.createdByS;

	}

	/**
	 * The method to set the value to createdByS
	 * @param {MinifiedUser} createdByS An instance of MinifiedUser
	 */
	async setCreatedByS(createdByS)	{
		const MinifiedUser = (await (import("../users/minified_user.js"))).MasterModel;
		if((createdByS != null) && (!(createdByS instanceof MinifiedUser)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdByS EXPECTED TYPE: MinifiedUser", null, null);
		}
		this.createdByS = createdByS;
		this.keyModified.set("Created_By__s", 1);

	}

	/**
	 * The method to get the ownerS
	 * @returns {MinifiedUser} An instance of MinifiedUser
	 */
	getOwnerS()	{
		return this.ownerS;

	}

	/**
	 * The method to set the value to ownerS
	 * @param {MinifiedUser} ownerS An instance of MinifiedUser
	 */
	async setOwnerS(ownerS)	{
		const MinifiedUser = (await (import("../users/minified_user.js"))).MasterModel;
		if((ownerS != null) && (!(ownerS instanceof MinifiedUser)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: ownerS EXPECTED TYPE: MinifiedUser", null, null);
		}
		this.ownerS = ownerS;
		this.keyModified.set("Owner__s", 1);

	}

	/**
	 * The method to get the modifiedByS
	 * @returns {MinifiedUser} An instance of MinifiedUser
	 */
	getModifiedByS()	{
		return this.modifiedByS;

	}

	/**
	 * The method to set the value to modifiedByS
	 * @param {MinifiedUser} modifiedByS An instance of MinifiedUser
	 */
	async setModifiedByS(modifiedByS)	{
		const MinifiedUser = (await (import("../users/minified_user.js"))).MasterModel;
		if((modifiedByS != null) && (!(modifiedByS instanceof MinifiedUser)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modifiedByS EXPECTED TYPE: MinifiedUser", null, null);
		}
		this.modifiedByS = modifiedByS;
		this.keyModified.set("Modified_By__s", 1);

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
	ImageUpload as MasterModel,
	ImageUpload as ImageUpload
}
