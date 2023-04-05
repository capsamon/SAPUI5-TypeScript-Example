import Controller from "sap/ui/core/mvc/Controller";
import typeChecker from "TestApplication/helperfunctions/typeChecker";
import ErrorHandler from "TestApplication/util/ErrorHandler";
/**
 * @namespace TestApplication.controller
 */
export default class BaseController extends Controller {
    getRouter() {
        const ownerComponent = this.getOwnerComponent();
        if (!typeChecker.isValidUIComponent(ownerComponent)) {
            throw new Error(ErrorHandler.fetchTranslatableText("NoValidUIComponent"));
        }
        return ownerComponent.getRouter();
    }
    getModel(sName) {
        return this.getComponent().getModel(sName);
    }
    geti18nResourceBundle() {
        const i18nModel = this.getModel("i18n");
        if (!typeChecker.isValidResourceModel(i18nModel)) {
            throw new Error(ErrorHandler.fetchTranslatableText("NoValidResourceModel"));
        }
        return i18nModel.getResourceBundle();
    }
    getComponent() {
        return this.getOwnerComponent();
    }
    setModel(oModel, sName) {
        this.getView().setModel(oModel, sName);
    }
    onCloseDialog(oEvent) {
        const sourceControl = oEvent.getSource();
        if (!typeChecker.isValidManagedObject(sourceControl)) {
            throw new Error(ErrorHandler.fetchTranslatableText("NoValidManagedObject"));
        }
        const dialogToClose = sourceControl.getParent();
        if (!typeChecker.isValidDialog(dialogToClose)) {
            throw new Error(ErrorHandler.fetchTranslatableText("NoValidDialogType"));
        }
        dialogToClose.close();
    }
}
