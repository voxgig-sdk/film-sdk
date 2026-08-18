-- Film SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "Film",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://filmapi.vercel.app",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["film"] = {},
      },
    },
    entity = {
      ["film"] = {
        ["fields"] = {
          {
            ["name"] = "brand",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "description",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "format120",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "format35mm",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "id",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "image",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "iso",
            ["req"] = true,
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "keyFeatures",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "model",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "processingType",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "type",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "film",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/films",
                ["parts"] = {
                  "api",
                  "films",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/films/{id}",
                ["parts"] = {
                  "api",
                  "films",
                  "{id}",
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
