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
exports.ImportUsers = void 0;
const http_client_1 = require("./http-client");
class ImportUsers extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * No description
         *
         * @tags ImportExport
         * @name ImportUsersCreate
         * @summary Import users
         * @request POST:/import-users
         * @secure
         */
        this.importUsersCreate = (data, params = {}) => this.request(Object.assign({ path: `/import-users`, method: "POST", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
    }
}
exports.ImportUsers = ImportUsers;
