import { eq } from "drizzle-orm";
import { getConnection } from "./db/connection";
import { posts } from "./db/schema/posts";
import { users } from "./db/schema/users";

(async () => {
    const db = await getConnection();
    const allPostsAndUsers = await db
        .select({
            postId: posts.id,
            postContent: posts.content,
            userName: users.name,
            userAge: users.age, 
            userEmail: users.email
        })
        .from(posts)
        .leftJoin(users, eq(users.id, posts.authorId));
        console.log(allPostsAndUsers);
})();
