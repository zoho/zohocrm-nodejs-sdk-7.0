import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Fields{

	layout;
	help;
	field;
	module;
	secretKey;
	recaptchaLabel;
	hidden;
	siteKey;
	advanced;
	apiName;
	fieldLabel;
	theme;
	id;
	required;
	fieldName;
	dateFormat;
	keyModified = new Map();
	/**
	 * The method to get the layout
	 * @returns {Layout} An instance of Layout
	 */
	getLayout()	{
		return this.layout;

	}

	/**
	 * The method to set the value to layout
	 * @param {Layout} layout An instance of Layout
	 */
	async setLayout(layout)	{
		const Layout = (await (import("./layout.js"))).MasterModel;
		if((layout != null) && (!(layout instanceof Layout)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: layout EXPECTED TYPE: Layout", null, null);
		}
		this.layout = layout;
		this.keyModified.set("layout", 1);

	}

	/**
	 * The method to get the help
	 * @returns {String} A String representing the help
	 */
	getHelp()	{
		return this.help;

	}

	/**
	 * The method to set the value to help
	 * @param {String} help A String representing the help
	 */
	setHelp(help)	{
		if((help != null) && (!(Object.prototype.toString.call(help) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: help EXPECTED TYPE: String", null, null);
		}
		this.help = help;
		this.keyModified.set("help", 1);

	}

	/**
	 * The method to get the field
	 * @returns {Fields} An instance of Fields
	 */
	getField()	{
		return this.field;

	}

	/**
	 * The method to set the value to field
	 * @param {Fields} field An instance of Fields
	 */
	setField(field)	{
		if((field != null) && (!(field instanceof Fields)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: field EXPECTED TYPE: Fields", null, null);
		}
		this.field = field;
		this.keyModified.set("field", 1);

	}

	/**
	 * The method to get the module
	 * @returns {Module} An instance of Module
	 */
	getModule()	{
		return this.module;

	}

	/**
	 * The method to set the value to module
	 * @param {Module} module An instance of Module
	 */
	async setModule(module)	{
		const Module = (await (import("./module.js"))).MasterModel;
		if((module != null) && (!(module instanceof Module)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: Module", null, null);
		}
		this.module = module;
		this.keyModified.set("module", 1);

	}

	/**
	 * The method to get the secretKey
	 * @returns {String} A String representing the secretKey
	 */
	getSecretKey()	{
		return this.secretKey;

	}

	/**
	 * The method to set the value to secretKey
	 * @param {String} secretKey A String representing the secretKey
	 */
	setSecretKey(secretKey)	{
		if((secretKey != null) && (!(Object.prototype.toString.call(secretKey) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: secretKey EXPECTED TYPE: String", null, null);
		}
		this.secretKey = secretKey;
		this.keyModified.set("secret_key", 1);

	}

	/**
	 * The method to get the recaptchaLabel
	 * @returns {String} A String representing the recaptchaLabel
	 */
	getRecaptchaLabel()	{
		return this.recaptchaLabel;

	}

	/**
	 * The method to set the value to recaptchaLabel
	 * @param {String} recaptchaLabel A String representing the recaptchaLabel
	 */
	setRecaptchaLabel(recaptchaLabel)	{
		if((recaptchaLabel != null) && (!(Object.prototype.toString.call(recaptchaLabel) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: recaptchaLabel EXPECTED TYPE: String", null, null);
		}
		this.recaptchaLabel = recaptchaLabel;
		this.keyModified.set("recaptcha_label", 1);

	}

	/**
	 * The method to get the hidden
	 * @returns {Boolean} A Boolean representing the hidden
	 */
	getHidden()	{
		return this.hidden;

	}

	/**
	 * The method to set the value to hidden
	 * @param {Boolean} hidden A Boolean representing the hidden
	 */
	setHidden(hidden)	{
		if((hidden != null) && (!(Object.prototype.toString.call(hidden) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: hidden EXPECTED TYPE: Boolean", null, null);
		}
		this.hidden = hidden;
		this.keyModified.set("hidden", 1);

	}

	/**
	 * The method to get the siteKey
	 * @returns {String} A String representing the siteKey
	 */
	getSiteKey()	{
		return this.siteKey;

	}

	/**
	 * The method to set the value to siteKey
	 * @param {String} siteKey A String representing the siteKey
	 */
	setSiteKey(siteKey)	{
		if((siteKey != null) && (!(Object.prototype.toString.call(siteKey) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: siteKey EXPECTED TYPE: String", null, null);
		}
		this.siteKey = siteKey;
		this.keyModified.set("site_key", 1);

	}

	/**
	 * The method to get the advanced
	 * @returns {Boolean} A Boolean representing the advanced
	 */
	getAdvanced()	{
		return this.advanced;

	}

	/**
	 * The method to set the value to advanced
	 * @param {Boolean} advanced A Boolean representing the advanced
	 */
	setAdvanced(advanced)	{
		if((advanced != null) && (!(Object.prototype.toString.call(advanced) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: advanced EXPECTED TYPE: Boolean", null, null);
		}
		this.advanced = advanced;
		this.keyModified.set("advanced", 1);

	}

	/**
	 * The method to get the apiName
	 * @returns {String} A String representing the apiName
	 */
	getAPIName()	{
		return this.apiName;

	}

	/**
	 * The method to set the value to apiName
	 * @param {String} apiName A String representing the apiName
	 */
	setAPIName(apiName)	{
		if((apiName != null) && (!(Object.prototype.toString.call(apiName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: apiName EXPECTED TYPE: String", null, null);
		}
		this.apiName = apiName;
		this.keyModified.set("api_name", 1);

	}

	/**
	 * The method to get the fieldLabel
	 * @returns {String} A String representing the fieldLabel
	 */
	getFieldLabel()	{
		return this.fieldLabel;

	}

	/**
	 * The method to set the value to fieldLabel
	 * @param {String} fieldLabel A String representing the fieldLabel
	 */
	setFieldLabel(fieldLabel)	{
		if((fieldLabel != null) && (!(Object.prototype.toString.call(fieldLabel) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fieldLabel EXPECTED TYPE: String", null, null);
		}
		this.fieldLabel = fieldLabel;
		this.keyModified.set("field_label", 1);

	}

	/**
	 * The method to get the theme
	 * @returns {String} A String representing the theme
	 */
	getTheme()	{
		return this.theme;

	}

	/**
	 * The method to set the value to theme
	 * @param {String} theme A String representing the theme
	 */
	setTheme(theme)	{
		if((theme != null) && (!(Object.prototype.toString.call(theme) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: theme EXPECTED TYPE: String", null, null);
		}
		this.theme = theme;
		this.keyModified.set("theme", 1);

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
	 * The method to get the required
	 * @returns {Boolean} A Boolean representing the required
	 */
	getRequired()	{
		return this.required;

	}

	/**
	 * The method to set the value to required
	 * @param {Boolean} required A Boolean representing the required
	 */
	setRequired(required)	{
		if((required != null) && (!(Object.prototype.toString.call(required) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: required EXPECTED TYPE: Boolean", null, null);
		}
		this.required = required;
		this.keyModified.set("required", 1);

	}

	/**
	 * The method to get the fieldName
	 * @returns {String} A String representing the fieldName
	 */
	getFieldName()	{
		return this.fieldName;

	}

	/**
	 * The method to set the value to fieldName
	 * @param {String} fieldName A String representing the fieldName
	 */
	setFieldName(fieldName)	{
		if((fieldName != null) && (!(Object.prototype.toString.call(fieldName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fieldName EXPECTED TYPE: String", null, null);
		}
		this.fieldName = fieldName;
		this.keyModified.set("field_name", 1);

	}

	/**
	 * The method to get the dateFormat
	 * @returns {String} A String representing the dateFormat
	 */
	getDateFormat()	{
		return this.dateFormat;

	}

	/**
	 * The method to set the value to dateFormat
	 * @param {String} dateFormat A String representing the dateFormat
	 */
	setDateFormat(dateFormat)	{
		if((dateFormat != null) && (!(Object.prototype.toString.call(dateFormat) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: dateFormat EXPECTED TYPE: String", null, null);
		}
		this.dateFormat = dateFormat;
		this.keyModified.set("date_format", 1);

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
	Fields as MasterModel,
	Fields as Fields
}
