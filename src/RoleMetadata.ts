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

import { ContentType, HttpClient, RequestParams } from "./http-client";

export class RoleMetadata<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Roles
   * @name RoleMetadataDetail
   * @summary Get role metadata
   * @request GET:/role-metadata/{id}
   * @secure
   */
  roleMetadataDetail = (id: number, query?: { app?: string }, params: RequestParams = {}) =>
    this.request<Record<string, any>, any>({
      path: `/role-metadata/${id}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Roles
   * @name RoleMetadataUpdate
   * @summary Set role metadata
   * @request PUT:/role-metadata/{id}
   * @secure
   */
  roleMetadataUpdate = (id: number, data: Record<string, any>, query?: { app?: string }, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/role-metadata/${id}`,
      method: "PUT",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
