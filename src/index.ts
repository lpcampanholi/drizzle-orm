import db from "./db/index.ts";
import { usersTable } from "./db/schema/users.ts";

async function main() {
    await db.insert(usersTable).values(
        [
            {
                name: "John",
                age: 30,
                email: "john@example.com"
            },
            {
                name: "Anne",
                age: 23,
                email: "anne@example.com"
            },
            {
                name: "Peter",
                age: 12,
                email: "peter@example.com"
            },
            {
                name: "Josh",
                age: 20,
                email: "josh@example.com"
            },
        ]
    );
    console.log("New users created!");

    const users = await db.select().from(usersTable);
    console.log("Getting all users from the database: ", users);
}

main();
