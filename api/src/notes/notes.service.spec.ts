import { Test, TestingModule } from '@nestjs/testing';
import { NotesService } from './notes.service';
import type { CreateNoteDto } from './dto/create-note.dto';

/**
 * Unit Tests for NotesService
 * 
 * This tests the business logic in isolation from HTTP concerns.
 * Services are easier to test because they're pure TypeScript classes.
 */
describe('NotesService', () => {
  let service: NotesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotesService],
    }).compile();

    service = module.get<NotesService>(NotesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getNotes', () => {
    it('should return an empty array initially', () => {
      expect(service.getNotes()).toEqual([]);
    });
  });

  describe('createNote', () => {
    it('should create a note with auto-generated ID and timestamp', () => {
      const dto: CreateNoteDto = { title: 'Test', content: 'Sample note' };
      const note = service.createNote(dto);

      expect(note).toMatchObject({
        id: 1,
        title: dto.title,
        content: dto.content,
      });
      expect(typeof note.createdAt).toBe('string');
      expect(new Date(note.createdAt).getTime()).toBeLessThanOrEqual(Date.now());
    });

    it('should increment IDs for multiple notes', () => {
      const note1 = service.createNote({ title: 'Note 1', content: 'Content 1' });
      const note2 = service.createNote({ title: 'Note 2', content: 'Content 2' });

      expect(note1.id).toBe(1);
      expect(note2.id).toBe(2);
    });

    it('should store created notes', () => {
      const dto: CreateNoteDto = { title: 'Test', content: 'Sample note' };
      const note = service.createNote(dto);

      const allNotes = service.getNotes();
      expect(allNotes).toHaveLength(1);
      expect(allNotes[0]).toEqual(note);
    });
  });
});

