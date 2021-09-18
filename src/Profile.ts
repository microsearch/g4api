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

import {
  CreateProfileRequest,
  CreateProfileResponse,
  GetProfileResponse,
  UpdateProfileRequest,
  UpdateProfileResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Profile<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Profiles
   * @name ProfileDetail
   * @summary Get a profile by id
   * @request GET:/profile/{id}
   * @secure
   */
  profileDetail = (id: number, params: RequestParams = {}) =>
    this.request<GetProfileResponse, any>({
      path: `/profile/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Profiles
   * @name ProfileUpdate
   * @summary Update a profile
   * @request PUT:/profile/{id}
   * @secure
   */
  profileUpdate = (id: number, data: UpdateProfileRequest, params: RequestParams = {}) =>
    this.request<UpdateProfileResponse, any>({
      path: `/profile/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Profiles
   * @name ProfileDelete
   * @summary Archive a profile
   * @request DELETE:/profile/{id}
   * @secure
   */
  profileDelete = (id: number, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/profile/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Profiles
   * @name ProfileCreate
   * @summary Create a new profile
   * @request POST:/profile
   * @secure
   */
  profileCreate = (data: CreateProfileRequest, params: RequestParams = {}) =>
    this.request<CreateProfileResponse, any>({
      path: `/profile`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
