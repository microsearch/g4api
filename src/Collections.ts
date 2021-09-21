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

import { GetCollectionsResponse, PostCollectionRequest, PostCollectionResponse } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Collections<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Collections
   * @name CollectionsList
   * @request GET:/collections
   * @secure
   */
  collectionsList = (params: RequestParams = {}) =>
    this.request<GetCollectionsResponse, any>({
      path: `/collections`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Collections
   * @name CollectionsCreate
   * @request POST:/collections
   * @secure
   */
  collectionsCreate = (data: PostCollectionRequest, params: RequestParams = {}) =>
    this.request<PostCollectionResponse, any>({
      path: `/collections`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
