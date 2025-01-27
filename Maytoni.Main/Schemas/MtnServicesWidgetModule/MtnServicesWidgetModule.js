define("MtnServicesWidgetModule", ["BPMSoft", "ext-base", "MtnServicesWidgetModuleResources", "PortalClientConstants", "NetworkUtilities",
		"BaseNestedModule", "GridUtilitiesV2", "ContainerListGenerator", "ContainerList", "DashboardGridModule", "css!PortalModulesCSS"],
	function(BPMSoft, Ext, resources, PortalClientConstants, NetworkUtilities) {

		/**
		 * @class BPMSoft.configuration.MtnServicesViewWidgetConfig
		 * Class that generates view configuration.
		 */
		Ext.define("BPMSoft.configuration.MtnServicesViewWidgetConfig", {
			extend: "BPMSoft.DashboardGridViewConfig",
			alternateClassName: "BPMSoft.MtnServicesViewWidgetConfig",
						
			/**
			 * Generates configuration of module grid item.
			 * @overridden
			 */
			generate: function(config) {
				var columnsConfig = this.getColumnsConfig(config) || [];
				var entitySchema = config.entitySchema;
				var primaryColumnName = (entitySchema) ? entitySchema.primaryColumnName : "Id";
				var moduleId = BPMSoft.Component.generateId();
				return {
					"name": "gridContainer" + moduleId,
					"itemType": BPMSoft.ViewItemType.CONTAINER,
					"classes": {
						wrapClassName: ["dashboard-grid-container portal-list", config.style]
					},
					"items": [
						{
							"name": "gridHeaderContainer" + moduleId,
							"itemType": BPMSoft.ViewItemType.CONTAINER,
							"classes": {
								"wrapClassName": ["default-widget-header", config.style]
							},
							"items": [
								{
									"name": "mtn-dashboard-grid-caption",
									"itemType": BPMSoft.ViewItemType.LABEL,
									"caption": { "bindTo": "MtnHeaderCaption" },
									"labelClass": "default-widget-header-label"
								},
								{
									"name": "mtn-portal-dashboard-create-custom-case-button",
									"classes": {
										"wrapClassName": ["mtn-portal-dashboard-create-custom-case-button"],
										"textClass": "mtn-portal-dashboard-create-custom-case-button"
									},
									"itemType": BPMSoft.ViewItemType.BUTTON,
									"caption": {
										"bindTo": "Resources.Strings.MtnCreateCustomCase"
									},
									"click": {
										"bindTo": "onCreateCustomCaseClick"
									}
								},
								{
									"name": "mtn-portal-dashboard-search-edit",
									"bindTo": "MtnSearchText",
									"classes": {
										"wrapClassName": ["mtn-portal-dashboard-search-edit"],
										"textClass": "mtn-portal-dashboard-search-edit"
									},
									"caption": {
										"bindTo": "Resources.Strings.MtnSearchCaption"
									}
								},
								{
									"name": "mtn-portal-dashboard-search-button",
									"classes": {
										"wrapClassName": ["dashboard-grid-gotobutton", config.style],
										"textClass": "dashboard-grid-gotobutton"
									},
									"itemType": BPMSoft.ViewItemType.BUTTON,
									"caption": { "bindTo": "Resources.Strings.MtnSearchCaption" },
									"click": { "bindTo": "onSearchButtonClick" }
								},
								{
									"name": "mtn-portal-dashboard-back-button",
									"classes": {
										"wrapClassName": ["mtn-portal-dashboard-button", config.style],
										"textClass": "mtn-portal-dashboard-button"
									},
									"itemType": BPMSoft.ViewItemType.BUTTON,
									"caption": { "bindTo": "Resources.Strings.MtnBackButtonCaption" },
									"enabled": { "bindTo": "IsBackButtonEnabled" },
									"click": { "bindTo": "onBackButtonClick" }
								},
								{
									"name": "mtn-portal-dashboard-next-button",
									"classes": {
										"wrapClassName": ["mtn-portal-dashboard-button", config.style],
										"textClass": "mtn-portal-dashboard-button"
									},
									"itemType": BPMSoft.ViewItemType.BUTTON,
									"caption": { "bindTo": "Resources.Strings.MtnNextButtonCaption" },
									"enabled": { "bindTo": "IsNextButtonEnabled" },
									"click": { "bindTo": "onNextButtonClick" },
									"visible": false
								}
							]
						},
						{
							"name": "DataGrid" + moduleId,
							"idProperty": primaryColumnName,
							"collection": { "bindTo": "GridData" },
							"classes": {
								wrapClassName: ["mtn-portal-dashboard-grid-list"]
							},
							"generator": "ContainerListGenerator.generatePartial",
							"itemType": BPMSoft.ViewItemType.GRID,
							"itemConfig": [
								{
									itemType: BPMSoft.ViewItemType.GRID_LAYOUT,
									name: "itemGridLayout",
									items: columnsConfig
								}
							]
						},
						{
							"name": "gridFooterContainer",
							"itemType": BPMSoft.ViewItemType.CONTAINER,
							"classes": {
								"wrapClassName": ["mtn-dashboard-grid-footer"]
							},
							"items": [
								{
									"name": "mtn-dashboard-grid-level-indicators",
									"itemType": BPMSoft.ViewItemType.COMPONENT,
									"className": "BPMSoft.HtmlControl",
									"id": "MtnLevelIndicators",
									"htmlContent": { "bindTo": "getLevelIndicatorsComponent" }
								}
							]
						},
					]
				};
			},
			
			/**
			 * Returns view configuration of grid item.
			 * @overridden
			 */
			getColumnConfig: function(gridConfigItem, entitySchema) {
				var columnConfig = this.callParent(arguments);
				if (gridConfigItem.path === "Name") {
					columnConfig.click = {bindTo: "onNameLinkClick"};
				}
				return columnConfig;
			},
		});

		/**
		 * @class BPMSoft.configuration.MtnServicesViewWidgetModel
		 * View model module class.
		 */
		Ext.define("BPMSoft.configuration.MtnServicesViewWidgetModel", {
			extend: "BPMSoft.DashboardGridViewModel",
			alternateClassName: "BPMSoft.MtnServicesViewWidgetModel",

			Ext: null,
			sandbox: null,
			BPMSoft: null,
			_networkUtils: NetworkUtilities,
			minNestedLevel: 1,
			maxNestedLevel: 3,
			columns: {
				MtnHeaderCaption: {
					type: BPMSoft.core.enums.ViewModelSchemaItem.ATTRIBUTE,
					dataValueType: BPMSoft.DataValueType.TEXT,
					value: ""
				},
				MtnSearchText: {
					type: BPMSoft.core.enums.ViewModelSchemaItem.ATTRIBUTE,
					dataValueType: BPMSoft.DataValueType.TEXT,
					value: ""
				},
				MtnCurrentLevel: {
					type: BPMSoft.ViewModelColumnType.ATTRIBUTE,
					dataValueType: BPMSoft.DataValueType.INTEGER,
					value: 1
				},
				MtnSelectedServices: {
					type: BPMSoft.ViewModelColumnType.ATTRIBUTE,
					dataValueType: BPMSoft.DataValueType.CUSTOM_OBJECT,
					value: []
				},
				IsBackButtonEnabled: {
					type: BPMSoft.ViewModelColumnType.ATTRIBUTE,
					dataValueType: BPMSoft.DataValueType.BOOLEAN,
					value: true
				},
				IsNextButtonEnabled: {
					type: BPMSoft.ViewModelColumnType.ATTRIBUTE,
					dataValueType: BPMSoft.DataValueType.BOOLEAN,
					value: true
				}
			},
			messages: {
				"GetHistoryState": {
					"mode": BPMSoft.MessageMode.PTP,
					"direction": BPMSoft.MessageDirectionType.PUBLISH
				}
			},
			
			/**
			 * @inheritdoc BPMSoft.DashboardGridViewModel#initGridData
			 * @protected
			 * @overridden
			 */
			onGridDataLoaded: function() {
				this.callParent(arguments);
				this.updateLevelNavigateButtonEnabled();
				this.updateHeaderCaption();
				this.updateLevelIndicatorsComponent();
			},

			/**
			 * Initialize view model by values of resources.
			 * @overridden
			 */
			initResourcesValues: function() {
				var resourcesSuffix = "Resources";
				BPMSoft.each(resources, function(resourceGroup, resourceGroupName) {
					resourceGroupName = resourceGroupName.replace("localizable", "");
					BPMSoft.each(resourceGroup, function(resourceValue, resourceName) {
						var viewModelResourceName = [resourcesSuffix, resourceGroupName, resourceName].join(".");
						this.set(viewModelResourceName, resourceValue);
					}, this);
				}, this);
			},
			
			/**
			 * Adds link to the grid cell.
			 * @overridden
			 */
			addColumnLink: function(item, column) {
				this.mixins.GridUtilities.addColumnLink.apply(this, arguments);
				this.addNameColumnLinkClickHandler(item, column);
			},
			
			/**
			 * Set header caption.
			 */
			updateHeaderCaption: function() {
				let caption = this.get("Resources.Strings.MtnHeaderCaption");
				if (this.$MtnCurrentLevel === this.minNestedLevel) {
					caption = this.get("Resources.Strings.MtnSelectServiceDirectionCaption");
				} else {
					caption = this.get("Resources.Strings.MtnSelectServiceComposition");
				}
				this.$MtnHeaderCaption = caption;
			},
			
			/**
			 * Set attributes to enable navigation buttons.
			 */
			updateLevelNavigateButtonEnabled: function() {
				this.$IsBackButtonEnabled = this.$MtnCurrentLevel > this.minNestedLevel;
				this.$IsNextButtonEnabled = this.$MtnCurrentLevel < this.maxNestedLevel;
			},
			
			/**
			 * Returns html of level indicators.
			 */
			getLevelIndicatorsComponent: function() {
				let indicators = "";
				
				for (let i = 0; i < this.maxNestedLevel; i++) {
					indicators += "<span class='dot'></span>";
				}
				
				return indicators;
			},
			
			/**
			 * Set active level indicators.
			 */
			updateLevelIndicatorsComponent: function() {
				let indicator = $('#MtnLevelIndicators');
				let spans = indicator.find('span');
				
				spans.removeClass('active');
				
				let currentIndicatorIndex = this.$MtnCurrentLevel - 1;
        		spans.eq(currentIndicatorIndex).addClass('active');
			},
			
			/**
			 * 'Search' button click handler.
			 */
			onSearchButtonClick: function() {
				this.reloadGridData();
				this.updateLevelNavigateButtonEnabled();
				this.updateHeaderCaption();
				this.updateLevelIndicatorsComponent();
			},
			
			/**
			 * 'Back' button click handler.
			 */
			onBackButtonClick: function() {
				this.$MtnCurrentLevel--;
				
				if (this.$MtnCurrentLevel <= this.minNestedLevel) {
					this.$MtnCurrentLevel = this.minNestedLevel;
				}
				
				this.reloadGridData();
				this.updateLevelNavigateButtonEnabled();
				this.updateHeaderCaption();
				this.updateLevelIndicatorsComponent();
			},
			
			/**
			 * 'Next' button click handler.
			 */
			onNextButtonClick: function() {
				this.$MtnCurrentLevel++;
				
				if (this.$MtnCurrentLevel >= this.maxNestedLevel) {
					this.$MtnCurrentLevel = this.maxNestedLevel;
				}
				
				this.reloadGridData();
				this.updateLevelNavigateButtonEnabled();
				this.updateHeaderCaption();
				this.updateLevelIndicatorsComponent();
			},
			
			/**
			 * Add 'onNameLinkClick' method for handle link click. Execute in grid item view model context.
			 */
			addNameColumnLinkClickHandler: function(item, column) {
				var scope = this;
				item["onNameLinkClick"] = function() {
					var recordId = item.get("Id");
					if (!recordId) {
						return;
					}
					
					scope.$MtnSelectedServices[scope.$MtnCurrentLevel] = recordId;
					
					if (scope.$MtnCurrentLevel === 3) {						
						let historyState = scope.sandbox.publish("GetHistoryState"); 
						
						let cardConfig = {
							schemaName: "CasePage",
							entitySchemaName: "Case",
							operation: BPMSoft.ConfigurationEnums.CardOperation.ADD,
							moduleId: scope.sandbox.id + "CasePage" + BPMSoft.generateGUID(),
							valuePairs: [
								{
									name: ["ServiceItem"], 
									value: [recordId]
								}
							],
							renderTo: "centerPanel",
							keepAlive: true,
							sandbox: scope.sandbox,
							historyState: historyState
						};
						
						scope._networkUtils.openCardInChain(cardConfig);
						return false;
					}

					scope.$MtnCurrentLevel++;
					
					scope.reloadGridData();
					scope.updateLevelNavigateButtonEnabled();
					scope.updateHeaderCaption();
					return false;
				};
			},
			
			/**
			 * Returns section filters.
			 * @overridden
			 */
			getFilters: function() {
				const filters = this.callParent(arguments);
				if (!Ext.isEmpty(this.$MtnSearchText)) {
					filters.addItem(this.getFilterBySearchText(this.$MtnSearchText));
					return filters;
				}
				filters.addItem(this.getFilterByLevel(this.$MtnCurrentLevel));
				return filters;
			},
			
			/**
			 * Returns a filter by nesting level.
			 */
			getFilterByLevel: function(level) {
				const filters = new BPMSoft.createFilterGroup();
				
				prevLevel = level-1;
				let parentServiceId = this.$MtnSelectedServices[prevLevel];
				
				if (level === 1) {
					filters.addItem(BPMSoft.createColumnIsNullFilter("MtnParentService"));
				}
				if (level === 2) {
					filters.addItem(BPMSoft.createColumnIsNotNullFilter("MtnParentService"));
					filters.addItem(BPMSoft.createColumnIsNullFilter("MtnParentService.MtnParentService"));
					filters.addItem(BPMSoft.createColumnFilterWithParameter(
						BPMSoft.ComparisonType.EQUAL, "MtnParentService", parentServiceId));
				}
				if (level === 3) {
					filters.addItem(BPMSoft.createColumnIsNotNullFilter("MtnParentService.MtnParentService"));
					filters.addItem(BPMSoft.createColumnFilterWithParameter(
						BPMSoft.ComparisonType.EQUAL, "MtnParentService", parentServiceId));
				}
				return filters;
			},
			
			/**
			 * Returns a search filter by contains.
			 */
			getFilterBySearchText: function(searchText) {
				const filters = new BPMSoft.createFilterGroup();
				filters.addItem(BPMSoft.createColumnFilterWithParameter(
					BPMSoft.ComparisonType.CONTAIN, "Name", searchText));
				filters.addItem(BPMSoft.createColumnIsNotNullFilter("MtnParentService.MtnParentService"));
				return filters;
			},
			
			/**
			 * Create new custom case button handler.
			 */
			onCreateCustomCaseClick: function() {
				let historyState = this.sandbox.publish("GetHistoryState"); 	
				let cardConfig = {
					schemaName: "CasePage",
					entitySchemaName: "Case",
					operation: BPMSoft.ConfigurationEnums.CardOperation.ADD,
					moduleId: this.sandbox.id + "CasePage" + BPMSoft.generateGUID(),
					valuePairs: [
						{
							name: ["Contact"], 
							value: [BPMSoft.SysValue.CURRENT_USER_CONTACT.value]
						},
						{
							name: ["Account"], 
							value: [BPMSoft.SysValue.CURRENT_USER_ACCOUNT.value]
						}
					],
					renderTo: "centerPanel",
					keepAlive: true,
					sandbox: this.sandbox,
					historyState: historyState
				};
				
				this._networkUtils.openCardInChain(cardConfig);
			}
		});

		/**
		 * @class BPMSoft.configuration.MtnServicesWidgetModule
		 * Dashboard module class.
		 */
		Ext.define("BPMSoft.configuration.MtnServicesWidgetModule", {
			extend: "BPMSoft.DashboardGridModule",
			alternateClassName: "BPMSoft.MtnServicesWidgetModule",

			Ext: null,
			sandbox: null,
			BPMSoft: null,
			showMask: true,

			/**
			 * Dashboard view model class name.
			 * @type {String}
			 */
			viewModelClassName: "BPMSoft.MtnServicesViewWidgetModel",

			/**
			 * Name of the view configuration generator class.
			 * @type {String}
			 */
			viewConfigClassName: "BPMSoft.MtnServicesViewWidgetConfig",

			/**
			 * Name of the view generator class.
			 * @type {String}
			 */
			viewGeneratorClass: "BPMSoft.ViewGenerator",
			
			/**
			 * Initializes module configuration.
			 * @protected
			 * @overridden
			 */
			initConfig: function() {
				this.moduleConfig =	{
					"caption": "",
					"sectionId": PortalClientConstants.SysModule.PortalMainPageSectionId,
					"entitySchemaName": "ServiceItem",
					"filterData": "{\"className\":\"BPMSoft.FilterGroup\",\"items\":{},\"logicalOperation\":0," +
						"\"isEnabled\":true,\"filterType\":6,\"rootSchemaName\":\"ServiceItem\",\"key\":\"\"}",
					"style": "widget-orange",
					"gridConfig": {
						"items": [
							{
								"bindTo": "Name",
								"type": "text",
								"position": {
									"column": 0,
									"colSpan": 24,
									"row": 0
								},
								"orderDirection": BPMSoft.OrderDirection.ASC,
								"orderPosition": 1,
								"aggregationType": "",
								"metaPath": "Name",
								"path": "Name"
							}
						]
					}
				};
			}

		});

		return BPMSoft.MtnServicesWidgetModule;
	}
);
