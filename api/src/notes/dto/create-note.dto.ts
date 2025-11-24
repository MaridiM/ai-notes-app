/**
 * DTOs (Data Transfer Objects) - Detailed Explanation
 * 
 * DTOs are objects that define how data is transferred between different layers
 * of your application. They serve as contracts for data validation and type safety.
 * 
 * Why use DTOs?
 * =============
 * 
 * 1. **Type Safety**: TypeScript ensures the data structure matches expectations
 * 2. **Validation**: Can be combined with class-validator to validate incoming data
 * 3. **Documentation**: Clearly shows what data is expected
 * 4. **Separation of Concerns**: API contract is separate from domain models
 * 5. **Security**: Prevents exposing internal data structures
 * 
 * Example Flow:
 * ============
 * 
 * Client Request (JSON):
 * {
 *   "title": "My Note",
 *   "content": "Note content"
 * }
 * 
 * ↓
 * 
 * NestJS automatically validates against CreateNoteDto
 * - Checks if title is a string
 * - Checks if content is a string
 * - Rejects if structure doesn't match
 * 
 * ↓
 * 
 * Controller receives validated CreateNoteDto
 * 
 * ↓
 * 
 * Service receives the DTO and creates domain model (Note)
 * 
 * Best Practices:
 * ==============
 * 
 * - Keep DTOs simple (just data, no methods)
 * - Use interfaces for simple DTOs (like this one)
 * - Use classes if you need validation decorators
 * - One DTO per operation (CreateNoteDto, UpdateNoteDto, etc.)
 * - Don't expose internal IDs or timestamps in create DTOs
 */

export interface CreateNoteDto {
  title: string;
  content: string;
}

/**
 * Note: In a real application, you might want to use a class with validation:
 * 
 * import { IsString, IsNotEmpty, MinLength } from 'class-validator';
 * 
 * export class CreateNoteDto {
 *   @IsString()
 *   @IsNotEmpty()
 *   @MinLength(1)
 *   title: string;
 * 
 *   @IsString()
 *   @IsNotEmpty()
 *   content: string;
 * }
 * 
 * This would automatically validate incoming requests and return 400 Bad Request
 * if the data doesn't match the validation rules.
 */

