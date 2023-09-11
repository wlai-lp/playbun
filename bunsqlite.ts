import { Database } from "bun:sqlite";
import { log } from "console";

const db = new Database(":memory:");
const query = db.query("select 'Bun' as runtime;");
query.get(); // => { runtime: "Bun" }

// log("can i do this");
log(`how about this ${JSON.stringify(query.get())}`);

