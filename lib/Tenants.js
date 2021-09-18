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
exports.Tenants = void 0;
const http_client_1 = require("./http-client");
class Tenants extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * No description
         *
         * @tags Tenants
         * @name TenantsList
         * @summary Get tenant list
         * @request GET:/tenants
         * @secure
         */
        this.tenantsList = (params = {}) => this.request(Object.assign({ path: `/tenants`, method: "GET", secure: true, format: "json" }, params));
        /**
         * No description
         *
         * @tags Tenants
         * @name TenantsDelete
         * @summary Purge archived tenants
         * @request DELETE:/tenants
         * @secure
         */
        this.tenantsDelete = (query, params = {}) => this.request(Object.assign({ path: `/tenants`, method: "DELETE", query: query, secure: true }, params));
    }
}
exports.Tenants = Tenants;
