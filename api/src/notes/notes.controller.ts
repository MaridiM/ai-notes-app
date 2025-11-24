import { Body, Controller, Get, Post } from '@nestjs/common';
import { NotesService } from './notes.service';
import type { CreateNoteDto } from './dto/create-note.dto';
import type { Note } from '../types/notes.types';

/**
 * @Controller Decorator
 * 
 * This decorator marks the class as a controller that handles HTTP requests.
 * The string parameter 'notes' defines the route prefix: all routes in this controller
 * will be prefixed with '/notes'.
 * 
 * Example:
 * - @Get() becomes GET /notes
 * - @Post() becomes POST /notes
 * 
 * Controllers are responsible for:
 * - Receiving HTTP requests
 * - Validating input (via DTOs and pipes)
 * - Calling service methods
 * - Returning HTTP responses
 */
@Controller('notes')
export class NotesController {
  /**
   * Dependency Injection (DI) via Constructor
   * 
   * NestJS uses constructor injection to provide dependencies.
   * 
   * How it works:
   * 1. You declare dependencies in the constructor
   * 2. NestJS's DI container automatically resolves and injects them
   * 3. The 'private readonly' syntax is TypeScript shorthand that:
   *    - Creates a private property
   *    - Makes it readonly (can't be reassigned)
   *    - Assigns the injected value automatically
   * 
   * Benefits:
   * - Loose coupling: controller doesn't create its own service
   * - Easy testing: you can mock the service in tests
   * - Single Responsibility: controller handles HTTP, service handles business logic
   */
  constructor(private readonly notesService: NotesService) {}

  /**
   * @Get Decorator
   * 
   * Maps this method to handle GET HTTP requests.
   * Since the controller prefix is 'notes', this handles GET /notes
   * 
   * The return value is automatically serialized to JSON and sent as the response.
   */
  @Get()
  getNotes(): Note[] {
    return this.notesService.getNotes();
  }

  /**
   * @Post Decorator
   * 
   * Maps this method to handle POST HTTP requests.
   * This handles POST /notes
   * 
   * @Body Decorator
   * 
   * Extracts the request body and validates it against the DTO type.
   * 
   * How it works:
   * - NestJS automatically parses JSON from the request body
   * - Validates the structure matches CreateNoteDto
   * - Passes the validated data to the method parameter
   * 
   * Example request:
   * POST /notes
   * Content-Type: application/json
   * {
   *   "title": "My Note",
   *   "content": "Note content here"
   * }
   * 
   * @param payload - Automatically extracted and validated request body
   * @returns The created note
   */
  @Post()
  createNote(@Body() payload: CreateNoteDto): Note {
    return this.notesService.createNote(payload);
  }
}

