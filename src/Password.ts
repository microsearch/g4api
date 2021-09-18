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

import { PasswordChangeRequest } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Password<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Authentication
   * @name PasswordUpdate
   * @summary Change password
   * @request PUT:/password
   * @secure
   */
  passwordUpdate = (data: PasswordChangeRequest, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/password`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
