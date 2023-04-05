var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import UIComponent from "sap/ui/core/UIComponent";
/**
 * @namespace TestApplication
 */
export default class Component extends UIComponent {
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            sap.ui.getCore().setModel(this.getModel("i18n"), "i18n");
            UIComponent.prototype.init.apply(this);
            this.getRouter().initialize();
        });
    }
}
Component.metadata = {
    manifest: "json"
};
