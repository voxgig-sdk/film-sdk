# Film SDK feature factory

from film_sdk.feature.base_feature import FilmBaseFeature
from film_sdk.feature.ratelimit_feature import FilmRatelimitFeature
from film_sdk.feature.retry_feature import FilmRetryFeature
from film_sdk.feature.test_feature import FilmTestFeature
from film_sdk.feature.timeout_feature import FilmTimeoutFeature


_FEATURES = {
    "base": lambda: FilmBaseFeature(),
    "ratelimit": lambda: FilmRatelimitFeature(),
    "retry": lambda: FilmRetryFeature(),
    "test": lambda: FilmTestFeature(),
    "timeout": lambda: FilmTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
