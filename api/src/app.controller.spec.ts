import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreateNoteDto } from './notes.types';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('notes', () => {
    it('should start empty', () => {
      expect(appController.getNotes()).toEqual([]);
    });

    it('should create and list notes', () => {
      const dto: CreateNoteDto = { title: 'Test', content: 'Sample note' };
      const created = appController.createNote(dto);

      expect(created).toMatchObject({
        id: 1,
        title: dto.title,
        content: dto.content,
      });
      expect(typeof created.createdAt).toBe('string');
      expect(appController.getNotes()).toEqual([created]);
    });
  });
});
