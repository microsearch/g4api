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

export class TenantMetadata<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Users
   * @name TenantMetadataList
   * @summary Get tenant metadata
   * @request GET:/tenant-metadata
   * @secure
   */
  tenantMetadataList = (query?: { app?: string }, params: RequestParams = {}) =>
    this.request<Record<string, any>, any>({
      path: `/tenant-metadata`,
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
   * @name TenantMetadataUpdate
   * @summary Set tenant metadata
   * @request PUT:/tenant-metadata
   * @secure
   */
  tenantMetadataUpdate = (data: Record<string, any>, query?: { app?: string }, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/tenant-metadata`,
      method: "PUT",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
