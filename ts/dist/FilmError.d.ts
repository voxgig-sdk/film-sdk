import { Context } from './Context';
declare class FilmError extends Error {
    isFilmError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { FilmError };
