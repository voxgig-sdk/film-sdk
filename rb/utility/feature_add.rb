# Film SDK utility: feature_add
module FilmUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
