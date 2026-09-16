# Film SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module FilmFeatures
  def self.make_feature(name)
    case name
    when "base"
      FilmBaseFeature.new
    when "ratelimit"
      FilmRatelimitFeature.new
    when "retry"
      FilmRetryFeature.new
    when "test"
      FilmTestFeature.new
    when "timeout"
      FilmTimeoutFeature.new
    else
      FilmBaseFeature.new
    end
  end
end
