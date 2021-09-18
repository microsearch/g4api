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
exports.Admins = void 0;
const http_client_1 = require("./http-client");
class Admins extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Returns the list of all admin user records.
         *
         * @tags Admins
         * @name AdminsList
         * @summary Get admin user list
         * @request GET:/admins
         * @secure
         */
        this.adminsList = (params = {}) => this.request(Object.assign({ path: `/admins`, method: "GET", secure: true, format: "json" }, params));
    }
}
exports.Admins = Admins;
