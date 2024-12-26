import { mysqlTable, serial, varchar } from "drizzle-orm/mysql-core";

export const postsTable = mysqlTable("posts", {
    id: serial().primaryKey(),
    text: varchar({ length: 1000 }).notNull(),
})
