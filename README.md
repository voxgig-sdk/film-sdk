# Film SDK

Browse a catalogue of 35mm and 120 photographic films with brand, ISO, colour/B&W and processing details

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Film API

The Film API is a small community catalogue of photographic still films, served from [filmapi.vercel.app](https://filmapi.vercel.app). It focuses on analogue stocks for 35mm and 120 (medium format) cameras.

What you get from the API:

- Film brand and product name
- ISO (film speed) rating
- Format availability flags for 35mm and 120
- Colour vs black-and-white designation
- Processing type (for example `c-41`, `e-6`, `b&w`)
- A product image URL plus descriptive text and key feature notes

The service exposes a single REST endpoint, `GET /api/films`, which returns the full catalogue as a JSON array. No authentication is documented. CORS is reported as disabled, so calls from a browser will typically need a server-side proxy.

## Try it

**TypeScript**
```bash
npm install film
```

**Python**
```bash
pip install film-sdk
```

**PHP**
```bash
composer require voxgig/film-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/film-sdk/go
```

**Ruby**
```bash
gem install film-sdk
```

**Lua**
```bash
luarocks install film-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { FilmSDK } from 'film'

const client = new FilmSDK({})

// List all films
const films = await client.Film().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o film-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "film": {
      "command": "/abs/path/to/film-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **Film** | A photographic still film stock, listed with brand, name, ISO, format flags, colour/B&W, and processing details; the catalogue is returned by `GET /api/films`. | `/api/films` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from film_sdk import FilmSDK

client = FilmSDK({})

# List all films
films, err = client.Film(None).list(None, None)

# Load a specific film
film, err = client.Film(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'film_sdk.php';

$client = new FilmSDK([]);

// List all films
[$films, $err] = $client->Film(null)->list(null, null);

// Load a specific film
[$film, $err] = $client->Film(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/film-sdk/go"

client := sdk.NewFilmSDK(map[string]any{})

// List all films
films, err := client.Film(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "Film_sdk"

client = FilmSDK.new({})

# List all films
films, err = client.Film(nil).list(nil, nil)

# Load a specific film
film, err = client.Film(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("film_sdk")

local client = sdk.new({})

-- List all films
local films, err = client:Film(nil):list(nil, nil)

-- Load a specific film
local film, err = client:Film(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = FilmSDK.test()
const result = await client.Film().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = FilmSDK.test(None, None)
result, err = client.Film(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = FilmSDK::test(null, null);
[$result, $err] = $client->Film(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Film(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = FilmSDK.test(nil, nil)
result, err = client.Film(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Film(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Film API

- Upstream: [https://filmapi.vercel.app](https://filmapi.vercel.app)

- The provider publishes no explicit licence or terms of use.
- Treat film names, brand names, and product imagery as the property of their respective manufacturers.
- Confirm acceptable use with the provider before relying on the data commercially.

---

Generated from the Film API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
