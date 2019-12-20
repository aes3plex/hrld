import reduceReducers, { Reducer } from 'reduce-reducers';
import { IRootState } from '../interfaces/IRootState';
import { SidebarTabType } from '../../SidebarModule/enums/SidebarTabType';
import { sidebarReducer } from '../../SidebarModule/reducers/sidebarReducer';
import { createStore, applyMiddleware, Reducer as ReduxReducer } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { classActionMiddleware } from '../middlewares/classActionMiddleware';

import thunk from 'redux-thunk';
import { generateID } from './generateID';
import { notesReducer } from '../../NotesModule/reducers/notesReducer';

const initialState: IRootState = {
    activeSidebarTab: SidebarTabType.NOTES,
    notes: [
        {
            id: generateID(),
            title: 'Lorem1',
            content: 'Ipsum1',
            createdAt: '12 Mar, 2019',
        },
        {
            id: generateID(),
            title: 'Lorem2',
            content: 'Ipsum2',
            createdAt: '19 Apr, 2020',
        },
        {
            id: generateID(),
            title: 'Lorem1',
            content: 'Ipsum1',
            createdAt: '12 Mar, 2019',
        },
    ],
    activeNoteId: null,
    selectedNotesIds: [],
};

const reducers = [sidebarReducer, notesReducer] as Array<Reducer<IRootState>>;

const rootReducer = reduceReducers(initialState, ...reducers) as ReduxReducer<
    IRootState
>;

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(classActionMiddleware, thunk)),
);
