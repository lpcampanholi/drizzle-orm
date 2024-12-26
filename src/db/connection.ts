import 'dotenv/config';
import * as schema from "./schema/posts";
import { drizzle } from "drizzle-orm/mysql2";
import { createConnection } from "mysql2/promise";

let connection;

export async function getConnection() {
    if(!connection) connection = await createConnection({
        uri: process.env.DATABASE_URL,
    });
    
    return drizzle({ client: connection, schema, mode: "default" });
}
