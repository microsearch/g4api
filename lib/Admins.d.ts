import { GetAdminsResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Admins<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * @description Returns the list of all admin user records.
     *
     * @tags Admins
     * @name AdminsList
     * @summary Get admin user list
     * @request GET:/admins
     * @secure
     */
    adminsList: (params?: RequestParams) => Promise<import("axios").AxiosResponse<GetAdminsResponse>>;
}
