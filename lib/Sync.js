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
exports.Sync = void 0;
const http_client_1 = require("./http-client");
class Sync extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * No description
         *
         * @tags Authentication
         * @name SyncCreate
         * @summary Process any pending G3 account synchronization requests
         * @request POST:/sync
         * @secure
         */
        this.syncCreate = (params = {}) => this.request(Object.assign({ path: `/sync`, method: "POST", secure: true }, params));
    }
}
exports.Sync = Sync;
