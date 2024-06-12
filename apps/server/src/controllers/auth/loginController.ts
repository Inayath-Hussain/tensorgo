import { RequestHandler } from "express";
import { env } from "../../config/env";

export const loginController: RequestHandler = (req, res, next) => {
    const redirectURL = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${env.CLIENT_ID}&redirect_uri=${env.REDIRECT_URI}&scope=https://www.googleapis.com/auth/userinfo.email`;
    res.redirect(redirectURL);
}