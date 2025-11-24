import type { Note } from '../../types';
import { NoteItem } from '../NoteItem/NoteItem';

interface NoteListProps {
  notes: Note[];
}

export function NoteList({ notes }: NoteListProps) {
  if (notes.length === 0) {
    return <p>No notes yet</p>;
  }

  return (
    <ul>
      {notes.map(note => (
        <NoteItem key={note.id} note={note} />
      ))}
    </ul>
  );
}

