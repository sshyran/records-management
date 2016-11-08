/*
 * #%L
 * Alfresco Records Management Module
 * %%
 * Copyright (C) 2005 - 2016 Alfresco Software Limited
 * %%
 * This file is part of the Alfresco software.
 * -
 * If the software was purchased under a paid Alfresco license, the terms of
 * the paid license agreement will prevail.  Otherwise, the software is
 * provided under the following open source license terms:
 * -
 * Alfresco is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * -
 * Alfresco is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 * -
 * You should have received a copy of the GNU Lesser General Public License
 * along with Alfresco. If not, see <http://www.gnu.org/licenses/>.
 * #L%
 */

// Insert a new NotificationService as the first entry in the services array (because this
// is the first entry all others will be discarded)...
model.jsonModel.services.unshift({
   name: "alfresco/services/NotificationService",
   config: {
      showProgressIndicator: true
   }
});

// FIXME: Remove this once the new site creation dialog has been extended in RM
var siteService = widgetUtils.findObject(model.jsonModel, "id", "SITE_SERVICE");
if (siteService != null)
{
   siteService.config.legacyMode = true;
}
