import { ExportUsersResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class ExportUsers<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags ImportExport
     * @name ExportUsersCreate
     * @summary Export users
     * @request POST:/export-users
     * @secure
     */
    exportUsersCreate: (params?: RequestParams) => Promise<import("axios").AxiosResponse<ExportUsersResponse>>;
}
