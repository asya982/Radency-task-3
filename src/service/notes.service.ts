import { Injectable, Inject } from '@nestjs/common';
import { EditNoteDto } from 'src/dto/noteEdit.dto';
import { Category, CategoryRow, NoteItem } from 'src/helpers/types';
import { Note } from '../bd/note.entity'; 

@Injectable()
export class NotesService {
  constructor(@Inject('NOTE_REPOSITORY') private noteRepository: typeof Note) {}

  private readonly categories: Category[] = [
    { id: 0, name: 'Task' },
    { id: 1, name: 'Random Thought' },
    { id: 2, name: 'Idea' },
  ];

 async  getAllNotes():  Promise<Note[]> {
    return this.noteRepository.findAll<Note>();
  }

  // getNoteById(id: number): NoteItem | undefined {
  //   return this.noteList.find((el) => el.id === id);
  // }

  // addNewNote(note: NoteItem): NoteItem {
  //   this.noteList.push(note);
  //   return note;
  // }

  // editNote(id: number, editData: EditNoteDto): NoteItem {
  //   this.noteList = this.noteList.map((note) => {
  //     if (note.id === id) {
  //       return {
  //         ...note,
  //         ...editData,
  //       };
  //     }
  //     return note;
  //   });
  //   return this.noteList.find((el) => el.id === id);
  // }

  // deleteNote(id: number): boolean {
  //   if (!this.noteList.find((el) => el.id === id)) {
  //     return false;
  //   }

  //   this.noteList = this.noteList.filter((el) => el.id !== id);
  //   return true;
  // }

  // getStats(): CategoryRow[] {
  //   return this.categories.map((category) => ({
  //     ...category,
  //     active: this.noteList.filter(
  //       (el) => el.isActive && el.category === category.id,
  //     ).length,
  //     archived: this.noteList.filter(
  //       (el) => !el.isActive && el.category === category.id,
  //     ).length,
  //   }));
  // }
}
