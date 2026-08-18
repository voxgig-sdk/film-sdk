
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


  main = {
    name: 'Film',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
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
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "type": "`$STRING`"
        },
        {
          "name": "format120",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "format35mm",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "id",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "image",
          "type": "`$STRING`"
        },
        {
          "name": "iso",
          "req": true,
          "type": "`$INTEGER`"
        },
        {
          "name": "keyFeatures",
          "type": "`$ARRAY`"
        },
        {
          "name": "model",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "processingType",
          "type": "`$STRING`"
        },
        {
          "name": "type",
          "req": true,
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

