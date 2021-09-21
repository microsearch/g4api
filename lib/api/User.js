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
exports.User = void 0;
const http_client_1 = require("./http-client");
class User extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * No description
         *
         * @tags Users
         * @name UserDetail
         * @summary Get user by user id
         * @request GET:/user/{id}
         * @secure
         */
        this.userDetail = (id, params = {}) => this.request(Object.assign({ path: `/user/${id}`, method: "GET", secure: true, format: "json" }, params));
        /**
         * No description
         *
         * @tags Users
         * @name UserUpdate
         * @summary Update existing user
         * @request PUT:/user/{id}
         * @secure
         */
        this.userUpdate = (id, data, params = {}) => this.request(Object.assign({ path: `/user/${id}`, method: "PUT", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
        /**
         * No description
         *
         * @tags Users
         * @name UserDelete
         * @summary Archive a user
         * @request DELETE:/user/{id}
         * @secure
         */
        this.userDelete = (id, params = {}) => this.request(Object.assign({ path: `/user/${id}`, method: "DELETE", secure: true }, params));
        /**
         * No description
         *
         * @tags Users
         * @name UserCreate
         * @summary Create new user
         * @request POST:/user
         * @secure
         */
        this.userCreate = (data, params = {}) => this.request(Object.assign({ path: `/user`, method: "POST", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
    }
}
exports.User = User;
