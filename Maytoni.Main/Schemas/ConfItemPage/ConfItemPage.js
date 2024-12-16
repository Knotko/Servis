define("ConfItemPage", [], function() {
	return {
		entitySchemaName: "ConfItem",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "merge",
				"name": "Category",
				"values": {
					"enabled": true
				}
			},
			{
				"operation": "move",
				"name": "Category",
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "merge",
				"name": "Type",
				"values": {
					"enabled": true
				}
			},
			{
				"operation": "merge",
				"name": "InventoryNumber",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 3
					}
				}
			},
			{
				"operation": "move",
				"name": "InventoryNumber",
				"parentName": "Header",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "STRING35fc6abb-6819-4380-b7ff-c095a8ca97f4",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 2,
						"column": 0,
						"row": 4,
						"layoutName": "Header"
					},
					"bindTo": "MtnNote",
					"enabled": true,
					"contentType": 0
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "STRINGcab5945f-4fd8-4c3f-9de3-ca282f69784f",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "Header"
					},
					"bindTo": "MtnAdditionally",
					"enabled": true,
					"contentType": 0
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"order": 0
				}
			},
			{
				"operation": "insert",
				"name": "LOOKUPb8deba4b-26c4-4d03-860f-4e1bd334664a",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ActualStatusGroup_GridLayout"
					},
					"bindTo": "MtnBindingObject",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ActualStatusGroup_GridLayout",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "merge",
				"name": "RelationshipTab",
				"values": {
					"order": 1
				}
			},
			{
				"operation": "merge",
				"name": "HistoryTab",
				"values": {
					"order": 2
				}
			},
			{
				"operation": "merge",
				"name": "NotesFilesTab",
				"values": {
					"order": 3
				}
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 4
				}
			},
			{
				"operation": "remove",
				"name": "Model"
			},
			{
				"operation": "move",
				"name": "Name",
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "move",
				"name": "WarrantyUntil",
				"parentName": "ActualStatusGroup_GridLayout",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "move",
				"name": "ParentConfItem",
				"parentName": "ActualStatusGroup_GridLayout",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "move",
				"name": "Owner",
				"parentName": "ActualStatusGroup_GridLayout",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_DIFF*/
	};
});
