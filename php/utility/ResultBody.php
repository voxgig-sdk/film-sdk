<?php
declare(strict_types=1);

// Film SDK utility: result_body

class FilmResultBody
{
    public static function call(FilmContext $ctx): ?FilmResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
