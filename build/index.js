// index.ts
console.log("Hello via Bun! hot reload");
Bun.serve({
  port: 3000,
  fetch(request) {
    return new Response("Hello from Bun!  Let's go");
  }
});
