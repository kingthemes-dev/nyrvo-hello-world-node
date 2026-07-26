import http from 'node:http';

const port = Number(process.env.PORT || 3000);

const server = http.createServer((req, res) => {
  const path = new URL(req.url ?? '/', `http://${req.headers.host ?? 'localhost'}`)
    .pathname;

  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  if (req.method === 'GET' && path === '/') {
    res.writeHead(200);
    res.end(
      JSON.stringify({
        message: 'Hello from NYRVO',
        status: 'running',
      }),
    );
    return;
  }

  if (req.method === 'GET' && path === '/health') {
    res.writeHead(200);
    res.end(
      JSON.stringify({
        status: 'ok',
        service: 'nyrvo-hello-world-node',
      }),
    );
    return;
  }

  res.writeHead(404);
  res.end(JSON.stringify({ error: 'Not found' }));
});

server.listen(port, '0.0.0.0', () => {
  console.log(`nyrvo-hello-world-node listening on 0.0.0.0:${port}`);
});
