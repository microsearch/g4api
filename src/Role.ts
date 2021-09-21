/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { CreateRoleRequest, CreateRoleResponse, RoleResponse, UpdateRoleRequest } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Role<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Roles
   * @name RoleDetail
   * @summary Get a role by id
   * @request GET:/role/{id}
   * @secure
   */
  roleDetail = (id: number, params: RequestParams = {}) =>
    this.request<RoleResponse, any>({
      path: `/role/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Roles
   * @name RoleUpdate
   * @summary Update a role
   * @request PUT:/role/{id}
   * @secure
   */
  roleUpdate = (id: number, data: UpdateRoleRequest, params: RequestParams = {}) =>
    this.request<RoleResponse, any>({
      path: `/role/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Roles
   * @name RoleDelete
   * @summary Archive a role
   * @request DELETE:/role/{id}
   * @secure
   */
  roleDelete = (id: number, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/role/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Roles
   * @name RoleCreate
   * @summary Create a new role
   * @request POST:/role
   * @secure
   */
  roleCreate = (data: CreateRoleRequest, params: RequestParams = {}) =>
    this.request<CreateRoleResponse, any>({
      path: `/role`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
