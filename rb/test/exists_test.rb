# Film SDK exists test

require "minitest/autorun"
require_relative "../Film_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = FilmSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
