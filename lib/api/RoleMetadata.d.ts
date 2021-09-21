import { HttpClient, RequestParams } from "./http-client";
export declare class RoleMetadata<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Roles
     * @name RoleMetadataDetail
     * @summary Get role metadata
     * @request GET:/role-metadata/{id}
     * @secure
     */
    roleMetadataDetail: (id: number, query?: {
        app?: string | undefined;
    } | undefined, params?: RequestParams) => Promise<import("axios").AxiosResponse<Record<string, any>>>;
    /**
     * No description
     *
     * @tags Roles
     * @name RoleMetadataUpdate
     * @summary Set role metadata
     * @request PUT:/role-metadata/{id}
     * @secure
     */
    roleMetadataUpdate: (id: number, data: Record<string, any>, query?: {
        app?: string | undefined;
    } | undefined, params?: RequestParams) => Promise<import("axios").AxiosResponse<void>>;
}
