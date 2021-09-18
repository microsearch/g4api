import { ImportUserRequest, ImportUserResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class UserImport<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Users
     * @name UserImportCreate
     * @summary Import a new user (DEPRECATED: use POST /import-users instead)
     * @request POST:/user-import
     * @secure
     */
    userImportCreate: (data: ImportUserRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ImportUserResponse, any>>;
}
