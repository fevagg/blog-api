import pg from "pg";
const { Pool } = pg;
import dotenv from "dotenv";

const {configDotenv} = dotenv;

configDotenv({
  path:"./db/.env"
});

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  idleTimeoutMillis: 2000,
});

export { pool };
