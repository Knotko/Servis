define("PortalCasePage", [], function() {
	return {
		entitySchemaName: "Case",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "RegisteredOn07554498-8119-4510-8205-9b89d0e89539",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "RegisteredOn"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Subject012f9142-c4f4-4818-834f-239383e0556a",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 2,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "Subject",
					"enabled": true,
					"contentType": 0
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "ProcessingTab",
				"values": {
					"order": 0
				}
			},
			{
				"operation": "merge",
				"name": "SatisfactionLevelComment",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1
					}
				}
			},
			{
				"operation": "remove",
				"name": "ServicePact"
			},
			{
				"operation": "remove",
				"name": "ServiceItem"
			},
			{
				"operation": "remove",
				"name": "CaseCategory"
			},
			{
				"operation": "remove",
				"name": "ConfItem"
			},
			{
				"operation": "move",
				"name": "ResponseCaptionProfile",
				"parentName": "ResponseGridLayout",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "move",
				"name": "SolutionCaptionProfile",
				"parentName": "SolutionGridLayout",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_DIFF*/
	};
});
