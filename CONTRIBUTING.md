# Contributing Guide

Thank you for your interest in contributing to the Notes App! This document outlines the standards and processes for contributing to the project.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Commit Guidelines](#commit-guidelines)
- [Branch Strategy](#branch-strategy)
- [Pull Request Process](#pull-request-process)
- [Code Style](#code-style)
- [Testing Requirements](#testing-requirements)
- [Code Review Process](#code-review-process)

## 🤝 Code of Conduct

- Be respectful and considerate of others
- Welcome constructive feedback
- Focus on what is best for the project
- Show empathy towards other contributors

## 🚀 Getting Started

1. Fork the repository (if applicable)
2. Clone your fork: `git clone <your-fork-url>`
3. Create a new branch: `git checkout -b feature/your-feature-name`
4. Make your changes
5. Follow the guidelines below
6. Submit a Pull Request

## 📝 Commit Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification for commit messages.

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `refactor`: Code refactoring without changing functionality
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Changes to build process or auxiliary tools
- `ci`: Changes to CI configuration files and scripts

### Scope

The scope should be the name of the package or module affected:
- `api`: Backend changes
- `web`: Frontend changes
- `deps`: Dependency updates
- `config`: Configuration changes

### Examples

**Good:**
```
feat(api): add note deletion endpoint

Implements DELETE /notes/:id endpoint with proper error handling.

Closes #123
```

```
fix(web): resolve form validation issue

Fixed issue where empty notes could be submitted. Added validation
for both title and content fields.

Fixes #456
```

```
docs(readme): update installation instructions

Added Node.js version requirement and clarified setup steps.
```

**Bad:**
```
update code
```

```
fix bug
```

```
WIP
```

### Commit Best Practices

- Write commits in present tense ("add feature" not "added feature")
- Use the imperative mood ("move cursor to..." not "moves cursor to...")
- Keep the subject line under 72 characters
- Reference issues and pull requests in the footer
- Make atomic commits (one logical change per commit)

## 🌿 Branch Strategy

### Branch Naming Convention

Branches should follow this pattern:

```
<type>/<short-description>
```

**Types:**
- `feature/` - New features
- `fix/` - Bug fixes
- `hotfix/` - Critical production fixes
- `refactor/` - Code refactoring
- `docs/` - Documentation updates
- `test/` - Test additions or improvements
- `chore/` - Maintenance tasks

**Examples:**
- `feature/add-note-editing`
- `fix/cors-configuration`
- `refactor/extract-note-service`
- `docs/update-api-documentation`

### Branch Workflow

1. **Main Branches:**
   - `main` - Production-ready code
   - `develop` - Integration branch for features (if applicable)

2. **Feature Branches:**
   - Created from `main` or `develop`
   - Merged back after PR approval
   - Deleted after merge

3. **Hotfix Branches:**
   - Created from `main`
   - Merged to both `main` and `develop`
   - Deleted after merge

### Branch Guidelines

- Keep branches focused on a single feature or fix
- Keep branches up to date with the base branch
- Use descriptive names that explain the purpose
- Delete merged branches to keep the repository clean

## 🔀 Pull Request Process

### Before Submitting

1. **Update Documentation:**
   - Update README.md if needed
   - Add/update code comments
   - Update CHANGELOG.md

2. **Run Tests:**
   ```bash
   # Backend
   cd api
   npm test
   npm run lint
   
   # Frontend
   cd web
   npm run build
   ```

3. **Check Code Style:**
   ```bash
   # Backend
   cd api
   npm run format
   npm run lint
   ```

4. **Verify Build:**
   - Ensure both backend and frontend build successfully
   - Test the changes locally

### PR Title Format

Follow the same format as commit messages:

```
<type>(<scope>): <subject>
```

Example: `feat(api): add note update endpoint`

### PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Changes Made
- Change 1
- Change 2
- Change 3

## Testing
- [ ] Unit tests added/updated
- [ ] Manual testing completed
- [ ] All tests passing

## Screenshots (if applicable)
Add screenshots for UI changes

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] Tests added/updated
- [ ] All tests passing
- [ ] CHANGELOG.md updated
```

### PR Review Requirements

- At least one approval required before merge
- All CI checks must pass
- No merge conflicts
- Code must be up to date with base branch

### PR Size Guidelines

- **Small PRs preferred** (< 300 lines changed)
- Break large features into smaller, reviewable PRs
- Each PR should be a complete, working feature or fix

## 💻 Code Style

### TypeScript

#### General Rules

- Use TypeScript strict mode
- Prefer `interface` over `type` for object shapes
- Use `type` for unions, intersections, and aliases
- Avoid `any` - use `unknown` if type is truly unknown
- Use explicit return types for public methods

#### Import Organization

```typescript
// 1. External dependencies
import { Injectable } from '@nestjs/common';
import { useState } from 'react';

// 2. Internal modules
import { NotesService } from './notes.service';
import type { Note } from '../types';
```

#### Type Imports

Use `import type` for type-only imports when `isolatedModules` is enabled:

```typescript
import type { CreateNoteDto, Note } from './types';
```

#### Naming Conventions

- **Classes**: PascalCase (`NotesService`, `NoteController`)
- **Interfaces**: PascalCase (`CreateNoteDto`, `Note`)
- **Types**: PascalCase (`ApiResponse`)
- **Variables/Functions**: camelCase (`getNotes`, `noteId`)
- **Constants**: UPPER_SNAKE_CASE (`API_BASE_URL`)
- **Files**: kebab-case (`notes.service.ts`, `create-note.dto.ts`)

#### Example

```typescript
// Good
export class NotesService {
  async getNotes(): Promise<Note[]> {
    // implementation
  }
}

// Bad
export class notesService {
  async getnotes(): any {
    // implementation
  }
}
```

### NestJS (Backend)

#### Service Pattern

```typescript
@Injectable()
export class NotesService {
  async getNotes(): Promise<Note[]> {
    // implementation
  }
}
```

#### Controller Pattern

```typescript
@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get()
  getNotes(): Note[] {
    return this.notesService.getNotes();
  }
}
```

#### DTO Pattern

```typescript
export interface CreateNoteDto {
  title: string;
  content: string;
}
```

### React (Frontend)

#### Component Structure

```typescript
import { useState } from 'react';
import type { Note } from '../types';

interface ComponentProps {
  note: Note;
}

export function Component({ note }: ComponentProps) {
  const [state, setState] = useState<string>('');

  return <div>{/* JSX */}</div>;
}
```

#### Hooks

- Use functional components with hooks
- Extract custom hooks for reusable logic
- Follow the Rules of Hooks

#### Props

- Use TypeScript interfaces for props
- Destructure props in function parameters
- Use default props when appropriate

### Formatting

We use **Prettier** for code formatting with the following settings:

```json
{
  "singleQuote": true,
  "trailingComma": "all",
  "semi": true,
  "printWidth": 80,
  "tabWidth": 2
}
```

**Format code before committing:**
```bash
cd api && npm run format
```

### ESLint

We use **ESLint** for code quality. Run linting before committing:

```bash
cd api && npm run lint
```

## 🧪 Testing Requirements

### Backend Tests

- Write unit tests for all services
- Write controller tests for all endpoints
- Aim for > 80% code coverage
- Use descriptive test names

**Example:**
```typescript
describe('NotesService', () => {
  describe('getNotes', () => {
    it('should return an empty array initially', () => {
      // test implementation
    });
  });
});
```

### Frontend Tests

- Test component rendering
- Test user interactions
- Test async operations
- Mock API calls

### Running Tests

```bash
# Backend
cd api
npm test              # Run all tests
npm run test:watch     # Watch mode
npm run test:cov       # With coverage

# Frontend (when tests are added)
cd web
npm test
```

### Test Best Practices

- Write tests before or alongside code (TDD/BDD)
- Test behavior, not implementation
- Keep tests simple and focused
- Use descriptive test names
- Mock external dependencies
- Clean up after tests

## 👀 Code Review Process

### For Authors

1. **Self-Review First:**
   - Review your own code before requesting review
   - Check for typos, formatting, and logic errors
   - Ensure tests pass

2. **Request Review:**
   - Tag appropriate reviewers
   - Provide context in PR description
   - Respond to feedback promptly

3. **Address Feedback:**
   - Be open to suggestions
   - Ask questions if unclear
   - Make requested changes or discuss alternatives

### For Reviewers

1. **Be Constructive:**
   - Provide specific, actionable feedback
   - Explain the "why" behind suggestions
   - Acknowledge good work

2. **Check:**
   - Code follows style guidelines
   - Tests are adequate
   - Documentation is updated
   - No security issues
   - Performance considerations

3. **Approval Criteria:**
   - Code is correct and follows standards
   - Tests are passing
   - Documentation is updated
   - No breaking changes (or documented)

### Review Checklist

- [ ] Code follows project style guidelines
- [ ] Tests are added/updated and passing
- [ ] Documentation is updated
- [ ] No console.logs or debug code
- [ ] Error handling is appropriate
- [ ] Performance considerations addressed
- [ ] Security best practices followed
- [ ] No hardcoded values or secrets

## 📚 Additional Resources

- [NestJS Documentation](https://docs.nestjs.com/)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Conventional Commits](https://www.conventionalcommits.org/)

## ❓ Questions?

If you have questions about contributing, please:
1. Check existing documentation
2. Search existing issues/PRs
3. Open a new issue with the `question` label

Thank you for contributing! 🎉

