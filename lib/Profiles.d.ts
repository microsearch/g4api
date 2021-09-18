import { GetProfilesResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Profiles<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Profiles
     * @name ProfilesList
     * @summary Get profile list for a tenant
     * @request GET:/profiles
     * @secure
     */
    profilesList: (params?: RequestParams) => Promise<import("axios").AxiosResponse<GetProfilesResponse>>;
}
