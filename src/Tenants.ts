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

import { GetTenantsResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Tenants<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Tenants
   * @name Get
   * @summary Get tenant list
   * @request GET:/tenants
   * @secure
   */
  get = (params: RequestParams = {}) =>
    this.request<GetTenantsResponse, any>({
      path: `/tenants`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Tenants
   * @name Delete
   * @summary Purge archived tenants
   * @request DELETE:/tenants
   * @secure
   */
  delete = (query?: { days?: number }, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/tenants`,
      method: "DELETE",
      query: query,
      secure: true,
      ...params,
    });
}
