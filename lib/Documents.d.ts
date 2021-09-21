import { LoadDocumentRequest, LoadDocumentResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Documents<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Documents
     * @name DocumentsCreate
     * @summary Prepare for document upload
     * @request POST:/documents
     * @secure
     */
    documentsCreate: (data: LoadDocumentRequest, params?: RequestParams) => Promise<import("axios").AxiosResponse<LoadDocumentResponse>>;
}
