# Changelog

## 2025-11-24

- created CONTRIBUTING.md with guidelines for commits (Conventional Commits), branch strategy, PR process, code style (TypeScript, NestJS, React), and testing requirements.
- created professional README.md with overview, features, API documentation, tech stack, installation, running instructions, project structure, and future improvements.
- integrated `web` with `api`: updated `notesService` to make HTTP requests to NestJS API endpoints.
- enabled CORS in NestJS API for frontend integration.
- added API configuration with environment variable support (`VITE_API_URL`).
- improved React component structure: split into `NoteForm`, `NoteList`, `NoteItem` components.
- refactored with async/await: added `notesService` with async methods, updated components to use async operations.
- created minimal React + TypeScript app `web` with form (title, content), "Add Note" button, and notes list.
- scaffoled minimal NestJS project `api`.
- added in-memory notes domain (`CreateNoteDto`, `Note`, storage logic).
- exposed REST endpoints `GET /notes` and `POST /notes` plus unit specs covering happy paths.
- fixed TypeScript isolated modules issue by switching controller type imports to `import type`.
