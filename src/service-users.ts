import { eq, gte } from "drizzle-orm";
import { usersTable } from "./db/schema/users.ts";
import { getConnection } from "./db/connection.ts";

const db = getConnection();

export  async function readUsers() {
    const db = await getConnection();
    const users = await db.select().from(usersTable);
    console.log(users);
}

export async function createUsers() {
    const db = await getConnection();
    for (let i = 1; i <= 20; i++) {
        await db.insert(usersTable).values({name: "name", age: i, email: `mail${i}@mail.com`})
    }
}

export async function updateUsers() {
    const db = await getConnection();
    for (let i = 1; i <= 100; i++) {
        await db.update(usersTable).set({ age: 50 }).where(gte(usersTable.age, 20));
    }
}

export async function deleteUsers() {
    const db = await getConnection();
    await db.delete(usersTable).where(eq(usersTable.age, 50));
}
