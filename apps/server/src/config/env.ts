import { cleanEnv, port, str } from "envalid";
import { config } from "dotenv";

config();

export const env = cleanEnv(process.env, {
    PORT: port({ default: 8080 }),
    NODE_ENV: str(),
    CLIENT_ID: str(),
    CLIENT_SECRET: str(),
    REDIRECT_URI: str(),
    FRONTEND_URL: str()
});