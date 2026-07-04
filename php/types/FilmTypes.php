<?php
declare(strict_types=1);

// Typed models for the Film SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Film entity data model. */
class Film
{
    public string $brand;
    public ?string $description = null;
    public ?bool $format120 = null;
    public ?bool $format35mm = null;
    public string $id;
    public ?string $image = null;
    public int $iso;
    public ?array $key_feature = null;
    public string $model;
    public ?string $processing_type = null;
    public string $type;
}

/** Request payload for Film#load. */
class FilmLoadMatch
{
    public string $id;
}

/** Match filter for Film#list (any subset of Film fields). */
class FilmListMatch
{
    public ?string $brand = null;
    public ?string $description = null;
    public ?bool $format120 = null;
    public ?bool $format35mm = null;
    public ?string $id = null;
    public ?string $image = null;
    public ?int $iso = null;
    public ?array $key_feature = null;
    public ?string $model = null;
    public ?string $processing_type = null;
    public ?string $type = null;
}

