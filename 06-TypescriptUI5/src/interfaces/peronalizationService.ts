import Filter from "sap/ui/model/Filter";
import Sorter from "sap/ui/model/Sorter";

export interface personalisationService {
	oData: {
		_persoSchemaVersion: string;
		aColumns: Array<columnDefinition>;
	},
	getPersData(): JQueryPromise<void>;
	setPersData(oBundle: bundleType) : JQueryPromise<void>;
	resetPersData() : JQueryPromise<void>;
}

export interface personalisationServiceUITable {
	oData: {
		_persoSchemaVersion: string;
		aColumns: Array<columnDefinition>;
	},
	getPersData(): JQueryPromise<void>;
	setPersData(oBundle: bundleType) : JQueryPromise<void>;
	delPersData() : JQueryPromise<void>;
}

export interface columnDefinition {
	"text": string,
	"order": number,
	"visible": boolean,
	"id": string | null,
	"group": string | null
}

export interface basicVariantItem {
	_oVariantKey: string, 
	_oVariantName: string
}

export interface returnValueFilters {
	aSorters: Sorter, 
	aFilters: Array<Filter>, 
	oTPC: Array<{group?: string, id: string, order: number, text: string, visible: boolean}>
}

export interface bundleType {
	_persoSchemaVersion: string, 
	aColumns: Array<columnDefinition>
}