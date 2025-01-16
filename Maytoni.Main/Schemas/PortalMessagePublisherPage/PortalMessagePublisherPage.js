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
						let scope = this;
						let parentMethod = this.getParentMethod();
						setTimeout((arguments) => {
							parentMethod.call(scope, arguments);
						}, 1500);
					}
				},
				diff: /**SCHEMA_DIFF*/[]/**SCHEMA_DIFF*/
			};
		});
