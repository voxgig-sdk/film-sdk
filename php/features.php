<?php
declare(strict_types=1);

// Film SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class FilmFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new FilmBaseFeature();
            case "test":
                return new FilmTestFeature();
            default:
                return new FilmBaseFeature();
        }
    }
}
