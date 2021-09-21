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
    } | undefined, params?: RequestParams) => Promise<import("axios").AxiosResponse<Record<string, any>>>;
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
    } | undefined, params?: RequestParams) => Promise<import("axios").AxiosResponse<void>>;
}
