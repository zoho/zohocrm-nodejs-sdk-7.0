import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class CustomizeInfo{

	notesDesc;
	showRightPanel;
	bcView;
	unpinRecentItem;
	showHome;
	showDetailView;
	keyModified = new Map();
	/**
	 * The method to get the notesDesc
	 * @returns {Object} An Object representing the notesDesc
	 */
	getNotesDesc()	{
		return this.notesDesc;

	}

	/**
	 * The method to set the value to notesDesc
	 * @param {Object} notesDesc An Object representing the notesDesc
	 */
	setNotesDesc(notesDesc)	{
		this.notesDesc = notesDesc;
		this.keyModified.set("notes_desc", 1);

	}

	/**
	 * The method to get the showRightPanel
	 * @returns {Object} An Object representing the showRightPanel
	 */
	getShowRightPanel()	{
		return this.showRightPanel;

	}

	/**
	 * The method to set the value to showRightPanel
	 * @param {Object} showRightPanel An Object representing the showRightPanel
	 */
	setShowRightPanel(showRightPanel)	{
		this.showRightPanel = showRightPanel;
		this.keyModified.set("show_right_panel", 1);

	}

	/**
	 * The method to get the bcView
	 * @returns {Object} An Object representing the bcView
	 */
	getBcView()	{
		return this.bcView;

	}

	/**
	 * The method to set the value to bcView
	 * @param {Object} bcView An Object representing the bcView
	 */
	setBcView(bcView)	{
		this.bcView = bcView;
		this.keyModified.set("bc_view", 1);

	}

	/**
	 * The method to get the unpinRecentItem
	 * @returns {Object} An Object representing the unpinRecentItem
	 */
	getUnpinRecentItem()	{
		return this.unpinRecentItem;

	}

	/**
	 * The method to set the value to unpinRecentItem
	 * @param {Object} unpinRecentItem An Object representing the unpinRecentItem
	 */
	setUnpinRecentItem(unpinRecentItem)	{
		this.unpinRecentItem = unpinRecentItem;
		this.keyModified.set("unpin_recent_item", 1);

	}

	/**
	 * The method to get the showHome
	 * @returns {Boolean} A Boolean representing the showHome
	 */
	getShowHome()	{
		return this.showHome;

	}

	/**
	 * The method to set the value to showHome
	 * @param {Boolean} showHome A Boolean representing the showHome
	 */
	setShowHome(showHome)	{
		if((showHome != null) && (!(Object.prototype.toString.call(showHome) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: showHome EXPECTED TYPE: Boolean", null, null);
		}
		this.showHome = showHome;
		this.keyModified.set("show_home", 1);

	}

	/**
	 * The method to get the showDetailView
	 * @returns {Boolean} A Boolean representing the showDetailView
	 */
	getShowDetailView()	{
		return this.showDetailView;

	}

	/**
	 * The method to set the value to showDetailView
	 * @param {Boolean} showDetailView A Boolean representing the showDetailView
	 */
	setShowDetailView(showDetailView)	{
		if((showDetailView != null) && (!(Object.prototype.toString.call(showDetailView) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: showDetailView EXPECTED TYPE: Boolean", null, null);
		}
		this.showDetailView = showDetailView;
		this.keyModified.set("show_detail_view", 1);

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
	CustomizeInfo as MasterModel,
	CustomizeInfo as CustomizeInfo
}
