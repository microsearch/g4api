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
exports.Profiles = void 0;
const http_client_1 = require("./http-client");
class Profiles extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * No description
         *
         * @tags Profiles
         * @name ProfilesList
         * @summary Get profile list for a tenant
         * @request GET:/profiles
         * @secure
         */
        this.profilesList = (params = {}) => this.request(Object.assign({ path: `/profiles`, method: "GET", secure: true, format: "json" }, params));
    }
}
exports.Profiles = Profiles;
