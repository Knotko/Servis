define("CasePage", [], function() {
	return {
		entitySchemaName: "Case",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"Group": {
				"36df7cc4-6cdb-4e1d-bca8-08445c953a28": {
					"uId": "36df7cc4-6cdb-4e1d-bca8-08445c953a28",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "ServiceItem",
							"attributePath": "MtnGroupOwner"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "Group"
							}
						}
					]
				}
			},
			"ServiceItem": {
				"deacb676-97a2-48ac-a601-4028a9c978ec": {
					"uId": "deacb676-97a2-48ac-a601-4028a9c978ec",
					"enabled": true,
					"removed": false,
					"ruleType": 1,
					"baseAttributePatch": "MtnGroupOwner",
					"comparisonType": 3,
					"autoClean": false,
					"autocomplete": true,
					"type": 1,
					"attribute": "Group"
				}
			},
			"Owner": {
				"7920ab1d-d4d9-4b3a-afa7-05a5f223ef7f": {
					"uId": "7920ab1d-d4d9-4b3a-afa7-05a5f223ef7f",
					"enabled": true,
					"removed": false,
					"ruleType": 1,
					"baseAttributePatch": "MtnObjectAdmin",
					"comparisonType": 3,
					"autoClean": true,
					"autocomplete": false,
					"type": 1,
					"attribute": "Group"
				}
			}
		}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "merge",
				"name": "CaseGroup",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 7
					}
				}
			},
			{
				"operation": "merge",
				"name": "CaseOwner",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 8
					}
				}
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
				"name": "ESNTab",
				"values": {
					"order": 5
				}
			},
			{
				"operation": "merge",
				"name": "SolutionTab",
				"values": {
					"order": 1
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
				"operation": "merge",
				"name": "CaseInformationTab",
				"values": {
					"order": 2
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
				"name": "ConfItem"
			},
			{
				"operation": "move",
				"name": "ResoluitonContainer",
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "move",
				"name": "ServiceItem",
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "move",
				"name": "ServicePact",
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "move",
				"name": "SolutionFieldContainer",
				"parentName": "SolutionTab_gridLayout",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "move",
				"name": "FirstSolutionProvidedOn",
				"parentName": "TermsControlGroup_GridLayout",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "move",
				"name": "SolutionCaptionContainer",
				"parentName": "TermsControlGroup_GridLayout",
				"propertyName": "items",
				"index": 6
			}
		]/**SCHEMA_DIFF*/
	};
});
