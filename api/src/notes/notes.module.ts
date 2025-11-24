import { Module } from '@nestjs/common';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';

/**
 * @Module Decorator
 * 
 * Modules are the building blocks of NestJS applications.
 * They organize related functionality together.
 * 
 * Properties:
 * - controllers: Array of controllers that handle HTTP requests
 * - providers: Array of services and other injectable classes
 * - imports: Other modules whose exported providers can be used here
 * - exports: Providers from this module that other modules can use
 * 
 * How DI works with modules:
 * 1. Providers declared in a module are available to controllers in the same module
 * 2. When NotesController needs NotesService, NestJS looks in this module
 * 3. If found, it creates an instance (or reuses singleton) and injects it
 * 4. This happens automatically - no manual instantiation needed!
 */
@Module({
  controllers: [NotesController],
  providers: [NotesService],
})
export class NotesModule {}

