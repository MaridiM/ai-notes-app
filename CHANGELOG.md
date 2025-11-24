# Changelog

## 2025-11-25

- improved React component structure: split into `NoteForm`, `NoteList`, `NoteItem` components.
- refactored with async/await: added `notesService` with async methods, updated components to use async operations.
- created minimal React + TypeScript app `web` with form (title, content), "Add Note" button, and notes list.

## 2025-11-24

- scaffoled minimal NestJS project `api`.
- added in-memory notes domain (`CreateNoteDto`, `Note`, storage logic).
- exposed REST endpoints `GET /notes` and `POST /notes` plus unit specs covering happy paths.
- fixed TypeScript isolated modules issue by switching controller type imports to `import type`.

