export interface ReuseOverviewItem {
    TopPlant : string;
    ChildPlant : string;
    ChildMaterial : string;
    ReUseAdvice : string;
    TopMaterial : string;
    ReUseScenario : string;
    Bucket : string;
    EXTENSION : string;
    ProcurementType : string;
    DetectionCode : string;
    XPlant : string;
    MaterialType : string;
    Clean12NCXPlant : string;
    ActivityCodeMaterial : string;
    TopEquipment : string;
    ChildEquipment : string;
    EquipmentStatusNew : string;
    UrgencyIndicator : string;
    CSCMCriticality : string;
    FieldUsage : number
    DemandQuantity : number;  
    FactoryUsage : number;
    Value : number;
    NetServiceDemand : number;
    SubComponentDemand : number;
    BOMLevel : number ;
    HarvestThreshold : string; 
    HLBDemand : string;
    Destination12NCDemand: string;   
}

export interface ReuseBOMStructureItem {
    TopMaterial : string;
    TopPlant : string;
    ParentMaterial : string;
    ParentPlant : string;
    ChildMaterial : string;
    ChildPlant : string;
    Quantity: number;
    BOMLevel : number;
    Path : string;
    DrillState: string;
    RowID: number;  
    ParentRowID: number;
    subItems?: Array<ReuseBOMStructureItem>
}

export interface ReuseBOMStructureItemAltered {
    Material : string;
    Plant : string;
    Quantity: number;
    BOMLevel : number;
    Path : string;
    DrillState: string;
    subItems?: Array<ReuseBOMStructureItemAltered>
}

export interface ReuseEquipmentStructureItemAltered {
    NodeID : number;
    HierarchyLevel: number;
    ParentNodeID : number;
    DrillState : string;
    Equipment : string;
    Path : string;
    // MaterialNotification : string;
    // StandardCostPrice  : string;
    // CrossPlantStatus  : string;
    CSCMCriticality : string;
    UrgencyIndicator : string;
    MRPController : string;
    DetectionCode : string;
    StorageLocation : string;
        Bucket : string;
        ProcurementType : string;
        XPlant : String ;
        InternalExternalSupplier : String;
        EquipmentUserStatus : String;
        AvailableForReuse : string;
        Repairable : string;
        StockOwner : string;
        StandardCostPriceIndicator : string;
        DMRPMovements : string;
        SCP : string; //decimal(11,2);
        Value : string ; //Decimal(11,2);
        // ValueComponents : Decimal(13,1);
        DirectFactoryDemand : string ; //Decimal(13,1);
        DirectServiceDemand : string ; //Decimal(13,1);
        AggregatedFactoryDemand : string ; //Decimal(13,1);
        AggregatedServiceDemand : string ; //Decimal(13,1);
        StockQuantity : string;
        StockValue : string ; //Decimal(13,1);
        ReUseScenario : String;
        // ReUseScenarioRank : Integer;
        MRPControllerName : string;
        Upgradibility : String;
        HighestLevelBuy : String;
        Destination12NC : String;
        SCPCorrected : string ; //Decimal(15,2); 
        HarvestThreshold : string;
        HLBDemand : string;
        Destination12NCDemand: string;   
    subItems?: Array<ReuseEquipmentStructureItemAltered>;
}
export interface ReuseEquipmentStructureItem {
    NodeID : number;
    HierarchyLevel: number;
    ParentNodeID : number;
    DrillState : string;
    EquipmentTop : string;
    EquipmentChild : string;
    Path : string;
    // MaterialNotification : string;
    // StandardCostPrice  : string;
    // CrossPlantStatus  : string;
    CSCMCriticality : string;
    UrgencyIndicator : string;
    MRPController : string;
    DetectionCode : string;
    StorageLocation : string;
    
    // DetectionCode : string;
        // StorageLocation : string;
        Bucket : string;
        ProcurementType : string;
        XPlant : String ;
        // MaterialType : string;
        InternalExternalSupplier : String;
        EquipmentUserStatus : String;
        AvailableForReuse : string;
        Repairable : string;
        StockOwner : string;
        StandardCostPriceIndicator : string;
        DMRPMovements : string;
        SCP : string; //decimal(11,2);
        Value : string ; //Decimal(11,2);
        // ValueComponents : Decimal(13,1);
        DirectFactoryDemand : string ; //Decimal(13,1);
        DirectServiceDemand : string ; //Decimal(13,1);
        AggregatedFactoryDemand : string ; //Decimal(13,1);
        AggregatedServiceDemand : string ; //Decimal(13,1);
        StockQuantity : string;
        StockValue : string ; //Decimal(13,1);
        ReUseScenario : String;
        // ReUseScenarioRank : Integer;
        MRPControllerName : string;
        Upgradibility : String;
        HighestLevelBuy : String;
        Destination12NC : String;
        SCPCorrected : string ; //Decimal(15,2);
        // Timestamp :  Timestamp;
        HarvestThreshold : string;
        HLBDemand : string;
        Destination12NCDemand: string;


    subItems?: Array<ReuseEquipmentStructureItem>;
}

export interface HLBList { 
    HighestBuy : string;
}