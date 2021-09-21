import { GetUserEventsRequest, GetUserEventsResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class UserEvents<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * @description Returns a list of user events.
     *
     * @tags Users
     * @name UserEventsCreate
     * @summary Get user events
     * @request POST:/user-events
     * @secure
     */
    userEventsCreate: (data: GetUserEventsRequest, params?: RequestParams) => Promise<import("axios").AxiosResponse<GetUserEventsResponse>>;
}
