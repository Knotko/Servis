define("ContactPageV2", [], function() {
	return {
		entitySchemaName: "Contact",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "merge",
				"name": "CompletenessContainer",
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
				"operation": "move",
				"name": "CompletenessContainer",
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "merge",
				"name": "EnrichCloudAndTimezoneContainer",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2
					}
				}
			},
			{
				"operation": "move",
				"name": "EnrichCloudAndTimezoneContainer",
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "merge",
				"name": "ContactTimezonePage",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3
					}
				}
			},
			{
				"operation": "merge",
				"name": "ContactAccountName",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4
					}
				}
			},
			{
				"operation": "merge",
				"name": "ContactJobTitleProfile",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 5
					}
				}
			},
			{
				"operation": "merge",
				"name": "ContactAccountMobilePhone",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 6
					}
				}
			},
			{
				"operation": "merge",
				"name": "ContactAccountPhone",
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
				"name": "ContactAccountEmail",
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
				"operation": "insert",
				"name": "LOOKUP482e0fc1-1c6b-4a20-92a5-b14419dfbb9e",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ContactPageGeneralContainer"
					},
					"bindTo": "MtnObjectAdmin",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ContactPageGeneralContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "merge",
				"name": "ContactPageServiceTab",
				"values": {
					"order": 2
				}
			},
			{
				"operation": "merge",
				"name": "CommunicationChannelsTab",
				"values": {
					"order": 6
				}
			},
			{
				"operation": "merge",
				"name": "DoNotUseEmail",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 0
					}
				}
			},
			{
				"operation": "merge",
				"name": "DoNotUseSms",
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
				"operation": "move",
				"name": "DoNotUseSms",
				"parentName": "CommunicationChannelsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "merge",
				"name": "DoNotUseCall",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 1
					}
				}
			},
			{
				"operation": "merge",
				"name": "DoNotUseMail",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 13,
						"row": 1
					}
				}
			},
			{
				"operation": "merge",
				"name": "JobTabContainer",
				"values": {
					"order": 7
				}
			},
			{
				"operation": "merge",
				"name": "HistoryTab",
				"values": {
					"order": 8
				}
			},
			{
				"operation": "merge",
				"name": "NotesAndFilesTab",
				"values": {
					"order": 9
				}
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 10
				}
			},
			{
				"operation": "merge",
				"name": "TrackingEventsTab",
				"values": {
					"order": 5
				}
			},
			{
				"operation": "merge",
				"name": "WrongBrowserInfoDescription",
				"values": {
					"layout": {
						"colSpan": 20,
						"rowSpan": 5,
						"column": 3,
						"row": 7
					}
				}
			},
			{
				"operation": "remove",
				"name": "SalutationType"
			},
			{
				"operation": "remove",
				"name": "Age"
			},
			{
				"operation": "remove",
				"name": "Language"
			},
			{
				"operation": "remove",
				"name": "Dear"
			}
		]/**SCHEMA_DIFF*/
	};
});
