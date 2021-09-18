import { SecurityToken } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class UserClaimTokens<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Internal
     * @name UserClaimTokensList
     * @summary Request user claim tokens
     * @request GET:/user-claim-tokens
     * @secure
     */
    userClaimTokensList: (query?: {
        email?: string | undefined;
    } | undefined, params?: RequestParams) => Promise<import("axios").AxiosResponse<SecurityToken[]>>;
}
