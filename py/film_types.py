# Typed models for the Film SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Film:
    brand: str
    id: str
    iso: int
    model: str
    type: str
    description: Optional[str] = None
    format120: Optional[bool] = None
    format35mm: Optional[bool] = None
    image: Optional[str] = None
    key_feature: Optional[list] = None
    processing_type: Optional[str] = None


@dataclass
class FilmLoadMatch:
    id: str


@dataclass
class FilmListMatch:
    brand: Optional[str] = None
    description: Optional[str] = None
    format120: Optional[bool] = None
    format35mm: Optional[bool] = None
    id: Optional[str] = None
    image: Optional[str] = None
    iso: Optional[int] = None
    key_feature: Optional[list] = None
    model: Optional[str] = None
    processing_type: Optional[str] = None
    type: Optional[str] = None

