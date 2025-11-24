import type { Note, CreateNoteDto } from '../types';
import { API_CONFIG } from '../config/api.config';

/**
 * Notes Service
 * 
 * Handles all note-related operations via API calls.
 */
class NotesService {
  private get apiUrl() {
    return `${API_CONFIG.baseUrl}${API_CONFIG.endpoints.notes}`;
  }

  /**
   * Fetches all notes from API
   * @returns Promise with array of notes
   * @throws Error if API request fails
   */
  async getNotes(): Promise<Note[]> {
    try {
      const response = await fetch(this.apiUrl);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch notes: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching notes:', error);
      throw error;
    }
  }

  /**
   * Creates a new note via API
   * @param dto - Note data transfer object
   * @returns Promise with created note
   * @throws Error if API request fails
   */
  async createNote(dto: CreateNoteDto): Promise<Note> {
    try {
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dto),
      });
      
      if (!response.ok) {
        throw new Error(`Failed to create note: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error creating note:', error);
      throw error;
    }
  }
}

export const notesService = new NotesService();

