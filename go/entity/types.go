// Typed models for the Film SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/film-sdk/go/core"
)

// Film is the typed data model for the film entity.
type Film struct {
	Brand string `json:"brand"`
	Description *string `json:"description,omitempty"`
	Format120 *bool `json:"format120,omitempty"`
	Format35mm *bool `json:"format35mm,omitempty"`
	Id string `json:"id"`
	Image *string `json:"image,omitempty"`
	Iso int `json:"iso"`
	KeyFeatures *[]any `json:"keyFeatures,omitempty"`
	Model string `json:"model"`
	ProcessingType *string `json:"processingType,omitempty"`
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
	KeyFeatures *[]any `json:"keyFeatures,omitempty"`
	Model *string `json:"model,omitempty"`
	ProcessingType *string `json:"processingType,omitempty"`
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

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
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

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
