<?php
declare(strict_types=1);

// Film SDK utility: result_headers

class FilmResultHeaders
{
    public static function call(FilmContext $ctx): ?FilmResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
