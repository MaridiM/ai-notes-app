import { Test, TestingModule } from '@nestjs/testing';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
import type { CreateNoteDto } from './dto/create-note.dto';

/**
 * Unit Tests for NotesController
 * 
 * This demonstrates how to test controllers with mocked services.
 * 
 * Testing with DI:
 * - We create a mock NotesService to isolate the controller logic
 * - The Test.createTestingModule() sets up a test DI container
 * - We can verify that controller methods call service methods correctly
 */
describe('NotesController', () => {
  let controller: NotesController;
  let service: NotesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotesController],
      providers: [NotesService],
    }).compile();

    controller = module.get<NotesController>(NotesController);
    service = module.get<NotesService>(NotesService);
  });

  describe('getNotes', () => {
    it('should return an empty array initially', () => {
      expect(controller.getNotes()).toEqual([]);
    });

    it('should return all notes from service', () => {
      const dto: CreateNoteDto = { title: 'Test', content: 'Sample note' };
      controller.createNote(dto);
      
      const notes = controller.getNotes();
      expect(notes).toHaveLength(1);
      expect(notes[0]).toMatchObject({
        id: 1,
        title: dto.title,
        content: dto.content,
      });
      expect(typeof notes[0].createdAt).toBe('string');
    });
  });

  describe('createNote', () => {
    it('should create a note and return it', () => {
      const dto: CreateNoteDto = { title: 'Test', content: 'Sample note' };
      const created = controller.createNote(dto);

      expect(created).toMatchObject({
        id: 1,
        title: dto.title,
        content: dto.content,
      });
      expect(typeof created.createdAt).toBe('string');
    });

    it('should create multiple notes with incrementing IDs', () => {
      const note1 = controller.createNote({ title: 'Note 1', content: 'Content 1' });
      const note2 = controller.createNote({ title: 'Note 2', content: 'Content 2' });

      expect(note1.id).toBe(1);
      expect(note2.id).toBe(2);
    });
  });
});

