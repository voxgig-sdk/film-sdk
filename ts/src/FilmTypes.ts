// Typed models for the Film SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Film {
  brand: string
  description?: string
  format120?: boolean
  format35mm?: boolean
  id: string
  image?: string
  iso: number
  key_feature?: any[]
  model: string
  processing_type?: string
  type: string
}

export interface FilmLoadMatch {
  id: string
}

export interface FilmListMatch {
  brand?: string
  description?: string
  format120?: boolean
  format35mm?: boolean
  id?: string
  image?: string
  iso?: number
  key_feature?: any[]
  model?: string
  processing_type?: string
  type?: string
}

