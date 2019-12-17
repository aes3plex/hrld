import reduceReducers, { Reducer } from 'reduce-reducers';
import { IRootState } from '../interfaces/IRootState';
import { SidebarTab } from '../../SidebarModule/enums/SidebarTab';
import { sidebarReducer } from '../../SidebarModule/reducers/sidebarReducer';
import { createStore, applyMiddleware, Reducer as ReduxReducer } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { classActionMiddleware } from '../middlewares/classActionMiddleware';

import thunk from 'redux-thunk';

const initialState: IRootState = {
    activeSidebarTab: SidebarTab.NOTES,
};

const reducers = [sidebarReducer] as Array<Reducer<IRootState>>;

const rootReducer = reduceReducers(initialState, ...reducers) as ReduxReducer<
    IRootState
>;

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(classActionMiddleware, thunk)),
);
