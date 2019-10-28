const path = require('path');
export default {
  PORT: Number(process.env.PORT) || "3030",
  DEFAULT_DB_CONFIG: {
    logging: true,
    synchronize: true,
    entities: [path.join(__dirname, "./entity/*.js")],
    // migrations: ["./migration/**/*.ts"],
    subscribers: [path.join(__dirname, "./subscriber/*.js")]
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
