import { IRootState } from '../../../MainModule';
import { connect } from 'react-redux';
import { NotesTilesView } from '../../components/NotesTilesView/NotesTilesView';
import { getNotesList } from '../../selectors/getNotesList';
import { getActiveNoteId } from '../../selectors/getActiveNoteId';
import { Dispatch } from 'redux';
import { SetActiveNoteAction } from '../../actions/SetActiveNoteAction';

const mapStateToProps = (state: IRootState) => ({
    notes: getNotesList(state),
    activeNoteId: getActiveNoteId(state),
});

const mapDispatchToProps = (dispatch: Dispatch<SetActiveNoteAction>) => ({
    setActiveNote: (noteId: string) =>
        dispatch(new SetActiveNoteAction(noteId)),
});

export const NotesTiles = connect(
    mapStateToProps,
    mapDispatchToProps,
)(NotesTilesView);
