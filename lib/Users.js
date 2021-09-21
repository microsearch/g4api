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
exports.Users = void 0;
const http_client_1 = require("./http-client");
class Users extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Returns the list of user records which match the specified (optional) criteria.
         *
         * @tags Users
         * @name UsersList
         * @summary Get user list (DEPRECATED: use POST /users instead)
         * @request GET:/users
         * @secure
         */
        this.usersList = (query, params = {}) => this.request(Object.assign({ path: `/users`, method: "GET", query: query, secure: true, format: "json" }, params));
        /**
         * @description Returns the list of user records which match the specified (optional) criteria.
         *
         * @tags Users
         * @name UsersCreate
         * @summary Get user list
         * @request POST:/users
         * @secure
         */
        this.usersCreate = (data, params = {}) => this.request(Object.assign({ path: `/users`, method: "POST", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
    }
}
exports.Users = Users;
