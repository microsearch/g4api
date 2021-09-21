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

import { PasswordPolicy } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Policy<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Authentication
   * @name PasswordList
   * @summary Get a tenant's password policy
   * @request GET:/policy/password
   * @secure
   */
  passwordList = (params: RequestParams = {}) =>
    this.request<PasswordPolicy, any>({
      path: `/policy/password`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
