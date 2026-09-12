export interface Film {
    brand: string;
    description?: string;
    format120?: boolean;
    format35mm?: boolean;
    id: string;
    image?: string;
    iso: number;
    keyFeatures?: any[];
    model: string;
    processingType?: string;
    type: string;
}
export interface FilmLoadMatch {
    id: string;
}
export interface FilmListMatch {
    brand?: string;
    description?: string;
    format120?: boolean;
    format35mm?: boolean;
    id?: string;
    image?: string;
    iso?: number;
    keyFeatures?: any[];
    model?: string;
    processingType?: string;
    type?: string;
}
