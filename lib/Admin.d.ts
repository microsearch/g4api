import { CreateAdminRequest, CreateAdminResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Admin<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Admins
     * @name AdminCreate
     * @summary Create new admin user
     * @request POST:/admin
     * @secure
     */
    adminCreate: (data: CreateAdminRequest, params?: RequestParams) => Promise<import("axios").AxiosResponse<CreateAdminResponse>>;
}
