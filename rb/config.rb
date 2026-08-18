# Film SDK configuration

module FilmConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "Film",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://filmapi.vercel.app",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "film" => {},
        },
      },
      "entity" => {
        "film" => {
          "fields" => [
            {
              "name" => "brand",
              "req" => true,
              "type" => "`$STRING`",
            },
            {
              "name" => "description",
              "type" => "`$STRING`",
            },
            {
              "name" => "format120",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "format35mm",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "id",
              "req" => true,
              "type" => "`$STRING`",
            },
            {
              "name" => "image",
              "type" => "`$STRING`",
            },
            {
              "name" => "iso",
              "req" => true,
              "type" => "`$INTEGER`",
            },
            {
              "name" => "keyFeatures",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "model",
              "req" => true,
              "type" => "`$STRING`",
            },
            {
              "name" => "processingType",
              "type" => "`$STRING`",
            },
            {
              "name" => "type",
              "req" => true,
              "type" => "`$STRING`",
            },
          ],
          "name" => "film",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/films",
                  "parts" => [
                    "api",
                    "films",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/films/{id}",
                  "parts" => [
                    "api",
                    "films",
                    "{id}",
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    FilmFeatures.make_feature(name)
  end
end
