import type { Note, CreateNoteDto } from '../types';

/**
 * Notes Service
 * 
 * Handles all note-related operations.
 * Currently uses in-memory storage, but structured for easy API integration.
 */
class NotesService {
  private notes: Note[] = [];
  private nextId = 1;

  /**
   * Fetches all notes
   * @returns Promise with array of notes
   */
  async getNotes(): Promise<Note[]> {
    // Simulate async operation (will be replaced with API call)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...this.notes]);
      }, 0);
    });
  }

  /**
   * Creates a new note
   * @param dto - Note data transfer object
   * @returns Promise with created note
   */
  async createNote(dto: CreateNoteDto): Promise<Note> {
    // Simulate async operation (will be replaced with API call)
    return new Promise((resolve) => {
      setTimeout(() => {
        const newNote: Note = {
          id: this.nextId++,
          title: dto.title,
          content: dto.content,
          createdAt: new Date().toISOString(),
        };
        this.notes.push(newNote);
        resolve(newNote);
      }, 0);
    });
  }
}

export const notesService = new NotesService();

