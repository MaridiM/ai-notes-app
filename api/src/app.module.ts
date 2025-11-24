import { Module } from '@nestjs/common';
import { NotesModule } from './notes/notes.module';

/**
 * Root Application Module
 * 
 * This is the main module that ties everything together.
 * 
 * @Module imports:
 * - NotesModule: Makes all notes functionality available
 *   When you import a module, you get access to its exported providers
 */
@Module({
  imports: [NotesModule],
})
export class AppModule {}
