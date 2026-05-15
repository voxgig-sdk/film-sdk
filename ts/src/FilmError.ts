
import { Context } from './Context'


class FilmError extends Error {

  isFilmError = true

  sdk = 'Film'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  FilmError
}

