import { HttpClient, RequestParams } from "./http-client";
export declare class ProfileMetadata<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Profiles
     * @name ProfileMetadataDetail
     * @summary Get profile metadata
     * @request GET:/profile-metadata/{id}
     * @secure
     */
    profileMetadataDetail: (id: number, query?: {
        app?: string | undefined;
    } | undefined, params?: RequestParams) => Promise<import("./http-client").HttpResponse<Record<string, any>, any>>;
    /**
     * No description
     *
     * @tags Profiles
     * @name ProfileMetadataUpdate
     * @summary Set profile metadata
     * @request PUT:/profile-metadata/{id}
     * @secure
     */
    profileMetadataUpdate: (id: number, data: Record<string, any>, query?: {
        app?: string | undefined;
    } | undefined, params?: RequestParams) => Promise<import("./http-client").HttpResponse<void, any>>;
}
