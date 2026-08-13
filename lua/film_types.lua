-- Typed models for the Film SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Film
---@field brand string
---@field description? string
---@field format120? boolean
---@field format35mm? boolean
---@field id string
---@field image? string
---@field iso number
---@field keyFeatures? table
---@field model string
---@field processingType? string
---@field type string

---@class FilmLoadMatch
---@field id string

---@class FilmListMatch
---@field brand? string
---@field description? string
---@field format120? boolean
---@field format35mm? boolean
---@field id? string
---@field image? string
---@field iso? number
---@field keyFeatures? table
---@field model? string
---@field processingType? string
---@field type? string

local M = {}

return M
