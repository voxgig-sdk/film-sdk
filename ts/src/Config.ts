
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Film',
        slug: "film",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://filmapi.vercel.app",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        film: {
        },
  
    }
  }


  entity = {
    "film": {
      "fields": [
        {
          "name": "brand",
          "title": "Brand",
          "type": "`$STRING`",
          "req": true,
          "short": "Brand name of the film manufacturer"
        },
        {
          "name": "description",
          "title": "Description",
          "type": "`$STRING`",
          "short": "Detailed description of the film"
        },
        {
          "name": "format120",
          "title": "Format120",
          "type": "`$BOOLEAN`",
          "short": "Indicates if the film is available in 120 format"
        },
        {
          "name": "format35mm",
          "title": "Format35mm",
          "type": "`$BOOLEAN`",
          "short": "Indicates if the film is available in 35mm format"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Unique identifier for the film"
        },
        {
          "name": "image",
          "title": "Image",
          "type": "`$STRING`",
          "short": "URL to an image of the film",
          "format": "uri"
        },
        {
          "name": "iso",
          "title": "Iso",
          "type": "`$INTEGER`",
          "req": true,
          "short": "ISO rating of the film"
        },
        {
          "name": "keyFeatures",
          "title": "Key Features",
          "type": "`$ARRAY`",
          "short": "List of key features and characteristics of the film"
        },
        {
          "name": "model",
          "title": "Model",
          "type": "`$STRING`",
          "req": true,
          "short": "Film model name"
        },
        {
          "name": "processingType",
          "title": "Processing Type",
          "type": "`$STRING`",
          "short": "Type of chemical processing required for the film"
        },
        {
          "name": "type",
          "title": "Type",
          "type": "`$STRING`",
          "req": true,
          "short": "Specifies whether the film is color or black and white"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "film",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/films",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "films"
                }
              ],
              "parts": [
                "api",
                "films"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/films/{id}",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "films"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "films",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

