<?php
declare(strict_types=1);

// Film SDK exists test

require_once __DIR__ . '/../film_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = FilmSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
