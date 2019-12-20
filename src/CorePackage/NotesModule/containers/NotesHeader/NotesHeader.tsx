import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AddNoteAction } from '../../actions/AddNoteAction';
import { NotesHeaderView } from '../../components/NotesHeaderView/NotesHeaderView';

const mapDispatchToProps = (dispatch: Dispatch<AddNoteAction>) => ({
    addNote: () => dispatch(new AddNoteAction()),
});

export const NotesHeader = connect(null, mapDispatchToProps)(NotesHeaderView);
