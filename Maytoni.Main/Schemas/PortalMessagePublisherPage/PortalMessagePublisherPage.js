define("PortalMessagePublisherPage", ["PortalMessagePublisherPageResources",  "ConfigurationConstants",
		"ExtendedHtmlEditModuleUtilities", "ExtendedHtmlEditModule", "MessagePublisherAttachmentUtilities",
		"SchemaBuilderV2"],
		function(resources, ConfigurationConstants) {
			return {
				entitySchemaName: "PortalMessage",
				mixins: {},
				attributes: {},
				methods: {

					/**
					 * @inheritdoc BPMSoft.BaseMessagePublisherPage#publishMessage
					 * @overridden
					 */
					publishMessage: function() {
						this.showBodyMask();
						let scope = this;
						let parentMethod = this.getParentMethod();
						setTimeout((arguments) => {
							parentMethod.call(scope, arguments);
							scope.hideBodyMask();
						}, 1500);
					}
				},
				diff: /**SCHEMA_DIFF*/[]/**SCHEMA_DIFF*/
			};
		});
