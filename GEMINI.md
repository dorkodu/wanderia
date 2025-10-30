# Trekie

Trekie is a gamified life dashboard with AI productivity companion and social features.
It is a full-stack web app with TypeScript frontend and backend.
The core functionality with domain related things lives in the SDK library inside the `sdk/` folder, with separate web client app (`web/`), API server (`api/`) and database (`db/`) workspaces in their own folders.

## Build & Commands

- Typecheck and lint everything: `bun check`
- Fix linting/formatting: `bun check:fix`
- Run tests: `bun test`
- Start development server: `bun dev`
- Build for production: `bun build`
- Preview production build: `bun preview`

### Development Environment

- Frontend dev server: http://localhost:5173
- Backend dev server: http://localhost:8000
- Database runs on port 5432

## Code Style

- TypeScript: Strict mode with exactOptionalPropertyTypes, noUncheckedIndexedAccess
- Spaces for indentation (2 spaces per level of nesting)
- Double quotes, semicolons, no trailing commas
- Use JSDoc docstrings for documenting TypeScript definitions, not `//` comments
- 100 character line limit
- Imports: Use consistent-type-imports
- Use descriptive variable/function names
- In CamelCase names, use "URL" (not "Url"), "API" (not "Api"), "ID" (not "Id")
- Prefer functional programming patterns
- Use TypeScript interfaces for public APIs
- NEVER use `@ts-expect-error` or `@ts-ignore` to suppress type errors

## Testing

- Bun test runner for unit testing
- When writing tests, do it one test case at a time
- Use `expect(VALUE).toXyz(...)` instead of storing in variables
- Omit "should" from test names (e.g., `it("validates input")` not `it("should validate input")`)
- Test files: `*.test.ts` or `*.spec.ts`
- Mock external dependencies appropriately

## Architecture

- Frontend: React, TypeScript, Tanstack Router
- Backend: ElysiaJS, TypeScript, tRPC, BetterAuth
- Database: PostgreSQL with Drizzle ORM
- State management: Zustand, Dexie, Tanstack Query, Tanstack Form for forms.
- Styling: Tailwind CSS, Shadcn UI
- Build tool: Vite
- Package manager: bun

## Security

- Use appropriate data types that limit exposure of sensitive information
- Never commit secrets or API keys to repository
- Use environment variables for sensitive data
- Validate all user inputs on both client and server
- Use HTTPS in production
- Regular dependency updates
- Follow principle of least privilege

## Git Workflow

- NEVER use `git push --force` on the main branch
- Use `git push --force-with-lease` for feature branches if needed
- Always verify current branch before force operations

## Configuration

When adding new configuration options, update all relevant places:

1. Environment variables in `.env.example`
2. Configuration schemas in `web/src/config/` or `api/src/config/`
3. Documentation in README.md

All configuration keys use consistent naming and MUST be documented.
