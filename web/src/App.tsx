import { useState } from 'react';
import type { Note, CreateNoteDto } from './types';

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [formData, setFormData] = useState<CreateNoteDto>({
    title: '',
    content: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title.trim() || !formData.content.trim()) {
      return;
    }

    const newNote: Note = {
      id: notes.length + 1,
      title: formData.title,
      content: formData.content,
      createdAt: new Date().toISOString(),
    };

    setNotes([...notes, newNote]);
    setFormData({ title: '', content: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Notes App</h1>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
          />
        </div>
        
        <button type="submit">Add Note</button>
      </form>

      <div>
        <h2>Notes</h2>
        {notes.length === 0 ? (
          <p>No notes yet</p>
        ) : (
          <ul>
            {notes.map(note => (
              <li key={note.id}>
                <h3>{note.title}</h3>
                <p>{note.content}</p>
                <small>{new Date(note.createdAt).toLocaleString()}</small>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;

