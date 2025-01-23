namespace BPMSoft.Configuration
{
    using System;
    using System.Collections.Generic;
    using BPMSoft.Common;
    using System.Text;
    using BPMSoft.Core;
    using BPMSoft.Core.Entities;
    using BPMSoft.Web.Common;
    using BPMSoft.Web.Http.Abstractions;
    using SystemSettings = Core.Configuration.SysSettings;
    using System.Linq;

    public class MtnGetCaseNumberUrlMacros : IMacrosInvokable
    {
        public UserConnection UserConnection { get; set; }

        private IHttpContextAccessor _httpContextAccessor;
        private IHttpContextAccessor HttpContextAccessor
        {
            get
            {
                if (_httpContextAccessor == null)
                {
                    _httpContextAccessor = HttpContext.HttpContextAccessor;
                }
                return _httpContextAccessor;
            }
        }

        public string GetMacrosValue(object arguments)
        {
            var result = GenerateLink(arguments);
            return result;
        }

        protected virtual string GenerateLink(object arguments)
        {
            var baseUrl = GetApplicationUrl();
            var caseItem = GetCaseEntity(arguments);

            if (caseItem == null)
            {
                return string.Empty;
            }

            string result = $"<a href='{baseUrl}/Nui/ViewModule.aspx#CardModuleV2/PortalCasePage/edit/{caseItem.Id}'>{caseItem.Number}</a>";
            return result;
        }
        
        protected virtual Case GetCaseEntity(object arguments)
        {
            Guid caseId = GetRecordId(arguments);
            var caseItem = new Case(UserConnection);
            if (caseItem.FetchFromDB(caseId))
            {
                return caseItem;
            }
            return null;
        }
        
        protected virtual Guid GetRecordId(object argument)
        {
            var recordArgument = argument as KeyValuePair<string, Guid>?;
            return recordArgument.HasValue ? recordArgument.Value.Value : Guid.Empty;
        }
        
        protected virtual string GetApplicationUrl()
        {
            HttpContext httpContext = HttpContextAccessor.GetInstance();
            return httpContext != null
                ? WebUtilities.GetBaseApplicationUrl(httpContext.Request)
                : SystemSettings.GetValue(UserConnection, "SiteUrl", string.Empty);
        }
    }
}