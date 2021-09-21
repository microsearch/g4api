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

import { UserClaimAccountRequest } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class UserClaim<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Internal
   * @name UserClaimUpdate
   * @summary Assign credentials to an anonymous account
   * @request PUT:/user-claim
   * @secure
   */
  userClaimUpdate = (data: UserClaimAccountRequest, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/user-claim`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
