<?php
declare(strict_types=1);

// Film SDK utility: prepare_body

class FilmPrepareBody
{
    public static function call(FilmContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
