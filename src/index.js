const TARGET = "https://pnl.zagrosmaal.ir:8443";

async function handler(request) {
  const url = new URL(request.url);

  const response = await fetch(
    TARGET + url.pathname + url.search,
    {
      method: request.method,
      headers: request.headers,
      body: request.body
    }
  );

  return response;
}

addEventListener("fetch", event => {
  event.respondWith(handler(event.request));
});
