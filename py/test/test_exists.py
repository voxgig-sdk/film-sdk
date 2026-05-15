# ProjectName SDK exists test

import pytest
from film_sdk import FilmSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = FilmSDK.test(None, None)
        assert testsdk is not None
