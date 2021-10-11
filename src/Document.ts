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

export class Document<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Documents
   * @name Post
   * @summary Verify an uploaded document
   * @request POST:/document/{id}
   * @secure
   */
  post = (id: number, query?: { jobid?: string }, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/document/${id}`,
      method: "POST",
      query: query,
      secure: true,
      ...params,
    });
}
