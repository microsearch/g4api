import { PasswordChangeRequest } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Password<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Authentication
     * @name PasswordUpdate
     * @summary Change password
     * @request PUT:/password
     * @secure
     */
    passwordUpdate: (data: PasswordChangeRequest, params?: RequestParams) => Promise<import("axios").AxiosResponse<void>>;
}
