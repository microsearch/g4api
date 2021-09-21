import { CreateRoleRequest, CreateRoleResponse, RoleResponse, UpdateRoleRequest } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Role<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Roles
     * @name RoleDetail
     * @summary Get a role by id
     * @request GET:/role/{id}
     * @secure
     */
    roleDetail: (id: number, params?: RequestParams) => Promise<import("axios").AxiosResponse<RoleResponse>>;
    /**
     * No description
     *
     * @tags Roles
     * @name RoleUpdate
     * @summary Update a role
     * @request PUT:/role/{id}
     * @secure
     */
    roleUpdate: (id: number, data: UpdateRoleRequest, params?: RequestParams) => Promise<import("axios").AxiosResponse<RoleResponse>>;
    /**
     * No description
     *
     * @tags Roles
     * @name RoleDelete
     * @summary Archive a role
     * @request DELETE:/role/{id}
     * @secure
     */
    roleDelete: (id: number, params?: RequestParams) => Promise<import("axios").AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags Roles
     * @name RoleCreate
     * @summary Create a new role
     * @request POST:/role
     * @secure
     */
    roleCreate: (data: CreateRoleRequest, params?: RequestParams) => Promise<import("axios").AxiosResponse<CreateRoleResponse>>;
}
