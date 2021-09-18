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

export class UserMetadata<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Users
   * @name UserMetadataDetail
   * @summary Get user metadata
   * @request GET:/user-metadata/{id}
   * @secure
   */
  userMetadataDetail = (id: number, query?: { app?: string }, params: RequestParams = {}) =>
    this.request<Record<string, any>, any>({
      path: `/user-metadata/${id}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name UserMetadataUpdate
   * @summary Set user metadata
   * @request PUT:/user-metadata/{id}
   * @secure
   */
  userMetadataUpdate = (id: number, data: Record<string, any>, query?: { app?: string }, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/user-metadata/${id}`,
      method: "PUT",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
