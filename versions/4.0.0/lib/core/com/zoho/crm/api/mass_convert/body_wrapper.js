import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class BodyWrapper{

	deals;
	moveAttachmentsTo;
	assignTo;
	carryOverTags;
	relatedModules;
	portalUserType;
	ids;
	applyAssignmentThreshold;
	keyModified = new Map();
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
	 * The method to get the assignTo
	 * @returns {AssignTo} An instance of AssignTo
	 */
	getAssignTo()	{
		return this.assignTo;

	}

	/**
	 * The method to set the value to assignTo
	 * @param {AssignTo} assignTo An instance of AssignTo
	 */
	async setAssignTo(assignTo)	{
		const AssignTo = (await (import("./assign_to.js"))).MasterModel;
		if((assignTo != null) && (!(assignTo instanceof AssignTo)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: assignTo EXPECTED TYPE: AssignTo", null, null);
		}
		this.assignTo = assignTo;
		this.keyModified.set("assign_to", 1);

	}

	/**
	 * The method to get the carryOverTags
	 * @returns {Array} An Array representing the carryOverTags
	 */
	getCarryOverTags()	{
		return this.carryOverTags;

	}

	/**
	 * The method to set the value to carryOverTags
	 * @param {Array} carryOverTags An Array representing the carryOverTags
	 */
	setCarryOverTags(carryOverTags)	{
		if((carryOverTags != null) && (!(Object.prototype.toString.call(carryOverTags) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: carryOverTags EXPECTED TYPE: Array", null, null);
		}
		this.carryOverTags = carryOverTags;
		this.keyModified.set("carry_over_tags", 1);

	}

	/**
	 * The method to get the relatedModules
	 * @returns {Array} An Array representing the relatedModules
	 */
	getRelatedModules()	{
		return this.relatedModules;

	}

	/**
	 * The method to set the value to relatedModules
	 * @param {Array} relatedModules An Array representing the relatedModules
	 */
	setRelatedModules(relatedModules)	{
		if((relatedModules != null) && (!(Object.prototype.toString.call(relatedModules) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: relatedModules EXPECTED TYPE: Array", null, null);
		}
		this.relatedModules = relatedModules;
		this.keyModified.set("related_modules", 1);

	}

	/**
	 * The method to get the portalUserType
	 * @returns {PortalUserType} An instance of PortalUserType
	 */
	getPortalUserType()	{
		return this.portalUserType;

	}

	/**
	 * The method to set the value to portalUserType
	 * @param {PortalUserType} portalUserType An instance of PortalUserType
	 */
	async setPortalUserType(portalUserType)	{
		const PortalUserType = (await (import("./portal_user_type.js"))).MasterModel;
		if((portalUserType != null) && (!(portalUserType instanceof PortalUserType)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: portalUserType EXPECTED TYPE: PortalUserType", null, null);
		}
		this.portalUserType = portalUserType;
		this.keyModified.set("portal_user_type", 1);

	}

	/**
	 * The method to get the ids
	 * @returns {Array} An Array representing the ids
	 */
	getIds()	{
		return this.ids;

	}

	/**
	 * The method to set the value to ids
	 * @param {Array} ids An Array representing the ids
	 */
	setIds(ids)	{
		if((ids != null) && (!(Object.prototype.toString.call(ids) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: ids EXPECTED TYPE: Array", null, null);
		}
		this.ids = ids;
		this.keyModified.set("ids", 1);

	}

	/**
	 * The method to get the applyAssignmentThreshold
	 * @returns {Boolean} A Boolean representing the applyAssignmentThreshold
	 */
	getApplyAssignmentThreshold()	{
		return this.applyAssignmentThreshold;

	}

	/**
	 * The method to set the value to applyAssignmentThreshold
	 * @param {Boolean} applyAssignmentThreshold A Boolean representing the applyAssignmentThreshold
	 */
	setApplyAssignmentThreshold(applyAssignmentThreshold)	{
		if((applyAssignmentThreshold != null) && (!(Object.prototype.toString.call(applyAssignmentThreshold) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: applyAssignmentThreshold EXPECTED TYPE: Boolean", null, null);
		}
		this.applyAssignmentThreshold = applyAssignmentThreshold;
		this.keyModified.set("apply_assignment_threshold", 1);

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
	BodyWrapper as MasterModel,
	BodyWrapper as BodyWrapper
}
