import { UserResetPasswordRequest } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class UserPassword<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Internal
     * @name UserPasswordUpdate
     * @summary Reset a user password
     * @request PUT:/user-password
     * @secure
     */
    userPasswordUpdate: (data: UserResetPasswordRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<void, any>>;
}
