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
exports.ExportUsers = void 0;
const http_client_1 = require("./http-client");
class ExportUsers extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * No description
         *
         * @tags ImportExport
         * @name ExportUsersCreate
         * @summary Export users
         * @request POST:/export-users
         * @secure
         */
        this.exportUsersCreate = (params = {}) => this.request(Object.assign({ path: `/export-users`, method: "POST", secure: true, format: "json" }, params));
    }
}
exports.ExportUsers = ExportUsers;
