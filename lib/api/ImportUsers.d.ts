import { ImportUsersRequest, ImportUsersResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class ImportUsers<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags ImportExport
     * @name ImportUsersCreate
     * @summary Import users
     * @request POST:/import-users
     * @secure
     */
    importUsersCreate: (data: ImportUsersRequest, params?: RequestParams) => Promise<import("axios").AxiosResponse<ImportUsersResponse>>;
}
