// Typed models for the Film SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Film is the typed data model for the film entity.
type Film struct {
	Brand string `json:"brand"`
	Description *string `json:"description,omitempty"`
	Format120 *bool `json:"format120,omitempty"`
	Format35mm *bool `json:"format35mm,omitempty"`
	Id string `json:"id"`
	Image *string `json:"image,omitempty"`
	Iso int `json:"iso"`
	KeyFeature *[]any `json:"key_feature,omitempty"`
	Model string `json:"model"`
	ProcessingType *string `json:"processing_type,omitempty"`
	Type string `json:"type"`
}

// FilmLoadMatch is the typed request payload for Film.LoadTyped.
type FilmLoadMatch struct {
	Id string `json:"id"`
}

// FilmListMatch is the typed request payload for Film.ListTyped.
type FilmListMatch struct {
	Brand *string `json:"brand,omitempty"`
	Description *string `json:"description,omitempty"`
	Format120 *bool `json:"format120,omitempty"`
	Format35mm *bool `json:"format35mm,omitempty"`
	Id *string `json:"id,omitempty"`
	Image *string `json:"image,omitempty"`
	Iso *int `json:"iso,omitempty"`
	KeyFeature *[]any `json:"key_feature,omitempty"`
	Model *string `json:"model,omitempty"`
	ProcessingType *string `json:"processing_type,omitempty"`
	Type *string `json:"type,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
