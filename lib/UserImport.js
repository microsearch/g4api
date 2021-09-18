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
exports.UserImport = void 0;
const http_client_1 = require("./http-client");
class UserImport extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * No description
         *
         * @tags Users
         * @name UserImportCreate
         * @summary Import a new user (DEPRECATED: use POST /import-users instead)
         * @request POST:/user-import
         * @secure
         */
        this.userImportCreate = (data, params = {}) => this.request(Object.assign({ path: `/user-import`, method: "POST", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
    }
}
exports.UserImport = UserImport;
