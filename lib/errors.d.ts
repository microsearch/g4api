export declare type G4ApiError = {
    source: "network" | "http" | "auth" | "g4" | "validation" | "other";
    code?: string;
    message: string;
};
export declare function getG4ApiError(error: unknown): G4ApiError;
