# Film SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "Film",
            "slug": "film",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
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
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
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
            "name": "brand",
            "title": "Brand",
            "type": "`$STRING`",
            "req": True,
            "short": "Brand name of the film manufacturer",
          },
          {
            "name": "description",
            "title": "Description",
            "type": "`$STRING`",
            "short": "Detailed description of the film",
          },
          {
            "name": "format120",
            "title": "Format120",
            "type": "`$BOOLEAN`",
            "short": "Indicates if the film is available in 120 format",
          },
          {
            "name": "format35mm",
            "title": "Format35mm",
            "type": "`$BOOLEAN`",
            "short": "Indicates if the film is available in 35mm format",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique identifier for the film",
          },
          {
            "name": "image",
            "title": "Image",
            "type": "`$STRING`",
            "short": "URL to an image of the film",
            "format": "uri",
          },
          {
            "name": "iso",
            "title": "Iso",
            "type": "`$INTEGER`",
            "req": True,
            "short": "ISO rating of the film",
          },
          {
            "name": "keyFeatures",
            "title": "Key Features",
            "type": "`$ARRAY`",
            "short": "List of key features and characteristics of the film",
          },
          {
            "name": "model",
            "title": "Model",
            "type": "`$STRING`",
            "req": True,
            "short": "Film model name",
          },
          {
            "name": "processingType",
            "title": "Processing Type",
            "type": "`$STRING`",
            "short": "Type of chemical processing required for the film",
          },
          {
            "name": "type",
            "title": "Type",
            "type": "`$STRING`",
            "req": True,
            "short": "Specifies whether the film is color or black and white",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
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
                    "lit": "api",
                  },
                  {
                    "lit": "films",
                  },
                ],
                "parts": [
                  "api",
                  "films",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
              },
            ],
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
                    "lit": "api",
                  },
                  {
                    "lit": "films",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "api",
                  "films",
                  "{id}",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
