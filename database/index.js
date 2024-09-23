const { drizzle } = require("drizzle-orm/node-postgres");
const { newDb } = require("pg-mem");
const schema = require("./schema");

const { Client } = newDb().adapters.createPg();

module.exports = drizzle(new Client(), { schema });
