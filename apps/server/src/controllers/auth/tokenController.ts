import axios from "axios";
import { RequestHandler } from "express";
import { env } from "../../config/env";



interface UserInfo {
    id: string
    email: string
    verified_email: boolean
    picture: string
}


export const tokenController: RequestHandler = async (req, res, next) => {
    const code = req.query.code as string;

    const result = await axios.post<{ access_token: string }>("https://oauth2.googleapis.com/token", {
        client_id: env.CLIENT_ID,
        client_secret: env.CLIENT_SECRET,
        code,
        grant_type: 'authorization_code',
        redirect_uri: env.REDIRECT_URI
    });

    const accessToken = result.data.access_token;

    const userResponse = await axios.get<UserInfo>('https://www.googleapis.com/oauth2/v1/userinfo?alt=json', {
        headers: { Authorization: `Bearer ${accessToken}` }
    });

    const { email } = userResponse.data;
    console.log(userResponse.data);

    res.redirect(env.FRONTEND_URL + `?accessToken=${accessToken}&email=${email}`)
}