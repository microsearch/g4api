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

import { RefreshResponse, UserAuthenticationRequest, UserAuthenticationResponse } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Auth<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Authentication
   * @name AuthCreate
   * @summary Authenticate user credentials
   * @request POST:/auth
   * @secure
   */
  authCreate = (data: UserAuthenticationRequest, params: RequestParams = {}) =>
    this.request<UserAuthenticationResponse, any>({
      path: `/auth`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Authentication
   * @name AuthList
   * @summary Refresh authentication token
   * @request GET:/auth
   * @secure
   */
  authList = (params: RequestParams = {}) =>
    this.request<RefreshResponse, any>({
      path: `/auth`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
