
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
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
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
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
          "req": true,
          "short": "Brand name of the film manufacturer",
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "short": "Detailed description of the film",
          "type": "`$STRING`"
        },
        {
          "name": "format120",
          "short": "Indicates if the film is available in 120 format",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "format35mm",
          "short": "Indicates if the film is available in 35mm format",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "id",
          "req": true,
          "short": "Unique identifier for the film",
          "type": "`$STRING`"
        },
        {
          "name": "image",
          "short": "URL to an image of the film",
          "type": "`$STRING`"
        },
        {
          "name": "iso",
          "req": true,
          "short": "ISO rating of the film",
          "type": "`$INTEGER`"
        },
        {
          "name": "keyFeatures",
          "short": "List of key features and characteristics of the film",
          "type": "`$ARRAY`"
        },
        {
          "name": "model",
          "req": true,
          "short": "Film model name",
          "type": "`$STRING`"
        },
        {
          "name": "processingType",
          "short": "Type of chemical processing required for the film",
          "type": "`$STRING`"
        },
        {
          "name": "type",
          "req": true,
          "short": "Specifies whether the film is color or black and white",
          "type": "`$STRING`"
        }
      ],
      "name": "film",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/api/films",
              "parts": [
                "api",
                "films"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/films/{id}",
              "parts": [
                "api",
                "films",
                "{id}"
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
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
  config
}

