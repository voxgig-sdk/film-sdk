# Film SDK utility: make_context

from projectname_sdk.core.context import FilmContext


def make_context_util(ctxmap, basectx):
    return FilmContext(ctxmap, basectx)
