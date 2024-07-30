import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class RescheduleHistory{

	currencySymbol;
	rescheduledTo;
	reviewProcess;
	rescheduleReason;
	sharingPermission;
	name;
	modifiedBy;
	review;
	rescheduledBy;
	state;
	canvasId;
	processFlow;
	id;
	rescheduledTime;
	ziaVisions;
	approved;
	modifiedTime;
	approval;
	createdTime;
	rescheduledFrom;
	appointmentName;
	editable;
	orchestration;
	inMerge;
	createdBy;
	approvalState;
	rescheduleNote;
	keyModified = new Map();
	/**
	 * The method to get the currencySymbol
	 * @returns {String} A String representing the currencySymbol
	 */
	getCurrencySymbol()	{
		return this.currencySymbol;

	}

	/**
	 * The method to set the value to currencySymbol
	 * @param {String} currencySymbol A String representing the currencySymbol
	 */
	setCurrencySymbol(currencySymbol)	{
		if((currencySymbol != null) && (!(Object.prototype.toString.call(currencySymbol) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: currencySymbol EXPECTED TYPE: String", null, null);
		}
		this.currencySymbol = currencySymbol;
		this.keyModified.set("$currency_symbol", 1);

	}

	/**
	 * The method to get the rescheduledTo
	 * @returns {Date} An instance of Date
	 */
	getRescheduledTo()	{
		return this.rescheduledTo;

	}

	/**
	 * The method to set the value to rescheduledTo
	 * @param {Date} rescheduledTo An instance of Date
	 */
	setRescheduledTo(rescheduledTo)	{
		if((rescheduledTo != null) && (!(rescheduledTo instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: rescheduledTo EXPECTED TYPE: Date", null, null);
		}
		this.rescheduledTo = rescheduledTo;
		this.keyModified.set("Rescheduled_To", 1);

	}

	/**
	 * The method to get the reviewProcess
	 * @returns {Boolean} A Boolean representing the reviewProcess
	 */
	getReviewProcess()	{
		return this.reviewProcess;

	}

	/**
	 * The method to set the value to reviewProcess
	 * @param {Boolean} reviewProcess A Boolean representing the reviewProcess
	 */
	setReviewProcess(reviewProcess)	{
		if((reviewProcess != null) && (!(Object.prototype.toString.call(reviewProcess) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: reviewProcess EXPECTED TYPE: Boolean", null, null);
		}
		this.reviewProcess = reviewProcess;
		this.keyModified.set("$review_process", 1);

	}

	/**
	 * The method to get the rescheduleReason
	 * @returns {String} A String representing the rescheduleReason
	 */
	getRescheduleReason()	{
		return this.rescheduleReason;

	}

	/**
	 * The method to set the value to rescheduleReason
	 * @param {String} rescheduleReason A String representing the rescheduleReason
	 */
	setRescheduleReason(rescheduleReason)	{
		if((rescheduleReason != null) && (!(Object.prototype.toString.call(rescheduleReason) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: rescheduleReason EXPECTED TYPE: String", null, null);
		}
		this.rescheduleReason = rescheduleReason;
		this.keyModified.set("Reschedule_Reason", 1);

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
		this.keyModified.set("Name", 1);

	}

	/**
	 * The method to get the modifiedBy
	 * @returns {User} An instance of User
	 */
	getModifiedBy()	{
		return this.modifiedBy;

	}

	/**
	 * The method to set the value to modifiedBy
	 * @param {User} modifiedBy An instance of User
	 */
	async setModifiedBy(modifiedBy)	{
		const User = (await (import("./user.js"))).MasterModel;
		if((modifiedBy != null) && (!(modifiedBy instanceof User)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modifiedBy EXPECTED TYPE: User", null, null);
		}
		this.modifiedBy = modifiedBy;
		this.keyModified.set("Modified_By", 1);

	}

	/**
	 * The method to get the review
	 * @returns {Boolean} A Boolean representing the review
	 */
	getReview()	{
		return this.review;

	}

	/**
	 * The method to set the value to review
	 * @param {Boolean} review A Boolean representing the review
	 */
	setReview(review)	{
		if((review != null) && (!(Object.prototype.toString.call(review) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: review EXPECTED TYPE: Boolean", null, null);
		}
		this.review = review;
		this.keyModified.set("$review", 1);

	}

	/**
	 * The method to get the rescheduledBy
	 * @returns {User} An instance of User
	 */
	getRescheduledBy()	{
		return this.rescheduledBy;

	}

	/**
	 * The method to set the value to rescheduledBy
	 * @param {User} rescheduledBy An instance of User
	 */
	async setRescheduledBy(rescheduledBy)	{
		const User = (await (import("./user.js"))).MasterModel;
		if((rescheduledBy != null) && (!(rescheduledBy instanceof User)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: rescheduledBy EXPECTED TYPE: User", null, null);
		}
		this.rescheduledBy = rescheduledBy;
		this.keyModified.set("Rescheduled_By", 1);

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
	 * The method to get the canvasId
	 * @returns {String} A String representing the canvasId
	 */
	getCanvasId()	{
		return this.canvasId;

	}

	/**
	 * The method to set the value to canvasId
	 * @param {String} canvasId A String representing the canvasId
	 */
	setCanvasId(canvasId)	{
		if((canvasId != null) && (!(Object.prototype.toString.call(canvasId) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: canvasId EXPECTED TYPE: String", null, null);
		}
		this.canvasId = canvasId;
		this.keyModified.set("$canvas_id", 1);

	}

	/**
	 * The method to get the processFlow
	 * @returns {Boolean} A Boolean representing the processFlow
	 */
	getProcessFlow()	{
		return this.processFlow;

	}

	/**
	 * The method to set the value to processFlow
	 * @param {Boolean} processFlow A Boolean representing the processFlow
	 */
	setProcessFlow(processFlow)	{
		if((processFlow != null) && (!(Object.prototype.toString.call(processFlow) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: processFlow EXPECTED TYPE: Boolean", null, null);
		}
		this.processFlow = processFlow;
		this.keyModified.set("$process_flow", 1);

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
	 * The method to get the rescheduledTime
	 * @returns {Date} An instance of Date
	 */
	getRescheduledTime()	{
		return this.rescheduledTime;

	}

	/**
	 * The method to set the value to rescheduledTime
	 * @param {Date} rescheduledTime An instance of Date
	 */
	setRescheduledTime(rescheduledTime)	{
		if((rescheduledTime != null) && (!(rescheduledTime instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: rescheduledTime EXPECTED TYPE: Date", null, null);
		}
		this.rescheduledTime = rescheduledTime;
		this.keyModified.set("Rescheduled_Time", 1);

	}

	/**
	 * The method to get the ziaVisions
	 * @returns {Boolean} A Boolean representing the ziaVisions
	 */
	getZiaVisions()	{
		return this.ziaVisions;

	}

	/**
	 * The method to set the value to ziaVisions
	 * @param {Boolean} ziaVisions A Boolean representing the ziaVisions
	 */
	setZiaVisions(ziaVisions)	{
		if((ziaVisions != null) && (!(Object.prototype.toString.call(ziaVisions) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: ziaVisions EXPECTED TYPE: Boolean", null, null);
		}
		this.ziaVisions = ziaVisions;
		this.keyModified.set("$zia_visions", 1);

	}

	/**
	 * The method to get the approved
	 * @returns {Boolean} A Boolean representing the approved
	 */
	getApproved()	{
		return this.approved;

	}

	/**
	 * The method to set the value to approved
	 * @param {Boolean} approved A Boolean representing the approved
	 */
	setApproved(approved)	{
		if((approved != null) && (!(Object.prototype.toString.call(approved) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: approved EXPECTED TYPE: Boolean", null, null);
		}
		this.approved = approved;
		this.keyModified.set("$approved", 1);

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
		this.keyModified.set("Modified_Time", 1);

	}

	/**
	 * The method to get the approval
	 * @returns {Approval} An instance of Approval
	 */
	getApproval()	{
		return this.approval;

	}

	/**
	 * The method to set the value to approval
	 * @param {Approval} approval An instance of Approval
	 */
	async setApproval(approval)	{
		const Approval = (await (import("./approval.js"))).MasterModel;
		if((approval != null) && (!(approval instanceof Approval)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: approval EXPECTED TYPE: Approval", null, null);
		}
		this.approval = approval;
		this.keyModified.set("$approval", 1);

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
	 * The method to get the rescheduledFrom
	 * @returns {Date} An instance of Date
	 */
	getRescheduledFrom()	{
		return this.rescheduledFrom;

	}

	/**
	 * The method to set the value to rescheduledFrom
	 * @param {Date} rescheduledFrom An instance of Date
	 */
	setRescheduledFrom(rescheduledFrom)	{
		if((rescheduledFrom != null) && (!(rescheduledFrom instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: rescheduledFrom EXPECTED TYPE: Date", null, null);
		}
		this.rescheduledFrom = rescheduledFrom;
		this.keyModified.set("Rescheduled_From", 1);

	}

	/**
	 * The method to get the appointmentName
	 * @returns {AppointmentName} An instance of AppointmentName
	 */
	getAppointmentName()	{
		return this.appointmentName;

	}

	/**
	 * The method to set the value to appointmentName
	 * @param {AppointmentName} appointmentName An instance of AppointmentName
	 */
	async setAppointmentName(appointmentName)	{
		const AppointmentName = (await (import("./appointment_name.js"))).MasterModel;
		if((appointmentName != null) && (!(appointmentName instanceof AppointmentName)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: appointmentName EXPECTED TYPE: AppointmentName", null, null);
		}
		this.appointmentName = appointmentName;
		this.keyModified.set("Appointment_Name", 1);

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
	 * The method to get the orchestration
	 * @returns {Boolean} A Boolean representing the orchestration
	 */
	getOrchestration()	{
		return this.orchestration;

	}

	/**
	 * The method to set the value to orchestration
	 * @param {Boolean} orchestration A Boolean representing the orchestration
	 */
	setOrchestration(orchestration)	{
		if((orchestration != null) && (!(Object.prototype.toString.call(orchestration) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: orchestration EXPECTED TYPE: Boolean", null, null);
		}
		this.orchestration = orchestration;
		this.keyModified.set("$orchestration", 1);

	}

	/**
	 * The method to get the inMerge
	 * @returns {Boolean} A Boolean representing the inMerge
	 */
	getInMerge()	{
		return this.inMerge;

	}

	/**
	 * The method to set the value to inMerge
	 * @param {Boolean} inMerge A Boolean representing the inMerge
	 */
	setInMerge(inMerge)	{
		if((inMerge != null) && (!(Object.prototype.toString.call(inMerge) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: inMerge EXPECTED TYPE: Boolean", null, null);
		}
		this.inMerge = inMerge;
		this.keyModified.set("$in_merge", 1);

	}

	/**
	 * The method to get the createdBy
	 * @returns {User} An instance of User
	 */
	getCreatedBy()	{
		return this.createdBy;

	}

	/**
	 * The method to set the value to createdBy
	 * @param {User} createdBy An instance of User
	 */
	async setCreatedBy(createdBy)	{
		const User = (await (import("./user.js"))).MasterModel;
		if((createdBy != null) && (!(createdBy instanceof User)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdBy EXPECTED TYPE: User", null, null);
		}
		this.createdBy = createdBy;
		this.keyModified.set("Created_By", 1);

	}

	/**
	 * The method to get the approvalState
	 * @returns {String} A String representing the approvalState
	 */
	getApprovalState()	{
		return this.approvalState;

	}

	/**
	 * The method to set the value to approvalState
	 * @param {String} approvalState A String representing the approvalState
	 */
	setApprovalState(approvalState)	{
		if((approvalState != null) && (!(Object.prototype.toString.call(approvalState) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: approvalState EXPECTED TYPE: String", null, null);
		}
		this.approvalState = approvalState;
		this.keyModified.set("$approval_state", 1);

	}

	/**
	 * The method to get the rescheduleNote
	 * @returns {String} A String representing the rescheduleNote
	 */
	getRescheduleNote()	{
		return this.rescheduleNote;

	}

	/**
	 * The method to set the value to rescheduleNote
	 * @param {String} rescheduleNote A String representing the rescheduleNote
	 */
	setRescheduleNote(rescheduleNote)	{
		if((rescheduleNote != null) && (!(Object.prototype.toString.call(rescheduleNote) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: rescheduleNote EXPECTED TYPE: String", null, null);
		}
		this.rescheduleNote = rescheduleNote;
		this.keyModified.set("Reschedule_Note", 1);

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
	RescheduleHistory as MasterModel,
	RescheduleHistory as RescheduleHistory
}
