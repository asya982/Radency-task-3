import { Injectable } from '@nestjs/common';
import { EditNoteDto } from 'src/dto/noteEdit.dto';
import { Category, CategoryRow, NoteItem } from 'src/helpers/types';

@Injectable()
export class NotesService {
  private noteList: NoteItem[] = [
    {
      id: 0,
      name: 'Meeting Reminder',
      created: '25/07/2023',
      category: 0,
      content: "Don't forget the team meeting at 3 PM today.",
      dates: [],
      isActive: true,
    },
    {
      id: 1,
      name: 'Grocery List',
      created: '25/07/2023',
      category: 0,
      content: 'Buy milk, eggs, bread, and fruits.',
      dates: [],
      isActive: true,
    },
    {
      id: 2,
      name: 'Book Recommendation',
      created: '25/07/2023',
      category: 2,
      content: "Read 'The Alchemist' by Paulo Coelho.",
      dates: [],
      isActive: true,
    },
    {
      id: 3,
      name: 'Gift Ideas',
      created: '25/07/2023',
      category: 2,
      content: "Think of gift ideas for mom's birthday.",
      dates: [],
      isActive: true,
    },
    {
      id: 4,
      name: 'Project Deadline',
      created: '25/07/2023',
      category: 1,
      content: 'Finish the report and submit it by Friday(10/08/2023)',
      dates: ['10/08/2023'],
      isActive: true,
    },
    {
      id: 5,
      name: 'Travel Plans',
      created: '25/07/2023',
      category: 1,
      content:
        'Research and plan for the summer vacation during 10/08/2023 26/07/2023',
      dates: ['10/08/2023', '26/07/2023'],
      isActive: true,
    },
    {
      id: 6,
      name: 'Fitness Goals',
      created: '25/07/2023',
      category: 0,
      content: 'Go for a jog and eat a healthy dinner.',
      dates: [],
      isActive: true,
    },
  ];

  private readonly categories: Category[] = [
    { id: 0, name: 'Task' },
    { id: 1, name: 'Random Thought' },
    { id: 2, name: 'Idea' },
  ];

  getAllNotes(): NoteItem[] {
    return this.noteList;
  }

  getNoteById(id: number): NoteItem | undefined {
    return this.noteList.find((el) => el.id === id);
  }

  addNewNote(note: NoteItem): NoteItem {
    this.noteList.push(note);
    return note;
  }

  editNote(id: number, editData: EditNoteDto): NoteItem {
    this.noteList = this.noteList.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          ...editData,
        };
      }
      return note;
    });
    return this.noteList.find((el) => el.id === id);
  }

  deleteNote(id: number): boolean {
    if (!this.noteList.find((el) => el.id === id)) {
      return false;
    }

    this.noteList = this.noteList.filter((el) => el.id !== id);
    return true;
  }

  getStats(): CategoryRow[] {
    return this.categories.map((category) => ({
      ...category,
      active: this.noteList.filter(
        (el) => el.isActive && el.category === category.id,
      ).length,
      archived: this.noteList.filter(
        (el) => !el.isActive && el.category === category.id,
      ).length,
    }));
  }
}
