import { HttpClient, RequestParams } from "./http-client";
export declare class UserMetadata<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Users
     * @name UserMetadataDetail
     * @summary Get user metadata
     * @request GET:/user-metadata/{id}
     * @secure
     */
    userMetadataDetail: (id: number, query?: {
        app?: string | undefined;
    } | undefined, params?: RequestParams) => Promise<import("./http-client").HttpResponse<Record<string, any>, any>>;
    /**
     * No description
     *
     * @tags Users
     * @name UserMetadataUpdate
     * @summary Set user metadata
     * @request PUT:/user-metadata/{id}
     * @secure
     */
    userMetadataUpdate: (id: number, data: Record<string, any>, query?: {
        app?: string | undefined;
    } | undefined, params?: RequestParams) => Promise<import("./http-client").HttpResponse<void, any>>;
}
