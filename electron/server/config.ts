const path = require('path');
export default {
  PORT: Number(process.env.PORT) || "3030",
  DEFAULT_DB_CONFIG: {
    logging: true,
    autoSchemaSync: true,
    synchronize: true,
    autoSave: true,
    entities: [path.join(__dirname, "./entity/*.common.js")],
    // migrations: ["./migration/**/*.ts"],
    // subscribers: [path.join(__dirname, "./subscriber/*.js")]
  },
  DEFAULT_SQLITE: {
    type: "sqlite",
    database: `example-typeorm.sql`
  },
  DEFAULT_MONGODB: {
    type: "mongodb",
    url: `mongodb://localhost:27017/example-typeorm`
  }
};
