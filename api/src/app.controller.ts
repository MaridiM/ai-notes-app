import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import type { CreateNoteDto, Note } from './notes.types';

@Controller('notes')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getNotes(): Note[] {
    return this.appService.getNotes();
  }

  @Post()
  createNote(@Body() payload: CreateNoteDto): Note {
    return this.appService.createNote(payload);
  }
}
