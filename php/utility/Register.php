<?php
declare(strict_types=1);

// Film SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

FilmUtility::setRegistrar(function (FilmUtility $u): void {
    $u->clean = [FilmClean::class, 'call'];
    $u->done = [FilmDone::class, 'call'];
    $u->make_error = [FilmMakeError::class, 'call'];
    $u->feature_add = [FilmFeatureAdd::class, 'call'];
    $u->feature_hook = [FilmFeatureHook::class, 'call'];
    $u->feature_init = [FilmFeatureInit::class, 'call'];
    $u->fetcher = [FilmFetcher::class, 'call'];
    $u->make_fetch_def = [FilmMakeFetchDef::class, 'call'];
    $u->make_context = [FilmMakeContext::class, 'call'];
    $u->make_options = [FilmMakeOptions::class, 'call'];
    $u->make_request = [FilmMakeRequest::class, 'call'];
    $u->make_response = [FilmMakeResponse::class, 'call'];
    $u->make_result = [FilmMakeResult::class, 'call'];
    $u->make_point = [FilmMakePoint::class, 'call'];
    $u->make_spec = [FilmMakeSpec::class, 'call'];
    $u->make_url = [FilmMakeUrl::class, 'call'];
    $u->param = [FilmParam::class, 'call'];
    $u->prepare_auth = [FilmPrepareAuth::class, 'call'];
    $u->prepare_body = [FilmPrepareBody::class, 'call'];
    $u->prepare_headers = [FilmPrepareHeaders::class, 'call'];
    $u->prepare_method = [FilmPrepareMethod::class, 'call'];
    $u->prepare_params = [FilmPrepareParams::class, 'call'];
    $u->prepare_path = [FilmPreparePath::class, 'call'];
    $u->prepare_query = [FilmPrepareQuery::class, 'call'];
    $u->result_basic = [FilmResultBasic::class, 'call'];
    $u->result_body = [FilmResultBody::class, 'call'];
    $u->result_headers = [FilmResultHeaders::class, 'call'];
    $u->transform_request = [FilmTransformRequest::class, 'call'];
    $u->transform_response = [FilmTransformResponse::class, 'call'];
});
