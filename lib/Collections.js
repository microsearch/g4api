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
exports.Collections = void 0;
const http_client_1 = require("./http-client");
class Collections extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * No description
         *
         * @tags Collections
         * @name CollectionsList
         * @request GET:/collections
         * @secure
         */
        this.collectionsList = (params = {}) => this.request(Object.assign({ path: `/collections`, method: "GET", secure: true, format: "json" }, params));
        /**
         * No description
         *
         * @tags Collections
         * @name CollectionsCreate
         * @request POST:/collections
         * @secure
         */
        this.collectionsCreate = (data, params = {}) => this.request(Object.assign({ path: `/collections`, method: "POST", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
    }
}
exports.Collections = Collections;
