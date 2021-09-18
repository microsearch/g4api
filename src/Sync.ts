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

import { HttpClient, RequestParams } from "./http-client";

export class Sync<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Authentication
   * @name SyncCreate
   * @summary Process any pending G3 account synchronization requests
   * @request POST:/sync
   * @secure
   */
  syncCreate = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/sync`,
      method: "POST",
      secure: true,
      ...params,
    });
}
