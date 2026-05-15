-- Film SDK error

local FilmError = {}
FilmError.__index = FilmError


function FilmError.new(code, msg, ctx)
  local self = setmetatable({}, FilmError)
  self.is_sdk_error = true
  self.sdk = "Film"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function FilmError:error()
  return self.msg
end


function FilmError:__tostring()
  return self.msg
end


return FilmError
