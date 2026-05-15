# Film SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module FilmFeatures
  def self.make_feature(name)
    case name
    when "base"
      FilmBaseFeature.new
    when "test"
      FilmTestFeature.new
    else
      FilmBaseFeature.new
    end
  end
end
