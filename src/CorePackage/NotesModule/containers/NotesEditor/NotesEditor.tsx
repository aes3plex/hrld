import { IRootState } from '../../../MainModule';
import { connect } from 'react-redux';
import { NotesEditorView } from '../../components/NotesEditorView/NotesEditorView';
import { getActiveNote } from '../../selectors/getActiveNote';

const mapStateToProps = (state: IRootState) => ({
    activeNote: getActiveNote(state),
});

export const NotesEditor = connect(mapStateToProps, null)(NotesEditorView);
