import { GetRolesResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Roles<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Roles
     * @name RolesDetail
     * @summary Get role list for a tenant and scope
     * @request GET:/roles/{scope}
     * @secure
     */
    rolesDetail: (scope: string, params?: RequestParams) => Promise<import("axios").AxiosResponse<GetRolesResponse>>;
    /**
     * No description
     *
     * @tags Roles
     * @name RolesList
     * @summary Get role list for a tenant
     * @request GET:/roles
     * @secure
     */
    rolesList: (params?: RequestParams) => Promise<import("axios").AxiosResponse<GetRolesResponse>>;
}
