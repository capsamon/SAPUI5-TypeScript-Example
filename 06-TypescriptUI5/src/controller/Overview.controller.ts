import BaseController from "TestApplication/controller/BaseController"
import JSONModel from "sap/ui/model/json/JSONModel";

/**
 * @namespace TestApplication.controller
 */
export default class App extends BaseController {
	
	public onInit(): void { 
		this.getView().setModel(new JSONModel({
			busy: true,
			delay: 0,
			actualItems: 0,
			totalItems: 0,
			lastRefreshDate: null
		}), "overview");
	}
}