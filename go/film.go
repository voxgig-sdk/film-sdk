package voxgigfilmsdk

import (
	"github.com/voxgig-sdk/film-sdk/go/core"
	"github.com/voxgig-sdk/film-sdk/go/entity"
	"github.com/voxgig-sdk/film-sdk/go/feature"
	_ "github.com/voxgig-sdk/film-sdk/go/utility"
)

// Type aliases preserve external API.
type FilmSDK = core.FilmSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type FilmEntity = core.FilmEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type FilmError = core.FilmError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewFilmEntityFunc = func(client *core.FilmSDK, entopts map[string]any) core.FilmEntity {
		return entity.NewFilmEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewFilmSDK = core.NewFilmSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewFilmSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *FilmSDK  { return NewFilmSDK(nil) }
func Test() *FilmSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
