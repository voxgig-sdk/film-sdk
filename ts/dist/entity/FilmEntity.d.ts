import { FilmEntityBase } from '../FilmEntityBase';
import type { FilmSDK } from '../FilmSDK';
import type { Control } from '../types';
import type { Film, FilmLoadMatch, FilmListMatch } from '../FilmTypes';
declare class FilmEntity extends FilmEntityBase<Film> {
    constructor(client: FilmSDK, entopts: any);
    make(this: FilmEntity): FilmEntity;
    load(this: any, reqmatch?: FilmLoadMatch, ctrl?: Control): Promise<FilmEntity>;
    list(this: any, reqmatch?: FilmListMatch, ctrl?: Control): Promise<FilmEntity[]>;
}
export { FilmEntity };
