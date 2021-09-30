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

import { GetUsersRequest, GetUsersWithAppMetadataResponse } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Users<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Returns the list of user records which match the specified (optional) criteria.
   *
   * @tags Users
   * @name UsersList
   * @summary Get user list (DEPRECATED: use POST /users instead)
   * @request GET:/users
   * @secure
   */
  usersList = (
    query?: { contains?: string; skip?: number; take?: number; archived?: boolean },
    params: RequestParams = {},
  ) =>
    this.request<GetUsersWithAppMetadataResponse, any>({
      path: `/users`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Returns the list of user records which match the specified (optional) criteria.
   *
   * @tags Users
   * @name UsersCreate
   * @summary Get user list
   * @request POST:/users
   * @secure
   */
  usersCreate = (data: GetUsersRequest, params: RequestParams = {}) =>
    this.request<GetUsersWithAppMetadataResponse, any>({
      path: `/users`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
