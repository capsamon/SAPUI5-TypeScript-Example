import typeChecker from "TestApplication/helperfunctions/typeChecker"
import ResourceBundle from "sap/base/i18n/ResourceBundle";
import MessageBox from "sap/m/MessageBox";

/**
 * @namespace TestApplication.helperfunctions
 */
export default {
    throwNewError(i18nMessageString: string, detailedError: string): never {
        MessageBox.error(this.fetchTranslatableText(i18nMessageString), {details: detailedError})
        throw new Error(this.fetchTranslatableText(i18nMessageString));
    },

    fetchTranslatableText(i18nMessageString: string) : string{
        const i18nModel = sap.ui.getCore().getModel("i18n");
        if(!typeChecker.isValidResourceModel(i18nModel)){
            //We cannot add this string to the i18n model cause if this happens, we could not find that model.
            throw new Error("ResourceModel lookup not succeeded.");
        }
        const resourceBundle = i18nModel.getResourceBundle() as ResourceBundle;
        return resourceBundle.getText(i18nMessageString);
    }
}