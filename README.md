# Notes App

A full-stack notes management application built with NestJS (backend) and React + TypeScript (frontend). This application demonstrates modern web development practices including RESTful API design, component-based architecture, and async/await patterns.

## 📋 Overview

The Notes App is a minimal yet complete application for creating and managing notes. It features a clean separation between frontend and backend, with the React frontend communicating with the NestJS API through REST endpoints.

## ✨ Features

- **Create Notes**: Add new notes with title and content
- **View Notes**: Display all notes in a list format
- **Real-time Updates**: Notes are synchronized between frontend and backend
- **Type Safety**: Full TypeScript support across the stack
- **Component Architecture**: Modular React components for maintainability
- **RESTful API**: Clean API design following REST principles
- **CORS Enabled**: Configured for seamless frontend-backend communication

## 🛠 Tech Stack

### Backend (API)
- **NestJS** - Progressive Node.js framework
- **TypeScript** - Type-safe JavaScript
- **Express** - Web framework (via NestJS)
- **Jest** - Testing framework

### Frontend (Web)
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **Fetch API** - HTTP client

## 📡 API Endpoints

### Base URL
```
http://localhost:3000
```

### Endpoints

#### GET `/notes`
Retrieves all notes.

**Response:**
```json
[
  {
    "id": 1,
    "title": "My Note",
    "content": "Note content here",
    "createdAt": "2025-11-25T12:00:00.000Z"
  }
]
```

#### POST `/notes`
Creates a new note.

**Request Body:**
```json
{
  "title": "My Note",
  "content": "Note content here"
}
```

**Response:**
```json
{
  "id": 1,
  "title": "My Note",
  "content": "Note content here",
  "createdAt": "2025-11-25T12:00:00.000Z"
}
```

## 🚀 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Backend Setup

1. Navigate to the API directory:
```bash
cd api
```

2. Install dependencies:
```bash
npm install
```

### Frontend Setup

1. Navigate to the Web directory:
```bash
cd web
```

2. Install dependencies:
```bash
npm install
```

## 🏃 Running the Application

### Development Mode

#### Start the Backend API

```bash
cd api
npm run start:dev
```

The API will be available at `http://localhost:3000`

#### Start the Frontend

```bash
cd web
npm run dev
```

The frontend will be available at `http://localhost:5173`

### Production Build

#### Build Backend

```bash
cd api
npm run build
npm run start:prod
```

#### Build Frontend

```bash
cd web
npm run build
```

The production build will be in the `web/dist` directory.

## 📁 Project Structure

```
.
├── api/                          # NestJS Backend
│   ├── src/
│   │   ├── main.ts              # Application entry point
│   │   ├── app.module.ts        # Root module
│   │   ├── notes/               # Notes feature module
│   │   │   ├── dto/
│   │   │   │   └── create-note.dto.ts
│   │   │   ├── notes.controller.ts
│   │   │   ├── notes.service.ts
│   │   │   ├── notes.module.ts
│   │   │   ├── notes.controller.spec.ts
│   │   │   └── notes.service.spec.ts
│   │   └── types/
│   │       └── notes.types.ts
│   ├── test/                    # E2E tests
│   └── package.json
│
├── web/                          # React Frontend
│   ├── src/
│   │   ├── main.tsx             # Application entry point
│   │   ├── App.tsx              # Root component
│   │   ├── components/          # React components
│   │   │   ├── NoteForm/
│   │   │   ├── NoteList/
│   │   │   └── NoteItem/
│   │   ├── services/            # API service layer
│   │   │   └── notes.service.ts
│   │   ├── config/              # Configuration
│   │   │   └── api.config.ts
│   │   └── types.ts             # TypeScript types
│   └── package.json
│
└── CHANGELOG.md                 # Project changelog
```

## 🧪 Testing

### Backend Tests

```bash
cd api
npm test                    # Run unit tests
npm run test:watch          # Run tests in watch mode
npm run test:cov            # Run tests with coverage
npm run test:e2e            # Run end-to-end tests
```

### Frontend Tests

Currently, the frontend uses manual testing. Unit tests can be added using Jest or Vitest.

## 🔧 Configuration

### Environment Variables

#### Backend (API)
- `PORT` - Server port (default: 3000)
- `FRONTEND_URL` - CORS origin (default: http://localhost:5173)

#### Frontend (Web)
- `VITE_API_URL` - API base URL (default: http://localhost:3000)

Create a `.env` file in the respective directories to override defaults.

## 📚 Key Concepts

### Dependency Injection (NestJS)
The backend uses NestJS's built-in dependency injection system for loose coupling and testability.

### Component Architecture (React)
The frontend follows a component-based architecture with:
- **NoteForm**: Handles note creation
- **NoteList**: Displays all notes
- **NoteItem**: Individual note display

### Service Layer Pattern
The `notesService` abstracts API communication, making it easy to swap implementations or add features like caching.

## 🔮 Future Improvements

- [ ] **Database Integration**: Replace in-memory storage with PostgreSQL or MongoDB
- [ ] **Authentication**: Add user authentication and authorization
- [ ] **Note Editing**: Implement update and delete operations
- [ ] **Search & Filter**: Add search functionality for notes
- [ ] **Categories/Tags**: Organize notes with categories or tags
- [ ] **Rich Text Editor**: Support markdown or rich text formatting
- [ ] **Pagination**: Implement pagination for large note lists
- [ ] **Error Handling**: Enhanced error handling and user feedback
- [ ] **Loading States**: Improved loading indicators
- [ ] **Unit Tests**: Add comprehensive frontend unit tests
- [ ] **E2E Tests**: Add end-to-end tests with Playwright or Cypress
- [ ] **Docker Support**: Containerize the application
- [ ] **CI/CD Pipeline**: Set up continuous integration and deployment

## 📝 License

This project is private and unlicensed.

## 👥 Contributing

This is a private project. For questions or suggestions, please contact the project maintainer.

---

**Built with ❤️ using NestJS and React**

