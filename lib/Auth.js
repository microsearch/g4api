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
exports.Auth = void 0;
const http_client_1 = require("./http-client");
class Auth extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * No description
         *
         * @tags Authentication
         * @name AuthCreate
         * @summary Authenticate user credentials
         * @request POST:/auth
         * @secure
         */
        this.authCreate = (data, params = {}) => this.request(Object.assign({ path: `/auth`, method: "POST", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
        /**
         * No description
         *
         * @tags Authentication
         * @name AuthList
         * @summary Refresh authentication token
         * @request GET:/auth
         * @secure
         */
        this.authList = (params = {}) => this.request(Object.assign({ path: `/auth`, method: "GET", secure: true, format: "json" }, params));
    }
}
exports.Auth = Auth;
