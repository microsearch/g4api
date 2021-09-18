import { AuthenticatedSessionResponse, CreateSessionRequest, GetSessionResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Session<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Sessions
     * @name SessionCreate
     * @summary Create a persistent session
     * @request POST:/session
     * @secure
     */
    sessionCreate: (data: CreateSessionRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<AuthenticatedSessionResponse, any>>;
    /**
     * No description
     *
     * @tags Sessions
     * @name SessionDetail
     * @summary Get session
     * @request GET:/session/{id}
     * @secure
     */
    sessionDetail: (id: string, params?: RequestParams) => Promise<import("./http-client").HttpResponse<GetSessionResponse, any>>;
    /**
     * No description
     *
     * @tags Sessions
     * @name SessionUpdate
     * @summary Update session data
     * @request PUT:/session/{id}
     * @secure
     */
    sessionUpdate: (id: string, data: any, params?: RequestParams) => Promise<import("./http-client").HttpResponse<void, any>>;
    /**
     * No description
     *
     * @tags Sessions
     * @name SessionDelete
     * @summary Delete session
     * @request DELETE:/session/{id}
     * @secure
     */
    sessionDelete: (id: string, params?: RequestParams) => Promise<import("./http-client").HttpResponse<void, any>>;
}
