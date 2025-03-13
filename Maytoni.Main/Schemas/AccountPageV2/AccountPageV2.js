define("AccountPageV2", [], function() {
	return {
		entitySchemaName: "Account",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "merge",
				"name": "AccountPhotoContainer",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0
					}
				}
			},
			{
				"operation": "merge",
				"name": "AccountCompletenessContainer",
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
				"name": "AccountCompletenessContainer",
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "merge",
				"name": "EnrichmentButtonContainer",
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
				"name": "EnrichmentButtonContainer",
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "merge",
				"name": "AccountType",
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
				"name": "AccountOwner",
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
				"operation": "insert",
				"name": "Mtn1Cidc77ead8b-a190-499c-bb52-ddbbdf47eaf6",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "Mtn1Cid"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "merge",
				"name": "AccountPageGeneralTabContainer",
				"values": {
					"order": 0
				}
			},
			{
				"operation": "insert",
				"name": "Namec501f301-1600-424a-8c54-e687a35ff355",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "AccountPageGeneralContainer"
					},
					"bindTo": "Name"
				},
				"parentName": "AccountPageGeneralContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "AlternativeName",
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
				"operation": "insert",
				"name": "MtnINNb76bd0c2-6b25-4fcd-afe8-660cb05e24a9",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "AccountPageGeneralContainer"
					},
					"bindTo": "MtnINN"
				},
				"parentName": "AccountPageGeneralContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Phone27310ef2-1324-4fc0-ba29-fac1a4bf82ad",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 13,
						"row": 2,
						"layoutName": "AccountPageGeneralContainer"
					},
					"bindTo": "Phone"
				},
				"parentName": "AccountPageGeneralContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Addressc239591b-1012-43c0-95e3-6bdf244f6500",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "AccountPageGeneralContainer"
					},
					"bindTo": "Address"
				},
				"parentName": "AccountPageGeneralContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "MtnEmail99aaa76b-c349-4df6-9d65-09b1259dc2f5",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 13,
						"row": 3,
						"layoutName": "AccountPageGeneralContainer"
					},
					"bindTo": "MtnEmail"
				},
				"parentName": "AccountPageGeneralContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "MtnPartner77ef0a4d-92bd-4555-9050-cd459c4bfb9d",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "AccountPageGeneralContainer"
					},
					"bindTo": "MtnPartner",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "AccountPageGeneralContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "merge",
				"name": "EmployeesNumber",
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
				"name": "Ownership",
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
				"operation": "merge",
				"name": "AnnualRevenue",
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
				"name": "ContactsAndStructureTabContainer",
				"values": {
					"order": 1
				}
			},
			{
				"operation": "merge",
				"name": "AccountPageServiceTab",
				"values": {
					"order": 2
				}
			},
			{
				"operation": "merge",
				"name": "RelationshipTabContainer",
				"values": {
					"order": 4
				}
			},
			{
				"operation": "merge",
				"name": "HistoryTabContainer",
				"values": {
					"order": 5
				}
			},
			{
				"operation": "merge",
				"name": "NotesTabContainer",
				"values": {
					"order": 6
				}
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 7
				}
			},
			{
				"operation": "remove",
				"name": "AccountName"
			},
			{
				"operation": "remove",
				"name": "AccountWeb"
			},
			{
				"operation": "remove",
				"name": "AccountPhone"
			},
			{
				"operation": "remove",
				"name": "NewAccountCategory"
			},
			{
				"operation": "remove",
				"name": "AccountIndustry"
			},
			{
				"operation": "remove",
				"name": "Code"
			}
		]/**SCHEMA_DIFF*/
	};
});
