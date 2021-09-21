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
exports.UserClaim = void 0;
const http_client_1 = require("./http-client");
class UserClaim extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * No description
         *
         * @tags Internal
         * @name UserClaimUpdate
         * @summary Assign credentials to an anonymous account
         * @request PUT:/user-claim
         * @secure
         */
        this.userClaimUpdate = (data, params = {}) => this.request(Object.assign({ path: `/user-claim`, method: "PUT", body: data, secure: true, type: http_client_1.ContentType.Json }, params));
    }
}
exports.UserClaim = UserClaim;
