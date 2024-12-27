import { mysqlTable, serial, text } from "drizzle-orm/mysql-core";

export const postsTable = mysqlTable("posts", {
    id: serial().primaryKey(),
    text: text().notNull(),
})
