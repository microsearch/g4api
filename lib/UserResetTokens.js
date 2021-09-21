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
exports.UserResetTokens = void 0;
const http_client_1 = require("./http-client");
class UserResetTokens extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * No description
         *
         * @tags Internal
         * @name UserResetTokensList
         * @summary Request user password reset tokens
         * @request GET:/user-reset-tokens
         * @secure
         */
        this.userResetTokensList = (query, params = {}) => this.request(Object.assign({ path: `/user-reset-tokens`, method: "GET", query: query, secure: true, format: "json" }, params));
    }
}
exports.UserResetTokens = UserResetTokens;
