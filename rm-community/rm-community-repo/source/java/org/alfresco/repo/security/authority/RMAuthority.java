 
package org.alfresco.repo.security.authority;

/*
 * #%L
 * This file is part of Alfresco.
 * %%
 * Copyright (C) 2005 - 2016 Alfresco Software Limited
 * %%
 * Alfresco is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * Alfresco is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *  
 * You should have received a copy of the GNU Lesser General Public License
 * along with Alfresco. If not, see <http://www.gnu.org/licenses/>.
 * #L%
 */


/**
 * Interface for defining constants
 *
 * @author Tuna Aksoy
 * @since 2.1
 */
public interface RMAuthority
{
    /**
     * The default rm zone.
     */
    String ZONE_APP_RM = "APP.RM";

    /**
     * The constant for all roles display name
     */
    String ALL_ROLES_DISPLAY_NAME = "All Roles";

    /**
     * The constant for all roles prefix
     */
    String ALL_ROLES_PREFIX = "AllRoles";
}
