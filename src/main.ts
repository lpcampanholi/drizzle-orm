import { insertPosts } from "./service-posts";
import { insertUsers } from "./service-users";

(async () => {
    await insertUsers();
    await insertPosts();
})();
