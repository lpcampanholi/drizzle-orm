import { mysqlTable, mysqlSchema, AnyMySqlColumn, primaryKey, int, varchar } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"

export const users = mysqlTable("users", {
	id: int().notNull(),
	name: varchar({ length: 250 }),
	email: varchar({ length: 250 }),
},
(table) => [
	primaryKey({ columns: [table.id], name: "users_id"}),
]);
