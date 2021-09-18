import { CreateProfileRequest, CreateProfileResponse, GetProfileResponse, UpdateProfileRequest, UpdateProfileResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Profile<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Profiles
     * @name ProfileDetail
     * @summary Get a profile by id
     * @request GET:/profile/{id}
     * @secure
     */
    profileDetail: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<GetProfileResponse, any>>;
    /**
     * No description
     *
     * @tags Profiles
     * @name ProfileUpdate
     * @summary Update a profile
     * @request PUT:/profile/{id}
     * @secure
     */
    profileUpdate: (id: number, data: UpdateProfileRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<UpdateProfileResponse, any>>;
    /**
     * No description
     *
     * @tags Profiles
     * @name ProfileDelete
     * @summary Archive a profile
     * @request DELETE:/profile/{id}
     * @secure
     */
    profileDelete: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<void, any>>;
    /**
     * No description
     *
     * @tags Profiles
     * @name ProfileCreate
     * @summary Create a new profile
     * @request POST:/profile
     * @secure
     */
    profileCreate: (data: CreateProfileRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<CreateProfileResponse, any>>;
}
