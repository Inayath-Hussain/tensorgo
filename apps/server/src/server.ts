import express from "express";
import morgan from "morgan";
import { env } from "./config/env";

const app = express();


app.use(morgan("dev"));



app.listen(env.PORT, () => console.log(`server listening on port ${env.PORT} in ${env.NODE_ENV}`))