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
exports.Role = void 0;
const http_client_1 = require("./http-client");
class Role extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * No description
         *
         * @tags Roles
         * @name RoleDetail
         * @summary Get a role by id
         * @request GET:/role/{id}
         * @secure
         */
        this.roleDetail = (id, params = {}) => this.request(Object.assign({ path: `/role/${id}`, method: "GET", secure: true, format: "json" }, params));
        /**
         * No description
         *
         * @tags Roles
         * @name RoleUpdate
         * @summary Update a role
         * @request PUT:/role/{id}
         * @secure
         */
        this.roleUpdate = (id, data, params = {}) => this.request(Object.assign({ path: `/role/${id}`, method: "PUT", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
        /**
         * No description
         *
         * @tags Roles
         * @name RoleDelete
         * @summary Archive a role
         * @request DELETE:/role/{id}
         * @secure
         */
        this.roleDelete = (id, params = {}) => this.request(Object.assign({ path: `/role/${id}`, method: "DELETE", secure: true }, params));
        /**
         * No description
         *
         * @tags Roles
         * @name RoleCreate
         * @summary Create a new role
         * @request POST:/role
         * @secure
         */
        this.roleCreate = (data, params = {}) => this.request(Object.assign({ path: `/role`, method: "POST", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
    }
}
exports.Role = Role;
