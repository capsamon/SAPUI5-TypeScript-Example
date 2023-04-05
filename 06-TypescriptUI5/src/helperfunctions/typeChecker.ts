import Dialog from "sap/m/Dialog";
import ManagedObject from "sap/ui/base/ManagedObject";
import UIComponent from "sap/ui/core/UIComponent";
import ListBinding from "sap/ui/model/ListBinding";
import ResourceModel from "sap/ui/model/resource/ResourceModel";
import Table from "sap/m/Table";
import FilterBar from "sap/ui/comp/filterbar/FilterBar";
import MultiInput from "sap/m/MultiInput";
import MultiComboBox from "sap/m/MultiComboBox";
import Input from "sap/m/Input";
import ResourceBundle from "sap/base/i18n/ResourceBundle";
import ValueHelpDialog from "sap/ui/comp/valuehelpdialog/ValueHelpDialog";
import JSONModel from "sap/ui/model/json/JSONModel";
import ODataModel from "sap/ui/model/odata/v2/ODataModel";
import TreeTable from "sap/ui/table/TreeTable";
import Select from "sap/m/Select";
import Control from "sap/ui/core/Control";
import UI5Element from "sap/ui/core/Element";
import EventProvider from "sap/ui/base/EventProvider";
import Link from "sap/m/Link";
import Button from "sap/m/Button";
import Switch from "sap/m/Switch";
import ObjectAttribute from "sap/m/ObjectAttribute";

/**
 * @namespace TestApplication.helperfunctions
 */
export default {
    isValidUIComponent(component: any): component is UIComponent {
        return !!component.getRouter;
    },

    isValidManagedObject(control: any): control is ManagedObject {
        return !!control.getMetadata;
    },

    isValidResourceModel(model: any): model is ResourceModel {
        return !!model.getResourceBundle
    },

    isValidResourceBundle(bundle: any): bundle is ResourceBundle {
        return !!bundle.getText
    },

    isValidListBinding(binding: any): binding is ListBinding {
        return !!binding.sort && !!binding.filter;
    },

    isValidTable(control: Control | UI5Element | EventProvider | ManagedObject): control is Table {
        return control.getMetadata().getName() === "sap.m.Table";
    },

    isValidUITable(control: Control | UI5Element | EventProvider | ManagedObject): control is TreeTable {
        return control.getMetadata().getName() === "sap.ui.table.TreeTable";
    },

    isValidFilterBar(control: Control | UI5Element | EventProvider | ManagedObject): control is FilterBar {
        return control.getMetadata().getName() === "sap.ui.comp.filterbar.FilterBar";
    },

    isValidMultiInput(control: Control | UI5Element | EventProvider | ManagedObject): control is MultiInput {
        return control.getMetadata().getName() === "sap.m.MultiInput";
    },

    isValidSwitch(control: Control | UI5Element | EventProvider | ManagedObject): control is Switch {
        return control.getMetadata().getName() === "sap.m.Switch";
    },

    isValidMultiComboBox(control: Control | UI5Element | EventProvider | ManagedObject): control is MultiComboBox {
        return control.getMetadata().getName() === "sap.m.MultiComboBox";
    },

    isValidObjectAttribute(control: Control | UI5Element | EventProvider | ManagedObject): control is ObjectAttribute {
        return control.getMetadata().getName() === "sap.m.ObjectAttribute";
    },

    isValidInput(control: Control | UI5Element | EventProvider | ManagedObject): control is Input {
        return control.getMetadata().getName() === "sap.m.Input";
    },

    isValidLink(control: Control | UI5Element | EventProvider | ManagedObject): control is Link {
        return control.getMetadata().getName() === "sap.m.Link";
    },

    isValidSelect(control: Control | UI5Element | EventProvider | ManagedObject): control is Select {
        return control.getMetadata().getName() === "sap.m.Select";
    },

    isValidDialog(control: Control | UI5Element | EventProvider | ManagedObject): control is Dialog {
        return control.getMetadata().getName() === "sap.m.Dialog";
    },
    
    isValidButton(control: Control | UI5Element | EventProvider | ManagedObject): control is Button {
        return control.getMetadata().getName() === "sap.m.Button";
    },
    
    isValidValueHelpDialog(control: Control | UI5Element | EventProvider | ManagedObject): control is ValueHelpDialog {
        return control.getMetadata().getName() === "sap.m.SelectDialog";
    },

    isValidJSONModel(model: any): model is JSONModel {
        return !!model.setData && !!model.getData;
    },

    isValidODataModel(control: any): control is ODataModel {
        return !!control.createEntry && !!control.metadataLoaded;
    }
}