import { eq, gte } from "drizzle-orm";
import { users } from "./db/schema/users.ts";
import { getConnection } from "./db/connection.ts";

export async function readUsers() {
    const db = await getConnection();
    const allUsers = await db.select().from(users);
    console.log(allUsers);
}

export async function insertUsers() {
    const db = await getConnection();
    for (let i = 1; i <= 20; i++) {
        await db.insert(users).values({ name: "name", age: Math.random() * 20 + 1, email: `mail${i}@mail.com` })
    }
}

export async function updateUsers() {
    const db = await getConnection();
    for (let i = 1; i <= 100; i++) {
        await db.update(users).set({ age: 50 }).where(gte(users.age, 20));
    }
}

export async function deleteUsers() {
    const db = await getConnection();
    await db.delete(users).where(eq(users.age, 50));
}
