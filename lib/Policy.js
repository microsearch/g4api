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
exports.Policy = void 0;
const http_client_1 = require("./http-client");
class Policy extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * No description
         *
         * @tags Authentication
         * @name PasswordList
         * @summary Get a tenant's password policy
         * @request GET:/policy/password
         * @secure
         */
        this.passwordList = (params = {}) => this.request(Object.assign({ path: `/policy/password`, method: "GET", secure: true, format: "json" }, params));
    }
}
exports.Policy = Policy;
