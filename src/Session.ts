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

import { AuthenticatedSessionResponse, CreateSessionRequest, GetSessionResponse } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Session<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Sessions
   * @name SessionCreate
   * @summary Create a persistent session
   * @request POST:/session
   * @secure
   */
  sessionCreate = (data: CreateSessionRequest, params: RequestParams = {}) =>
    this.request<AuthenticatedSessionResponse, any>({
      path: `/session`,
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
   * @tags Sessions
   * @name SessionDetail
   * @summary Get session
   * @request GET:/session/{id}
   * @secure
   */
  sessionDetail = (id: string, params: RequestParams = {}) =>
    this.request<GetSessionResponse, any>({
      path: `/session/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Sessions
   * @name SessionUpdate
   * @summary Update session data
   * @request PUT:/session/{id}
   * @secure
   */
  sessionUpdate = (id: string, data: any, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/session/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Sessions
   * @name SessionDelete
   * @summary Delete session
   * @request DELETE:/session/{id}
   * @secure
   */
  sessionDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/session/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
}
