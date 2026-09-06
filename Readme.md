# Express TypeScript Starter API

A lightweight Express API starter built with TypeScript and ESM. It includes CORS, JSON parsing, environment configuration, and a basic health check route.

## Features

- Express 5 server setup
- TypeScript support
- CORS enabled
- JSON body parsing
- Environment-based config
- Health endpoint for app status checks
- Node.js watch mode for local development

## Tech Stack

- Node.js
- TypeScript
- Express
- dotenv
- CORS

## Project Structure

```text
.
├── package.json
├── tsconfig.json
├── Readme.md
├── src/
│   ├── index.ts
│   ├── features/
│   │   └── health/
│   │       └── health.controller.ts
│   ├── routes/
│   │   └── index.ts
│   └── shared/
│       └── config/
│           └── index.ts
└── .env
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Run the app in development mode

```bash
npm run dev
```

This starts the server with Node's built-in watcher and logs the local URL.

By default, the app listens on:

```text
http://localhost:3000
```

## Environment Variables

The app reads environment values from `process.env` and supports:

- `PORT` - server port (defaults to `3000`)
- `NODE_ENV` - set to `production` to disable local start behavior

Example `.env`:

```env
PORT=3000
NODE_ENV=development
```

## API Endpoints

### Health check

```http
GET /api/health
```

Response:

```json
{
  "status": "ok"
}
```

## Notes

- The application is configured to expose the API under the `/api` prefix.
- The main server entry is `src/index.ts`.
- The project is designed as a simple starter for building more API features.

## License

MIT
