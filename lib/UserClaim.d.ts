import { UserClaimAccountRequest } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class UserClaim<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Internal
     * @name UserClaimUpdate
     * @summary Assign credentials to an anonymous account
     * @request PUT:/user-claim
     * @secure
     */
    userClaimUpdate: (data: UserClaimAccountRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<void, any>>;
}
