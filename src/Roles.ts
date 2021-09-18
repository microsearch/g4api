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

import { GetRolesResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Roles<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Roles
   * @name RolesDetail
   * @summary Get role list for a tenant and scope
   * @request GET:/roles/{scope}
   * @secure
   */
  rolesDetail = (scope: string, params: RequestParams = {}) =>
    this.request<GetRolesResponse, any>({
      path: `/roles/${scope}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Roles
   * @name RolesList
   * @summary Get role list for a tenant
   * @request GET:/roles
   * @secure
   */
  rolesList = (params: RequestParams = {}) =>
    this.request<GetRolesResponse, any>({
      path: `/roles`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
