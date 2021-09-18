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
exports.UserClaimTokens = void 0;
const http_client_1 = require("./http-client");
class UserClaimTokens extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * No description
         *
         * @tags Internal
         * @name UserClaimTokensList
         * @summary Request user claim tokens
         * @request GET:/user-claim-tokens
         * @secure
         */
        this.userClaimTokensList = (query, params = {}) => this.request(Object.assign({ path: `/user-claim-tokens`, method: "GET", query: query, secure: true, format: "json" }, params));
    }
}
exports.UserClaimTokens = UserClaimTokens;
