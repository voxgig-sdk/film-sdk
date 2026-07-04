# frozen_string_literal: true

# Typed models for the Film SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Film entity data model.
#
# @!attribute [rw] brand
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] format120
#   @return [Boolean, nil]
#
# @!attribute [rw] format35mm
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] image
#   @return [String, nil]
#
# @!attribute [rw] iso
#   @return [Integer]
#
# @!attribute [rw] key_feature
#   @return [Array, nil]
#
# @!attribute [rw] model
#   @return [String]
#
# @!attribute [rw] processing_type
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String]
Film = Struct.new(
  :brand,
  :description,
  :format120,
  :format35mm,
  :id,
  :image,
  :iso,
  :key_feature,
  :model,
  :processing_type,
  :type,
  keyword_init: true
)

# Request payload for Film#load.
#
# @!attribute [rw] id
#   @return [String]
FilmLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Match filter for Film#list (any subset of Film fields).
#
# @!attribute [rw] brand
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] format120
#   @return [Boolean, nil]
#
# @!attribute [rw] format35mm
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] image
#   @return [String, nil]
#
# @!attribute [rw] iso
#   @return [Integer, nil]
#
# @!attribute [rw] key_feature
#   @return [Array, nil]
#
# @!attribute [rw] model
#   @return [String, nil]
#
# @!attribute [rw] processing_type
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
FilmListMatch = Struct.new(
  :brand,
  :description,
  :format120,
  :format35mm,
  :id,
  :image,
  :iso,
  :key_feature,
  :model,
  :processing_type,
  :type,
  keyword_init: true
)

