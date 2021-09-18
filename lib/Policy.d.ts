import { PasswordPolicy } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Policy<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Authentication
     * @name PasswordList
     * @summary Get a tenant's password policy
     * @request GET:/policy/password
     * @secure
     */
    passwordList: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<PasswordPolicy, any>>;
}
