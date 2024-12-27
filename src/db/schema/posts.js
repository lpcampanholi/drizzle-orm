"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsRelations = exports.posts = void 0;
var mysql_core_1 = require("drizzle-orm/mysql-core");
var users_1 = require("./users");
var drizzle_orm_1 = require("drizzle-orm");
exports.posts = (0, mysql_core_1.mysqlTable)("posts", {
    id: (0, mysql_core_1.serial)().primaryKey(),
    content: (0, mysql_core_1.text)().notNull(),
    authorId: (0, mysql_core_1.int)("user_id").notNull(),
});
exports.postsRelations = (0, drizzle_orm_1.relations)(exports.posts, function (_a) {
    var one = _a.one;
    return ({
        author: one(users_1.users, {
            fields: [exports.posts.authorId],
            references: [users_1.users.id]
        }),
    });
});
