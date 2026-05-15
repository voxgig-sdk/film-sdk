package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewFilmEntityFunc func(client *FilmSDK, entopts map[string]any) FilmEntity

