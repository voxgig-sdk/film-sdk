# Typed models for the Film SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class FilmRequired(TypedDict):
    brand: str
    id: str
    iso: int
    model: str
    type: str


class Film(FilmRequired, total=False):
    description: str
    format120: bool
    format35mm: bool
    image: str
    keyFeatures: list
    processingType: str


class FilmLoadMatch(TypedDict):
    id: str


class FilmListMatch(TypedDict, total=False):
    brand: str
    description: str
    format120: bool
    format35mm: bool
    id: str
    image: str
    iso: int
    keyFeatures: list
    model: str
    processingType: str
    type: str
