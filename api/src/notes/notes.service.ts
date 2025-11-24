import { Injectable } from '@nestjs/common';
import type { CreateNoteDto } from './dto/create-note.dto';
import type { Note } from '../types/notes.types';

/**
 * @Injectable Decorator
 * 
 * This decorator marks the class as a provider that can be injected into other classes.
 * NestJS uses this to manage the class lifecycle and enable Dependency Injection (DI).
 * 
 * When you mark a class with @Injectable:
 * - NestJS creates a singleton instance by default (shared across the app)
 * - The class can be injected into constructors of other classes
 * - NestJS handles the instantiation and dependency resolution automatically
 */
@Injectable()
export class NotesService {
  /**
   * In-memory storage for notes.
   * In a real application, this would be replaced with a database.
   */
  private readonly notes: Note[] = [];
  private nextId = 1;

  /**
   * Creates a new note and stores it in memory.
   * 
   * @param payload - DTO (Data Transfer Object) containing note data
   * @returns The created note with generated ID and timestamp
   * 
   * DTOs (Data Transfer Objects):
   * - DTOs define the shape of data transferred between layers
   * - They provide type safety and validation boundaries
   * - CreateNoteDto ensures only valid data (title, content) enters the service
   * - This separates API contract from internal domain models
   */
  createNote(payload: CreateNoteDto): Note {
    const note: Note = {
      id: this.nextId++,
      title: payload.title,
      content: payload.content,
      createdAt: new Date().toISOString(),
    };
    this.notes.push(note);
    return note;
  }

  /**
   * Retrieves all stored notes.
   * 
   * @returns Array of all notes
   */
  getNotes(): Note[] {
    return this.notes;
  }
}

