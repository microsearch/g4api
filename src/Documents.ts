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

import { LoadDocumentRequest, LoadDocumentResponse } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Documents<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Documents
   * @name DocumentsCreate
   * @summary Prepare for document upload
   * @request POST:/documents
   * @secure
   */
  documentsCreate = (data: LoadDocumentRequest, params: RequestParams = {}) =>
    this.request<LoadDocumentResponse, any>({
      path: `/documents`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
