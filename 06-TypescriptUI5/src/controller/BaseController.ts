import Controller from "sap/ui/core/mvc/Controller";
import Event from "sap/ui/base/Event";
import typeChecker from "TestApplication/helperfunctions/typeChecker";
import Model from "sap/ui/model/Model";
import ResourceBundle from "sap/base/i18n/ResourceBundle";
import Component from "sap/ui/core/Component";
import Router from "sap/ui/core/routing/Router";
import ErrorHandler from "TestApplication/util/ErrorHandler";

/**
 * @namespace TestApplication.controller
 */
 export default class BaseController extends Controller {
	public getRouter() : Router {
		const ownerComponent = this.getOwnerComponent();
		if(!typeChecker.isValidUIComponent(ownerComponent)){
			throw new Error(ErrorHandler.fetchTranslatableText("NoValidUIComponent"));
		}		
		return  ownerComponent.getRouter();
	}

	public getModel(sName?: string): Model {
		return this.getComponent().getModel(sName);
	}

	public geti18nResourceBundle(): ResourceBundle {
		const i18nModel = this.getModel("i18n");
		if(!typeChecker.isValidResourceModel(i18nModel)){
			throw new Error(ErrorHandler.fetchTranslatableText("NoValidResourceModel"));
		}
		return i18nModel.getResourceBundle() as ResourceBundle;
	}

	public getComponent() : Component | undefined{
		return this.getOwnerComponent();
	}

	public setModel(oModel: Model, sName?: string) {
		this.getView().setModel(oModel, sName);
	}

	public onCloseDialog(oEvent: Event) {
		const sourceControl = oEvent.getSource();
		if(!typeChecker.isValidManagedObject(sourceControl)){
			throw new Error(ErrorHandler.fetchTranslatableText("NoValidManagedObject"));
		}

		const dialogToClose = sourceControl.getParent();
		if(!typeChecker.isValidDialog(dialogToClose)){
			throw new Error(ErrorHandler.fetchTranslatableText("NoValidDialogType"));
		}

		dialogToClose.close();
	}
}