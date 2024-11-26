import { Pool } from "pg";
import { configDotenv } from "dotenv";

configDotenv({
  path: "../.env",
});

const pool = new Pool({
  user: process.env.db_user,
  password: process.env.db_pass,
  host: process.env.db_host,
  port: process.env.db_port,
  database: process.env.db_name,
  idleTimeoutMillis: 2000,
});

export { pool };
