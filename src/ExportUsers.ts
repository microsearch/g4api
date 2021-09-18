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

import { ExportUsersResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class ExportUsers<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags ImportExport
   * @name ExportUsersCreate
   * @summary Export users
   * @request POST:/export-users
   * @secure
   */
  exportUsersCreate = (params: RequestParams = {}) =>
    this.request<ExportUsersResponse, any>({
      path: `/export-users`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
}
