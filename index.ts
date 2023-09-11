console.log("Hello via Bun! let's go");

Bun.serve({
    port: 3000,
    fetch(request) {
        return new Response("Hello from Bun! hot reload");
    },
});


