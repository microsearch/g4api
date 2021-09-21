"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMetadata = void 0;
const http_client_1 = require("./http-client");
class UserMetadata extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * No description
         *
         * @tags Users
         * @name UserMetadataDetail
         * @summary Get user metadata
         * @request GET:/user-metadata/{id}
         * @secure
         */
        this.userMetadataDetail = (id, query, params = {}) => this.request(Object.assign({ path: `/user-metadata/${id}`, method: "GET", query: query, secure: true, format: "json" }, params));
        /**
         * No description
         *
         * @tags Users
         * @name UserMetadataUpdate
         * @summary Set user metadata
         * @request PUT:/user-metadata/{id}
         * @secure
         */
        this.userMetadataUpdate = (id, data, query, params = {}) => this.request(Object.assign({ path: `/user-metadata/${id}`, method: "PUT", query: query, body: data, secure: true, type: http_client_1.ContentType.Json }, params));
    }
}
exports.UserMetadata = UserMetadata;
