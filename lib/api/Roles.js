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
exports.Roles = void 0;
const http_client_1 = require("./http-client");
class Roles extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * No description
         *
         * @tags Roles
         * @name RolesDetail
         * @summary Get role list for a tenant and scope
         * @request GET:/roles/{scope}
         * @secure
         */
        this.rolesDetail = (scope, params = {}) => this.request(Object.assign({ path: `/roles/${scope}`, method: "GET", secure: true, format: "json" }, params));
        /**
         * No description
         *
         * @tags Roles
         * @name RolesList
         * @summary Get role list for a tenant
         * @request GET:/roles
         * @secure
         */
        this.rolesList = (params = {}) => this.request(Object.assign({ path: `/roles`, method: "GET", secure: true, format: "json" }, params));
    }
}
exports.Roles = Roles;
