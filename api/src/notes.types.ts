export interface CreateNoteDto {
  title: string;
  content: string;
}

export interface Note extends CreateNoteDto {
  id: number;
  createdAt: string;
}

