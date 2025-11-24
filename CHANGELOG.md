# Changelog

## 2025-11-24

- scaffoled minimal NestJS project `api`.
- added in-memory notes domain (`CreateNoteDto`, `Note`, storage logic).
- exposed REST endpoints `GET /notes` and `POST /notes` plus unit specs covering happy paths.
- fixed TypeScript isolated modules issue by switching controller type imports to `import type`.

