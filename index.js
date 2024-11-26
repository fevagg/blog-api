import e from "express";
import morgan from "morgan";
import helmet from "helmet";
import { configDotenv } from "dotenv";
configDotenv({
  path: ".env",
});

const port = process.env.port;

const app = e();

app.use(morgan("dev"));
app.use(helmet());

app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
