import e from "express";
import morgan from "morgan";
import helmet from "helmet";
import { configDotenv } from "dotenv";
configDotenv({
  path: ".env",
});

import mainRouter from "./routes/index.js";
import routes from "./routes/post.route.js";

const port = process.env.port;

const app = e();

app.use(morgan("dev"));
app.use(helmet());
app.use(
  e.urlencoded({
    extended: true,
  })
);
app.use("/", mainRouter);
app.use("/blog", routes);

app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
