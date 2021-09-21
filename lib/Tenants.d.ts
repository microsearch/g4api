import { GetTenantsResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Tenants<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Tenants
     * @name TenantsList
     * @summary Get tenant list
     * @request GET:/tenants
     * @secure
     */
    tenantsList: (params?: RequestParams) => Promise<import("axios").AxiosResponse<GetTenantsResponse>>;
    /**
     * No description
     *
     * @tags Tenants
     * @name TenantsDelete
     * @summary Purge archived tenants
     * @request DELETE:/tenants
     * @secure
     */
    tenantsDelete: (query?: {
        days?: number | undefined;
    } | undefined, params?: RequestParams) => Promise<import("axios").AxiosResponse<void>>;
}
