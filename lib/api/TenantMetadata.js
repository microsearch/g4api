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
exports.TenantMetadata = void 0;
const http_client_1 = require("./http-client");
class TenantMetadata extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * No description
         *
         * @tags Users
         * @name TenantMetadataList
         * @summary Get tenant metadata
         * @request GET:/tenant-metadata
         * @secure
         */
        this.tenantMetadataList = (query, params = {}) => this.request(Object.assign({ path: `/tenant-metadata`, method: "GET", query: query, secure: true, format: "json" }, params));
        /**
         * No description
         *
         * @tags Users
         * @name TenantMetadataUpdate
         * @summary Set tenant metadata
         * @request PUT:/tenant-metadata
         * @secure
         */
        this.tenantMetadataUpdate = (data, query, params = {}) => this.request(Object.assign({ path: `/tenant-metadata`, method: "PUT", query: query, body: data, secure: true, type: http_client_1.ContentType.Json }, params));
    }
}
exports.TenantMetadata = TenantMetadata;
