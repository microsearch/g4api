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
exports.Document = void 0;
const http_client_1 = require("./http-client");
class Document extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * No description
         *
         * @tags Documents
         * @name DocumentCreate
         * @summary Verify an uploaded document
         * @request POST:/document/{id}
         * @secure
         */
        this.documentCreate = (id, query, params = {}) => this.request(Object.assign({ path: `/document/${id}`, method: "POST", query: query, secure: true }, params));
    }
}
exports.Document = Document;
