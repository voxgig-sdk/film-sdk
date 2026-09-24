"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilmError = void 0;
class FilmError extends Error {
    isFilmError = true;
    sdk = 'Film';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.FilmError = FilmError;
//# sourceMappingURL=FilmError.js.map