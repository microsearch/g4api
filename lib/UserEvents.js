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
exports.UserEvents = void 0;
const http_client_1 = require("./http-client");
class UserEvents extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Returns a list of user events.
         *
         * @tags Users
         * @name UserEventsCreate
         * @summary Get user events
         * @request POST:/user-events
         * @secure
         */
        this.userEventsCreate = (data, params = {}) => this.request(Object.assign({ path: `/user-events`, method: "POST", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
    }
}
exports.UserEvents = UserEvents;
