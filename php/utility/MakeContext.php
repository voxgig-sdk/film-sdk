<?php
declare(strict_types=1);

// Film SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class FilmMakeContext
{
    public static function call(array $ctxmap, ?FilmContext $basectx): FilmContext
    {
        return new FilmContext($ctxmap, $basectx);
    }
}
