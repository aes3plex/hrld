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
            title: 'Radolf table investigating',
            content: 'Lorem ipsum dolor sit amet, cum et libris essent delenit. Veri nemore epicurei ea vix, sea graeco alterum adversarium eu. Est impetus epicurei ad, purto iusto no eam. Accusam voluptatibus sea cu, putent admodum et vel, est modus principes rationibus in. Nam summo persius tractatos ea, affert graece graeci ut mei. Ea pro partem officiis probatus.\n' +
                '\n' +
                'Vix ea duis nulla, eu lorem omittantur quo, ei sit modo munere mnesarchum. Vim eius vitae tollit no, at putant vidisse mea, perpetua petentium eos at. Apeirian torquatos ut duo, mel id affert veniam tamquam. Cu cum legendos expetendis, eius nihil corrumpit eu vis. Esse nostrud inermis te sed, mei doming malorum debitis ei, iisque bonorum conceptam usu ut.',
            createdAt: '12 Mar, 2019',
        },
        {
            id: generateID(),
            title: 'Cheep mushrooms from grandma Doonya',
            content: 'Vix ea duis nulla, eu lorem omittantur quo, ei sit modo munere mnesarchum. Vim eius vitae tollit no, at putant vidisse mea, perpetua petentium eos at. Apeirian torquatos ut duo, mel id affert veniam tamquam. Cu cum legendos expetendis, eius nihil corrumpit eu vis. Esse nostrud inermis te sed, mei doming malorum debitis ei, iisque bonorum conceptam usu ut.\n' +
                '\n' +
                'Suas ocurreret nam no. In habemus civibus vim. Fuisset ancillae recteque ius no. Eu quo option sensibus eloquentiam, eros insolens ex his.\n',
            createdAt: '19 Apr, 2020',
        },
        {
            id: generateID(),
            title: 'Another inactive article',
            content: 'Lorem ipsum dolor sit amet, cum et libris essent delenit. Veri nemore epicurei ea vix, sea graeco alterum adversarium eu. Est impetus epicurei ad, purto iusto no eam. Accusam voluptatibus sea cu, putent admodum et vel, est modus principes rationibus in. Nam summo persius tractatos ea, affert graece graeci ut mei. Ea pro partem officiis probatus.\n',
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
