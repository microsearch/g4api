import { HttpClient, RequestParams } from "./http-client";
export declare class Sync<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Authentication
     * @name SyncCreate
     * @summary Process any pending G3 account synchronization requests
     * @request POST:/sync
     * @secure
     */
    syncCreate: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<void, any>>;
}
