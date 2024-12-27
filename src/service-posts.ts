import { getConnection } from "./db/connection.ts";
import { postsTable } from "./db/schema/posts.ts";


export async function readPosts() {
    const db = await getConnection();
    const posts = await db.query.postsTable.findMany();
    console.log(posts);
}

export async function readOnePost() {
    const db = await getConnection();
    const post = await db.query.postsTable.findFirst();
    console.log(post);
}

export async function insertPosts() {
    const db = await getConnection();
    for (let i = 1; i <= 100; i++) {
        await db.insert(postsTable).values({ text: `random text ${i}` })
    }
}
