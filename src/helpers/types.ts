export interface NoteItem {
  id: number;
  name: string;
  content: string;
  dates: string[];
  created: string;
  isActive: boolean;
  category: number;
}

export interface Category {
  id: number;
  name: 'Task' | 'Idea' | 'Random Thought';
}

export interface CategoryRow extends Category {
  active: number;
  archived: number;
}
