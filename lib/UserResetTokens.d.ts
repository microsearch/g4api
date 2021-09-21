import { SecurityToken } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class UserResetTokens<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Internal
     * @name UserResetTokensList
     * @summary Request user password reset tokens
     * @request GET:/user-reset-tokens
     * @secure
     */
    userResetTokensList: (query?: {
        email?: string | undefined;
    } | undefined, params?: RequestParams) => Promise<import("axios").AxiosResponse<SecurityToken[]>>;
}
