"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRelations = exports.users = void 0;
var drizzle_orm_1 = require("drizzle-orm");
var mysql_core_1 = require("drizzle-orm/mysql-core");
var posts_1 = require("./posts");
exports.users = (0, mysql_core_1.mysqlTable)('users', {
    id: (0, mysql_core_1.serial)().primaryKey(),
    name: (0, mysql_core_1.varchar)({ length: 255 }).notNull(),
    age: (0, mysql_core_1.int)().notNull(),
    email: (0, mysql_core_1.varchar)({ length: 255 }).notNull().unique(),
});
exports.usersRelations = (0, drizzle_orm_1.relations)(exports.users, function (_a) {
    var many = _a.many;
    return ({
        posts: many(posts_1.posts),
    });
});
