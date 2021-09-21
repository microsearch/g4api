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
exports.UserPassword = void 0;
const http_client_1 = require("./http-client");
class UserPassword extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * No description
         *
         * @tags Internal
         * @name UserPasswordUpdate
         * @summary Reset a user password
         * @request PUT:/user-password
         * @secure
         */
        this.userPasswordUpdate = (data, params = {}) => this.request(Object.assign({ path: `/user-password`, method: "PUT", body: data, secure: true, type: http_client_1.ContentType.Json }, params));
    }
}
exports.UserPassword = UserPassword;
