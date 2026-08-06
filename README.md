# API Secretaria — Study REST API

Simple Node.js + TypeScript REST API using the MVC pattern, built for study purposes.

## Stack

- **Express** — HTTP server
- **TypeScript** (strict mode, ESM/NodeNext)
- **Zod** — request validation & env validation
- **Helmet / CORS / Morgan** — security headers, CORS, request logging
- **Swagger (swagger-jsdoc + swagger-ui-express)** — OpenAPI docs generated from JSDoc comments on the routes
- **ESLint (flat config) + Prettier** — linting & formatting
- **tsx** — fast dev runner with watch mode

## Structure (MVC)

```
src/
  config/       # environment config (validated with zod)
  controllers/  # Controller — handles req/res, calls services
  services/     # business logic
  repositories/ # data access (in-memory "Model" layer for this study project)
  routes/       # Express routers, wires urls -> controllers
  middlewares/  # validation, error handling, 404
  validators/   # zod schemas for request validation
  types/        # shared TypeScript types
  utils/        # HttpError, async handler helper
  app.ts        # express app assembly
  server.ts     # entry point, starts the HTTP server
```

The `Task` resource is a full CRUD example wired end-to-end:
`routes -> validate -> controller -> service -> repository`.

## Getting started

```bash
cp .env.example .env
npm install
npm run dev
```

Server starts on `http://localhost:3000`.

## API docs (Swagger)

Interactive OpenAPI docs are available while the server is running:

- Swagger UI: http://localhost:3000/api/docs
- Raw OpenAPI JSON: http://localhost:3000/api/docs.json

The spec is generated automatically from the `@openapi` JSDoc comments in
`src/routes/*.ts` (see `src/config/swagger.ts`). Add/update those comments
when you add or change an endpoint — no separate spec file to keep in sync.

## Scripts

- `npm run dev` — start in watch mode
- `npm run build` — compile TypeScript to `dist/`
- `npm start` — run compiled build
- `npm run lint` / `npm run lint:fix` — ESLint
- `npm run format` — Prettier
- `npm run typecheck` — TS type checking only

## Endpoints

| Method | Path             | Description        |
| ------ | ---------------- | ------------------ |
| GET    | /api/health       | Health check       |
| GET    | /api/tasks        | List tasks         |
| GET    | /api/tasks/:id    | Get task by id      |
| POST   | /api/tasks        | Create task         |
| PATCH  | /api/tasks/:id    | Update task         |
| DELETE | /api/tasks/:id    | Delete task         |

### Example

```bash
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "Study TypeScript"}'
```
