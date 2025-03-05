define("MtnAcquisitionGoodsAndServices1Page", [], function() {
	return {
		entitySchemaName: "MtnAcquisitionGoodsAndServices",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "MtnAcquisitionGoodsAndServicesFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "MtnAcquisitionGoodsAndServices"
				}
			},
			"MtnProductsForPurchaseDetail99333d78": {
				"schemaName": "MtnProductsForPurchaseDetail",
				"entitySchemaName": "MtnProductsForPurchase",
				"filter": {
					"detailColumn": "MtnProductsInAcquisitionGoodsAndServices",
					"masterColumn": "Id"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"MtnNumber": {
				"dac785c1-1424-4c10-92ed-3bd501e0c904": {
					"uId": "dac785c1-1424-4c10-92ed-3bd501e0c904",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "MtnNumber"
							}
						}
					]
				}
			},
			"MtnFrom": {
				"c9ae5283-10f9-4486-b6bb-48a4c0fe99c1": {
					"uId": "c9ae5283-10f9-4486-b6bb-48a4c0fe99c1",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 0,
								"value": "true",
								"dataValueType": 1
							},
							"rightExpression": {
								"type": 0,
								"value": "true",
								"dataValueType": 1
							}
						}
					]
				}
			},
			"ESNTab": {
				"67660dc0-c5be-425f-a007-b711301c4970": {
					"uId": "67660dc0-c5be-425f-a007-b711301c4970",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 3,
								"value": "CurrentUserContact",
								"dataValueType": 10
							},
							"rightExpression": {
								"type": 0,
								"value": "410006e1-ca4e-4502-a9ec-e54d922d2c00",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"MtnAccount": {
				"684d0a39-30ee-4a5e-98db-bdfec92a1be4": {
					"uId": "684d0a39-30ee-4a5e-98db-bdfec92a1be4",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "MtnAgreement"
							}
						}
					]
				},
				"f2d65c89-a74f-48d4-9023-020db46f5a20": {
					"uId": "f2d65c89-a74f-48d4-9023-020db46f5a20",
					"enabled": false,
					"removed": true,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "MtnAgreement",
							"attributePath": "MtnAccount"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "MtnAgreement"
							}
						}
					]
				}
			},
			"MtnAgreement": {
				"6826d033-255a-4824-9731-dc63c4a5d511": {
					"uId": "6826d033-255a-4824-9731-dc63c4a5d511",
					"enabled": true,
					"removed": true,
					"ruleType": 1,
					"baseAttributePatch": "MtnAccount",
					"comparisonType": 3,
					"autoClean": true,
					"autocomplete": true,
					"type": 1,
					"attribute": "MtnAccount"
				}
			}
		}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "MtnNumber63c99bbc-558b-4e4c-8301-de0063aeee3d",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "MtnNumber"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MtnFrom1dc66e81-12c4-4ae6-95e1-9034cd371b48",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 13,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "MtnFrom"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "MtnAgreementcd350288-77f1-45f3-8638-1b4d926bddb3",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "MtnAgreement"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "MtnTotalb8f5f67c-382f-4e83-9948-2c83aa049149",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 13,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "MtnTotal"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "MtnAccount483b60bb-46c4-460d-8150-0db51879325b",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "MtnAccount"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Mtn1Cidd2094e82-414c-4f94-8fe1-4a77d93e8135",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 13,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "Mtn1Cid"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Tabdd012ecaTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabdd012ecaTabLabelTabCaption"
					},
					"items": [],
					"order": 0
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tabdd012ecaTabLabelGroup58d1c5f6",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabdd012ecaTabLabelGroup58d1c5f6GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tabdd012ecaTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tabdd012ecaTabLabelGridLayoutfb61a180",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tabdd012ecaTabLabelGroup58d1c5f6",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MtnProductsForPurchaseDetail99333d78",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tabdd012ecaTabLabel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "NotesAndFilesTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabCaption"
					},
					"items": [],
					"order": 1
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Files",
				"values": {
					"itemType": 2
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NotesControlGroup",
				"values": {
					"itemType": 15,
					"caption": {
						"bindTo": "Resources.Strings.NotesGroupCaption"
					},
					"items": []
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Notes",
				"values": {
					"bindTo": "MtnNotes",
					"dataValueType": 1,
					"contentType": 4,
					"layout": {
						"column": 0,
						"row": 0,
						"colSpan": 24
					},
					"labelConfig": {
						"visible": false
					},
					"controlConfig": {
						"imageLoaded": {
							"bindTo": "insertImagesToNotes"
						},
						"images": {
							"bindTo": "NotesImagesCollection"
						}
					}
				},
				"parentName": "NotesControlGroup",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 2
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
