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
exports.Session = void 0;
const http_client_1 = require("./http-client");
class Session extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * No description
         *
         * @tags Sessions
         * @name SessionCreate
         * @summary Create a persistent session
         * @request POST:/session
         * @secure
         */
        this.sessionCreate = (data, params = {}) => this.request(Object.assign({ path: `/session`, method: "POST", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
        /**
         * No description
         *
         * @tags Sessions
         * @name SessionDetail
         * @summary Get session
         * @request GET:/session/{id}
         * @secure
         */
        this.sessionDetail = (id, params = {}) => this.request(Object.assign({ path: `/session/${id}`, method: "GET", secure: true, format: "json" }, params));
        /**
         * No description
         *
         * @tags Sessions
         * @name SessionUpdate
         * @summary Update session data
         * @request PUT:/session/{id}
         * @secure
         */
        this.sessionUpdate = (id, data, params = {}) => this.request(Object.assign({ path: `/session/${id}`, method: "PUT", body: data, secure: true, type: http_client_1.ContentType.Json }, params));
        /**
         * No description
         *
         * @tags Sessions
         * @name SessionDelete
         * @summary Delete session
         * @request DELETE:/session/{id}
         * @secure
         */
        this.sessionDelete = (id, params = {}) => this.request(Object.assign({ path: `/session/${id}`, method: "DELETE", secure: true }, params));
    }
}
exports.Session = Session;
