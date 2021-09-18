import { CreateUserRequest, CreateUserResponse, GetUserResponse, UpdateUserRequest, UpdateUserResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class User<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Users
     * @name UserDetail
     * @summary Get user by user id
     * @request GET:/user/{id}
     * @secure
     */
    userDetail: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<GetUserResponse, any>>;
    /**
     * No description
     *
     * @tags Users
     * @name UserUpdate
     * @summary Update existing user
     * @request PUT:/user/{id}
     * @secure
     */
    userUpdate: (id: number, data: UpdateUserRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<UpdateUserResponse, any>>;
    /**
     * No description
     *
     * @tags Users
     * @name UserDelete
     * @summary Archive a user
     * @request DELETE:/user/{id}
     * @secure
     */
    userDelete: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<void, any>>;
    /**
     * No description
     *
     * @tags Users
     * @name UserCreate
     * @summary Create new user
     * @request POST:/user
     * @secure
     */
    userCreate: (data: CreateUserRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<CreateUserResponse, any>>;
}
