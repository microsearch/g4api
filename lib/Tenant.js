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
exports.Tenant = void 0;
const http_client_1 = require("./http-client");
class Tenant extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * No description
         *
         * @tags Tenants
         * @name TenantDetail
         * @summary Get tenant by id
         * @request GET:/tenant/{id}
         * @secure
         */
        this.tenantDetail = (id, params = {}) => this.request(Object.assign({ path: `/tenant/${id}`, method: "GET", secure: true, format: "json" }, params));
        /**
         * No description
         *
         * @tags Tenants
         * @name TenantDelete
         * @summary Archive a tenant
         * @request DELETE:/tenant/{id}
         * @secure
         */
        this.tenantDelete = (id, params = {}) => this.request(Object.assign({ path: `/tenant/${id}`, method: "DELETE", secure: true }, params));
        /**
         * No description
         *
         * @tags Tenants
         * @name TenantCreate
         * @summary Create a new tenant
         * @request POST:/tenant
         * @secure
         */
        this.tenantCreate = (data, params = {}) => this.request(Object.assign({ path: `/tenant`, method: "POST", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
    }
}
exports.Tenant = Tenant;
