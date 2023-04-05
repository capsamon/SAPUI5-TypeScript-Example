import typeChecker from "TestApplication/helperfunctions/typeChecker";
import MessageBox from "sap/m/MessageBox";
/**
 * @namespace Reuse.helperfunctions
 */
export default {
    throwNewError(i18nMessageString, detailedError) {
        MessageBox.error(this.fetchTranslatableText(i18nMessageString), { details: detailedError });
        throw new Error(this.fetchTranslatableText(i18nMessageString));
    },
    fetchTranslatableText(i18nMessageString) {
        const i18nModel = sap.ui.getCore().getModel("i18n");
        if (!typeChecker.isValidResourceModel(i18nModel)) {
            //We cannot add this string to the i18n model cause if this happens, we could not find that model.
            throw new Error("ResourceModel lookup not succeeded.");
        }
        const resourceBundle = i18nModel.getResourceBundle();
        return resourceBundle.getText(i18nMessageString);
    }
};
