package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Film",
			"slug": "film",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://filmapi.vercel.app",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"film": map[string]any{},
			},
		},
		"entity": map[string]any{
			"film": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "brand",
						"req": true,
						"short": "Brand name of the film manufacturer",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"short": "Detailed description of the film",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "format120",
						"short": "Indicates if the film is available in 120 format",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "format35mm",
						"short": "Indicates if the film is available in 35mm format",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Unique identifier for the film",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "image",
						"short": "URL to an image of the film",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "iso",
						"req": true,
						"short": "ISO rating of the film",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "keyFeatures",
						"short": "List of key features and characteristics of the film",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "model",
						"req": true,
						"short": "Film model name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "processingType",
						"short": "Type of chemical processing required for the film",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"req": true,
						"short": "Specifies whether the film is color or black and white",
						"type": "`$STRING`",
					},
				},
				"name": "film",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/films",
								"parts": []any{
									"api",
									"films",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/films/{id}",
								"parts": []any{
									"api",
									"films",
									"{id}",
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
