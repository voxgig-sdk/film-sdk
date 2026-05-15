# Film SDK utility: make_context
require_relative '../core/context'
module FilmUtilities
  MakeContext = ->(ctxmap, basectx) {
    FilmContext.new(ctxmap, basectx)
  }
end
