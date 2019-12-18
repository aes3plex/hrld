import { Action, Middleware } from 'redux';
import { isPlainObject } from '../common/isPlainObject';

export const classActionMiddleware: Middleware<
    {},
    Action
    > = store => next => action => {
    if (isPlainObject(action) || typeof action === 'function') {
        return next(action);
    }

    return next({ ...action });
};

