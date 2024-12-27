import { getConnection } from "./db/connection.ts";
import { posts } from "./db/schema/posts.ts";

export async function readPosts() {
    const db = await getConnection();
    const posts = await db.query.posts.findMany();
    console.log(posts);
}

export async function readOnePost() {
    const db = await getConnection();
    const post = await db.query.posts.findFirst();
    console.log(post);
}

export async function insertPosts() {
    const db = await getConnection();
    for (let i = 1; i <= 100; i++) {
        await db.insert(posts).values({
            content: `random text ${i}`,
            authorId: Math.floor(Math.random() * 20 + 1),
        })
    }
}
