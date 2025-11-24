# Changelog
All notable changes to this project are documented here. The project follows [Semantic Versioning](https://semver.org/) and the [Keep a Changelog](https://keepachangelog.com/) format.

## [1.0.0] - 2025-11-24

### Added
- Initial NestJS API scaffold with in-memory notes domain (`CreateNoteDto`, `Note`, storage logic) and REST endpoints `GET /notes` / `POST /notes`, covered by unit specs.
- Minimal React + TypeScript frontend (`web`) featuring note creation form (title, content), "Add Note" button, and notes list.
- Async-aware `notesService`, modular React components (`NoteForm`, `NoteList`, `NoteItem`), and configurable API client with `VITE_API_URL`.
- Professional `README.md` covering overview, features, API docs, tech stack, installation, usage, structure, and future improvements.
- `CONTRIBUTING.md` defining commit conventions, branch strategy, PR process, code style, and testing requirements.

### Changed
- Enabled CORS in the NestJS API and refactored the frontend to persist notes through the backend using async/await.
- Fixed TypeScript isolated-module issues by switching decorated signature imports to `import type`.

[1.0.0]: https://example.com/releases/1.0.0
