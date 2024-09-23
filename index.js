const { pushSchema } = require("drizzle-kit/api");

pushSchema(require("./database/schema"), require("./database"));
