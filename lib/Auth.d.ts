import { RefreshResponse, UserAuthenticationRequest, UserAuthenticationResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Auth<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Authentication
     * @name AuthCreate
     * @summary Authenticate user credentials
     * @request POST:/auth
     * @secure
     */
    authCreate: (data: UserAuthenticationRequest, params?: RequestParams) => Promise<import("axios").AxiosResponse<UserAuthenticationResponse>>;
    /**
     * No description
     *
     * @tags Authentication
     * @name AuthList
     * @summary Refresh authentication token
     * @request GET:/auth
     * @secure
     */
    authList: (params?: RequestParams) => Promise<import("axios").AxiosResponse<RefreshResponse>>;
}
