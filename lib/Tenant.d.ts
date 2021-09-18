import { CreateTenantRequest, CreateTenantResponse, GetTenantResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Tenant<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Tenants
     * @name TenantDetail
     * @summary Get tenant by id
     * @request GET:/tenant/{id}
     * @secure
     */
    tenantDetail: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<GetTenantResponse, any>>;
    /**
     * No description
     *
     * @tags Tenants
     * @name TenantDelete
     * @summary Archive a tenant
     * @request DELETE:/tenant/{id}
     * @secure
     */
    tenantDelete: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<void, any>>;
    /**
     * No description
     *
     * @tags Tenants
     * @name TenantCreate
     * @summary Create a new tenant
     * @request POST:/tenant
     * @secure
     */
    tenantCreate: (data: CreateTenantRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<CreateTenantResponse, any>>;
}
