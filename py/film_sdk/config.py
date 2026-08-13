# Film SDK configuration


def make_config():
    return {
        "main": {
            "name": "Film",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://filmapi.vercel.app",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "film": {},
            },
        },
        "entity": {
      "film": {
        "fields": [
          {
            "active": True,
            "name": "brand",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "description",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "format120",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "format35mm",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "image",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "iso",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "keyFeatures",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "model",
            "req": True,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "processingType",
            "req": False,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "type",
            "req": True,
            "type": "`$STRING`",
            "index$": 10,
          },
        ],
        "name": "film",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/films",
                "parts": [
                  "api",
                  "films",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/films/{id}",
                "parts": [
                  "api",
                  "films",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
