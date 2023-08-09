import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { EditNoteDto } from 'src/dto/noteEdit.dto';
import { Category, CategoryRow, NoteItem } from 'src/helpers/types';
import { Note } from '../bd/note.entity';
import { CreateNoteDto } from 'src/dto/noteCreate.dto';
import { findDates, publishDate } from 'src/helpers/helpers';
import { NOTE_NOT_FOUND } from 'src/helpers/constants';

@Injectable()
export class NotesService {
  constructor(@Inject('NOTE_REPOSITORY') private noteRepository: typeof Note) {}

  private readonly categories: Category[] = [
    { id: 0, name: 'Task' },
    { id: 1, name: 'Random Thought' },
    { id: 2, name: 'Idea' },
  ];

  async getAllNotes(): Promise<Note[]> {
    return this.noteRepository.findAll<Note>({
      order: [['id', 'ASC']],
    });
  }

  async getNoteById(id: number): Promise<Note> | null {
    const note = await this.noteRepository.findByPk(id);
    if (!note) {
      throw new NotFoundException(NOTE_NOT_FOUND(id));
    }
    return note;
  }

  async addNewNote(note: CreateNoteDto): Promise<Note> {
    const newNote = {
      ...note,
      created: publishDate(),
      isActive: true,
      dates: findDates(note.content),
    };
    return this.noteRepository.create(newNote);
  }

  async editNote(id: number, editData: EditNoteDto): Promise<[number, Note[]]> {
    const editWithDates = { ...editData, dates: findDates(editData.content) };
    const updatedNote = await this.noteRepository.update(editWithDates, {
      where: { id },
      returning: true,
    });

    if (!updatedNote[0]) {
      throw new NotFoundException(NOTE_NOT_FOUND(id));
    }

    return updatedNote;
  }

  async deleteNote(id: number): Promise<void> {
    const deletedRows = await this.noteRepository.destroy({
      where: { id },
    });

    if (!deletedRows) {
      throw new NotFoundException(NOTE_NOT_FOUND(id));
    }
  }

  async getStats(): Promise<CategoryRow[]> {
    const stats = this.categories.map(async (category) => ({
      ...category,
      active: await this.noteRepository.count({
        where: { isActive: true, category: category.id },
      }),
      archived: await this.noteRepository.count({
        where: { isActive: false, category: category.id },
      }),
    }));

    return Promise.all(stats);
  }
}
