import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Patch,
  Delete,
} from '@nestjs/common';
import { NotesService } from '../service/notes.service';
import { CategoryRow, NoteItem } from 'src/helpers/types';
import { NOTE_NOT_FOUND } from 'src/helpers/constants';
import { findDates, publishDate } from 'src/helpers/helpers';
import { CreateNoteDto } from 'src/dto/noteCreate.dto';
import { EditNoteDto } from 'src/dto/noteEdit.dto';

@Controller('notes')
export class NotesController {
  constructor(private readonly noteService: NotesService) {}

  @Get('stats')
  getCategoriesStats(): CategoryRow[] {
    return this.noteService.getStats();
  }

  @Get()
  getNotes(): NoteItem[] {
    return this.noteService.getAllNotes();
  }

  @Get(':id')
  getNoteById(@Param('id', ParseIntPipe) id: number): NoteItem {
    const foundNote = this.noteService.getNoteById(id);
    if (!foundNote) {
      throw new NotFoundException(NOTE_NOT_FOUND(id));
    }
    return foundNote;
  }

  @Post()
  createNote(@Body() noteDto: CreateNoteDto): NoteItem {
    const newNote = {
      ...noteDto,
      id: this.noteService.getAllNotes().length,
      created: publishDate(),
      isActive: true,
      dates: findDates(noteDto.content),
    };

    return this.noteService.addNewNote(newNote);
  }

  @Patch(':id')
  editNote(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateNoteDto: EditNoteDto,
  ): NoteItem {
    const noteWithDates = {
      ...updateNoteDto,
      dates: findDates(updateNoteDto.content),
    };
    return this.noteService.editNote(id, noteWithDates);
  }

  @Delete(':id')
  deleteNote(@Param('id', ParseIntPipe) id: number): void {
    const response = this.noteService.deleteNote(id);

    if (!response) {
      throw new NotFoundException(NOTE_NOT_FOUND(id));
    }
  }
}
