/**
 * @namespace TestApplication.helperfunctions
 */
export default {
    isValidUIComponent(component) {
        return !!component.getRouter;
    },
    isValidManagedObject(control) {
        return !!control.getMetadata;
    },
    isValidResourceModel(model) {
        return !!model.getResourceBundle;
    },
    isValidResourceBundle(bundle) {
        return !!bundle.getText;
    },
    isValidListBinding(binding) {
        return !!binding.sort && !!binding.filter;
    },
    isValidTable(control) {
        return control.getMetadata().getName() === "sap.m.Table";
    },
    isValidUITable(control) {
        return control.getMetadata().getName() === "sap.ui.table.TreeTable";
    },
    isValidFilterBar(control) {
        return control.getMetadata().getName() === "sap.ui.comp.filterbar.FilterBar";
    },
    isValidMultiInput(control) {
        return control.getMetadata().getName() === "sap.m.MultiInput";
    },
    isValidSwitch(control) {
        return control.getMetadata().getName() === "sap.m.Switch";
    },
    isValidMultiComboBox(control) {
        return control.getMetadata().getName() === "sap.m.MultiComboBox";
    },
    isValidObjectAttribute(control) {
        return control.getMetadata().getName() === "sap.m.ObjectAttribute";
    },
    isValidInput(control) {
        return control.getMetadata().getName() === "sap.m.Input";
    },
    isValidLink(control) {
        return control.getMetadata().getName() === "sap.m.Link";
    },
    isValidSelect(control) {
        return control.getMetadata().getName() === "sap.m.Select";
    },
    isValidDialog(control) {
        return control.getMetadata().getName() === "sap.m.Dialog";
    },
    isValidButton(control) {
        return control.getMetadata().getName() === "sap.m.Button";
    },
    isValidValueHelpDialog(control) {
        return control.getMetadata().getName() === "sap.m.SelectDialog";
    },
    isValidJSONModel(model) {
        return !!model.setData && !!model.getData;
    },
    isValidODataModel(control) {
        return !!control.createEntry && !!control.metadataLoaded;
    }
};
