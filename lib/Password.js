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
exports.Password = void 0;
const http_client_1 = require("./http-client");
class Password extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * No description
         *
         * @tags Authentication
         * @name PasswordUpdate
         * @summary Change password
         * @request PUT:/password
         * @secure
         */
        this.passwordUpdate = (data, params = {}) => this.request(Object.assign({ path: `/password`, method: "PUT", body: data, secure: true, type: http_client_1.ContentType.Json }, params));
    }
}
exports.Password = Password;
