import type { Note } from '../../types';

interface NoteItemProps {
  note: Note;
}

export function NoteItem({ note }: NoteItemProps) {
  return (
    <li>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <small>{new Date(note.createdAt).toLocaleString()}</small>
    </li>
  );
}

