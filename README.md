# nyrvo-hello-world-node

Deterministic Node.js HTTP fixture for NYRVO runtime/provider integration tests (especially Render).

## Local

```bash
npm start
```

Listens on `$PORT` (default `3000`) at `0.0.0.0`.

## Endpoints

- `GET /` → `{ "message": "Hello from NYRVO", "status": "running" }`
- `GET /health` → `{ "status": "ok", "service": "nyrvo-hello-world-node" }`

## Render

Start command: `npm start`. The service binds to `$PORT`.

This repository has no runtime dependencies (Node built-ins only).
