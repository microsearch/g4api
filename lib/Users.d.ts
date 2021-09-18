import { GetUsersRequest, GetUsersResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Users<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * @description Returns the list of user records which match the specified (optional) criteria.
     *
     * @tags Users
     * @name UsersList
     * @summary Get user list (DEPRECATED: use POST /users instead)
     * @request GET:/users
     * @secure
     */
    usersList: (query?: {
        contains?: string | undefined;
        skip?: number | undefined;
        take?: number | undefined;
        archived?: boolean | undefined;
    } | undefined, params?: RequestParams) => Promise<import("axios").AxiosResponse<GetUsersResponse>>;
    /**
     * @description Returns the list of user records which match the specified (optional) criteria.
     *
     * @tags Users
     * @name UsersCreate
     * @summary Get user list
     * @request POST:/users
     * @secure
     */
    usersCreate: (data: GetUsersRequest, params?: RequestParams) => Promise<import("axios").AxiosResponse<GetUsersResponse>>;
}
