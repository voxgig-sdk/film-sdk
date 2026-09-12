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
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
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
            "req": True,
            "short": "Brand name of the film manufacturer",
            "type": "`$STRING`",
          },
          {
            "name": "description",
            "short": "Detailed description of the film",
            "type": "`$STRING`",
          },
          {
            "name": "format120",
            "short": "Indicates if the film is available in 120 format",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "format35mm",
            "short": "Indicates if the film is available in 35mm format",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "id",
            "req": True,
            "short": "Unique identifier for the film",
            "type": "`$STRING`",
          },
          {
            "format": "uri",
            "name": "image",
            "short": "URL to an image of the film",
            "type": "`$STRING`",
          },
          {
            "name": "iso",
            "req": True,
            "short": "ISO rating of the film",
            "type": "`$INTEGER`",
          },
          {
            "name": "keyFeatures",
            "short": "List of key features and characteristics of the film",
            "type": "`$ARRAY`",
          },
          {
            "name": "model",
            "req": True,
            "short": "Film model name",
            "type": "`$STRING`",
          },
          {
            "name": "processingType",
            "short": "Type of chemical processing required for the film",
            "type": "`$STRING`",
          },
          {
            "name": "type",
            "req": True,
            "short": "Specifies whether the film is color or black and white",
            "type": "`$STRING`",
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
                "args": {},
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
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "api",
                  "films",
                ],
              },
            ],
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
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
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "api",
                  "films",
                  "{id}",
                ],
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
