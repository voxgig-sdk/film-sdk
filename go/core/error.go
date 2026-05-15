package core

type FilmError struct {
	IsFilmError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewFilmError(code string, msg string, ctx *Context) *FilmError {
	return &FilmError{
		IsFilmError: true,
		Sdk:              "Film",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *FilmError) Error() string {
	return e.Msg
}
