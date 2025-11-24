import { Injectable } from '@nestjs/common';
import { CreateNoteDto, Note } from './notes.types';

@Injectable()
export class AppService {
  private readonly notes: Note[] = [];
  private nextId = 1;

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

  getNotes(): Note[] {
    return this.notes;
  }
}
