<?php
declare(strict_types=1);

// Film SDK configuration

class FilmConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Film",
                "slug" => "film",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://filmapi.vercel.app",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "film" => [],
                ],
            ],
            "entity" => [
        'film' => [
          'fields' => [
            [
              'name' => 'brand',
              'req' => true,
              'short' => 'Brand name of the film manufacturer',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'description',
              'short' => 'Detailed description of the film',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'format120',
              'short' => 'Indicates if the film is available in 120 format',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'format35mm',
              'short' => 'Indicates if the film is available in 35mm format',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'id',
              'req' => true,
              'short' => 'Unique identifier for the film',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'image',
              'short' => 'URL to an image of the film',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'iso',
              'req' => true,
              'short' => 'ISO rating of the film',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'keyFeatures',
              'short' => 'List of key features and characteristics of the film',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'model',
              'req' => true,
              'short' => 'Film model name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'processingType',
              'short' => 'Type of chemical processing required for the film',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'type',
              'req' => true,
              'short' => 'Specifies whether the film is color or black and white',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'film',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/films',
                  'parts' => [
                    'api',
                    'films',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/films/{id}',
                  'parts' => [
                    'api',
                    'films',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return FilmFeatures::make_feature($name);
    }
}
