<?php
declare(strict_types=1);

// Film SDK utility: feature_add

class FilmFeatureAdd
{
    public static function call(FilmContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
