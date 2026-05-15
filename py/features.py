# Film SDK feature factory

from feature.base_feature import FilmBaseFeature
from feature.test_feature import FilmTestFeature


def _make_feature(name):
    features = {
        "base": lambda: FilmBaseFeature(),
        "test": lambda: FilmTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
