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
exports.RoleMetadata = void 0;
const http_client_1 = require("./http-client");
class RoleMetadata extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * No description
         *
         * @tags Roles
         * @name RoleMetadataDetail
         * @summary Get role metadata
         * @request GET:/role-metadata/{id}
         * @secure
         */
        this.roleMetadataDetail = (id, query, params = {}) => this.request(Object.assign({ path: `/role-metadata/${id}`, method: "GET", query: query, secure: true, format: "json" }, params));
        /**
         * No description
         *
         * @tags Roles
         * @name RoleMetadataUpdate
         * @summary Set role metadata
         * @request PUT:/role-metadata/{id}
         * @secure
         */
        this.roleMetadataUpdate = (id, data, query, params = {}) => this.request(Object.assign({ path: `/role-metadata/${id}`, method: "PUT", query: query, body: data, secure: true, type: http_client_1.ContentType.Json }, params));
    }
}
exports.RoleMetadata = RoleMetadata;
