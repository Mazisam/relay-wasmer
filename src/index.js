const TARGET = "https://pnl.zagrosmaal.ir:8443";

async function handler(request) {
  const url = new URL(request.url);
  const targetUrl = TARGET + url.pathname + url.search;

  const headers = new Headers(request.headers);
  headers.set("host", "pnl.zagrosmaal.ir");

  return fetch(targetUrl, {
    method: request.method,
    headers,
    body: request.body,
    redirect: "manual"
  });
}

addEventListener("fetch", (event) => {
  event.respondWith(handler(event.request));
});
