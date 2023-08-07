import { Note } from './note.entity';

export const notessProviders = [
  {
    provide: 'NOTE_REPOSITORY',
    useValue: Note,
  },
];