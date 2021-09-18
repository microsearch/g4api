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
exports.ProfileMetadata = void 0;
const http_client_1 = require("./http-client");
class ProfileMetadata extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * No description
         *
         * @tags Profiles
         * @name ProfileMetadataDetail
         * @summary Get profile metadata
         * @request GET:/profile-metadata/{id}
         * @secure
         */
        this.profileMetadataDetail = (id, query, params = {}) => this.request(Object.assign({ path: `/profile-metadata/${id}`, method: "GET", query: query, secure: true, format: "json" }, params));
        /**
         * No description
         *
         * @tags Profiles
         * @name ProfileMetadataUpdate
         * @summary Set profile metadata
         * @request PUT:/profile-metadata/{id}
         * @secure
         */
        this.profileMetadataUpdate = (id, data, query, params = {}) => this.request(Object.assign({ path: `/profile-metadata/${id}`, method: "PUT", query: query, body: data, secure: true, type: http_client_1.ContentType.Json }, params));
    }
}
exports.ProfileMetadata = ProfileMetadata;
