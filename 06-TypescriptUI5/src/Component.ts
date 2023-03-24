import UIComponent from "sap/ui/core/UIComponent";

/**
 * @namespace Reuse
 */
export default class Component extends UIComponent {    
    public static metadata = {
        manifest: "json"
    };

    public async init(): Promise<void> {
        sap.ui.getCore().setModel(this.getModel("i18n"), "i18n");
        UIComponent.prototype.init.apply(this);
        this.getRouter().initialize(); 
    }
}