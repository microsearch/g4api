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
exports.Profile = void 0;
const http_client_1 = require("./http-client");
class Profile extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * No description
         *
         * @tags Profiles
         * @name ProfileDetail
         * @summary Get a profile by id
         * @request GET:/profile/{id}
         * @secure
         */
        this.profileDetail = (id, params = {}) => this.request(Object.assign({ path: `/profile/${id}`, method: "GET", secure: true, format: "json" }, params));
        /**
         * No description
         *
         * @tags Profiles
         * @name ProfileUpdate
         * @summary Update a profile
         * @request PUT:/profile/{id}
         * @secure
         */
        this.profileUpdate = (id, data, params = {}) => this.request(Object.assign({ path: `/profile/${id}`, method: "PUT", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
        /**
         * No description
         *
         * @tags Profiles
         * @name ProfileDelete
         * @summary Archive a profile
         * @request DELETE:/profile/{id}
         * @secure
         */
        this.profileDelete = (id, params = {}) => this.request(Object.assign({ path: `/profile/${id}`, method: "DELETE", secure: true }, params));
        /**
         * No description
         *
         * @tags Profiles
         * @name ProfileCreate
         * @summary Create a new profile
         * @request POST:/profile
         * @secure
         */
        this.profileCreate = (data, params = {}) => this.request(Object.assign({ path: `/profile`, method: "POST", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
    }
}
exports.Profile = Profile;
