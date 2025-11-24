import { useState, useEffect } from 'react';
import type { Note, CreateNoteDto } from './types';
import { notesService } from './services/notes.service';
import { NoteForm } from './components/NoteForm/NoteForm';
import { NoteList } from './components/NoteList/NoteList';

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadNotes = async () => {
    try {
      const loadedNotes = await notesService.getNotes();
      setNotes(loadedNotes);
    } catch (error) {
      console.error('Failed to load notes:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadNotes();
  }, []);

  const handleCreateNote = async (dto: CreateNoteDto) => {
    await notesService.createNote(dto);
    // Reload notes from API to ensure consistency
    await loadNotes();
  };

  return (
    <div>
      <h1>Notes App</h1>
      
      <NoteForm onSubmit={handleCreateNote} />

      <div>
        <h2>Notes</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <NoteList notes={notes} />
        )}
      </div>
    </div>
  );
}

export default App;

