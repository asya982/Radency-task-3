import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Patch,
  Delete,
} from '@nestjs/common';
import { NotesService } from '../service/notes.service';
import { CreateNoteDto } from 'src/dto/noteCreate.dto';
import { EditNoteDto } from 'src/dto/noteEdit.dto';
import { Note } from 'src/bd/note.entity';
import { CategoryRow } from 'src/helpers/types';

@Controller('notes')
export class NotesController {
  constructor(private readonly noteService: NotesService) {}

  @Get('stats')
  getCategoriesStats(): Promise<CategoryRow[]> {
    return this.noteService.getStats();
  }

  @Get()
  getNotes(): Promise<Note[]> {
    return this.noteService.getAllNotes();
  }

  @Get(':id')
  getNoteById(@Param('id', ParseIntPipe) id: number): Promise<Note> {
    return this.noteService.getNoteById(id);
  }

  @Post()
  createNote(@Body() noteDto: CreateNoteDto): Promise<Note> {
    return this.noteService.addNewNote(noteDto);
  }

  @Patch(':id')
  editNote(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateNoteDto: EditNoteDto,
  ): Promise<[number, Note[]]> {
    return this.noteService.editNote(id, updateNoteDto);
  }

  @Delete(':id')
  deleteNote(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.noteService.deleteNote(id);
  }
}
