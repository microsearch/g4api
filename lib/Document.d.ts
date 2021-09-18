import { HttpClient, RequestParams } from "./http-client";
export declare class Document<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Documents
     * @name DocumentCreate
     * @summary Verify an uploaded document
     * @request POST:/document/{id}
     * @secure
     */
    documentCreate: (id: number, query?: {
        jobid?: string | undefined;
    } | undefined, params?: RequestParams) => Promise<import("./http-client").HttpResponse<void, any>>;
}
