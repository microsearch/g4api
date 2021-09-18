import { HttpClient, RequestParams } from "./http-client";
export declare class TenantMetadata<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Users
     * @name TenantMetadataList
     * @summary Get tenant metadata
     * @request GET:/tenant-metadata
     * @secure
     */
    tenantMetadataList: (query?: {
        app?: string | undefined;
    } | undefined, params?: RequestParams) => Promise<import("./http-client").HttpResponse<Record<string, any>, any>>;
    /**
     * No description
     *
     * @tags Users
     * @name TenantMetadataUpdate
     * @summary Set tenant metadata
     * @request PUT:/tenant-metadata
     * @secure
     */
    tenantMetadataUpdate: (data: Record<string, any>, query?: {
        app?: string | undefined;
    } | undefined, params?: RequestParams) => Promise<import("./http-client").HttpResponse<void, any>>;
}
