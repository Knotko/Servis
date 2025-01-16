define("ServiceItemPage", [], function() {
	return {
		entitySchemaName: "ServiceItem",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"ServiceItemDetail81bcc8e1": {
				"schemaName": "ServiceItemDetail",
				"entitySchemaName": "ServiceItem",
				"filter": {
					"detailColumn": "MtnParentService",
					"masterColumn": "Id"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "MtnCode9f3d9f42-74b3-4339-bee2-35aa0bc4a89f",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "MtnCode"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "Name",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 13,
						"row": 0
					}
				}
			},
			{
				"operation": "insert",
				"name": "MtnParentService1679cdef-4c27-4b56-a780-994978d17aa8",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "MtnParentService"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "merge",
				"name": "CaseCategory",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 13,
						"row": 1
					},
					"enabled": true
				}
			},
			{
				"operation": "move",
				"name": "CaseCategory",
				"parentName": "Header",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "merge",
				"name": "ReactionTimeValue",
				"values": {
					"layout": {
						"colSpan": 2,
						"rowSpan": 1,
						"column": 9,
						"row": 2
					},
					"enabled": true
				}
			},
			{
				"operation": "merge",
				"name": "SolutionTimeValue",
				"values": {
					"layout": {
						"colSpan": 2,
						"rowSpan": 1,
						"column": 22,
						"row": 2
					},
					"enabled": true
				}
			},
			{
				"operation": "merge",
				"name": "ReactionTimeUnit",
				"values": {
					"layout": {
						"colSpan": 9,
						"rowSpan": 1,
						"column": 0,
						"row": 2
					},
					"enabled": true
				}
			},
			{
				"operation": "move",
				"name": "ReactionTimeUnit",
				"parentName": "Header",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "merge",
				"name": "SolutionTimeUnit",
				"values": {
					"layout": {
						"colSpan": 9,
						"rowSpan": 1,
						"column": 13,
						"row": 2
					},
					"enabled": true
				}
			},
			{
				"operation": "merge",
				"name": "Owner",
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
				"name": "Owner",
				"parentName": "Header",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "merge",
				"name": "Status",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 13,
						"row": 3
					},
					"enabled": true
				}
			},
			{
				"operation": "move",
				"name": "Status",
				"parentName": "Header",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "LOOKUP33875121-e907-44e2-9762-458ae6fc94c4",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "Header"
					},
					"bindTo": "MtnGroupOwner",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "merge",
				"name": "ServiceConditionsTab",
				"values": {
					"order": 0
				}
			},
			{
				"operation": "insert",
				"name": "ServiceItemDetail81bcc8e1",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "ServiceConditionsTab",
				"propertyName": "items",
				"index": 1
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
				"name": "UsersTab",
				"values": {
					"order": 2
				}
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 5
				}
			},
			{
				"operation": "merge",
				"name": "HistoryTab",
				"values": {
					"order": 3
				}
			},
			{
				"operation": "merge",
				"name": "NotesFilesTab",
				"values": {
					"order": 4
				}
			},
			{
				"operation": "remove",
				"name": "Category"
			}
		]/**SCHEMA_DIFF*/
	};
});
