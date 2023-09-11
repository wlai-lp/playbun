import { log } from "console";
import { Database } from "bun:sqlite";


console.log("Hello via Bun! let's go");

// start a web server
Bun.serve({
    port: 3000,
    fetch(request) {
        return new Response("Hello from Bun! hot reload");
    },
});

/**
 * order 
 * 1 .env.local (first)
 * 2. NODE_ENV === "production" ? .env.production : .env.development
 * 3. .env
 */
// read env variable
log(`read env local api key = ${process.env.API_TOKEN}`);


// database
const db = new Database(":memory:");
const query = db.query("select 'Bun' as runtime;");
query.get(); // => { runtime: "Bun" }

// log("can i do this");
log(`how about this ${JSON.stringify(query.get())}`);


