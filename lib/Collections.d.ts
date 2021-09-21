import { GetCollectionsResponse, PostCollectionRequest, PostCollectionResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Collections<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Collections
     * @name CollectionsList
     * @request GET:/collections
     * @secure
     */
    collectionsList: (params?: RequestParams) => Promise<import("axios").AxiosResponse<GetCollectionsResponse>>;
    /**
     * No description
     *
     * @tags Collections
     * @name CollectionsCreate
     * @request POST:/collections
     * @secure
     */
    collectionsCreate: (data: PostCollectionRequest, params?: RequestParams) => Promise<import("axios").AxiosResponse<PostCollectionResponse>>;
}
