package = "voxgig-sdk-film"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/film-sdk.git"
}
description = {
  summary = "Film SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["film_sdk"] = "film_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
