const { pgTable, text } = require("drizzle-orm/pg-core");

module.exports.table = pgTable("table", { id: text("id").primaryKey() });
