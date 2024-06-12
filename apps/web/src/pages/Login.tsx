import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { env } from "../env";
import { apiURLs } from "../services/apiURLs";
import { setAccessToken } from "../utilities/localStorage/accessTokens";
import { routes } from "../routes";
import { setUserEmail } from "../utilities/localStorage/email";

const LoginPage = () => {

    const navigate = useNavigate()

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const accessToken = urlParams.get('accessToken');
        const email = urlParams.get('email');

        if (accessToken && email) {
            setAccessToken(accessToken);
            setUserEmail(email);

            navigate(routes.home)
        }
    }, [])




    const handleLogin = () => {
        window.location.assign(env.VITE_SERVER_BASE_URL + apiURLs.login);
    }


    return (
        <div className="w-screen h-screen bg-sky-400
        flex justify-center items-center">

            <button onClick={handleLogin} className="py-3 px-8 bg-white text-2xl rounded-2xl flex">
                Login with
                <p className="ml-2 font-medium">
                    <span className="text-blue-500">G</span>
                    <span className="text-red-500">o</span>
                    <span className="text-yellow-500">o</span>
                    <span className="text-blue-500">g</span>
                    <span className="text-green-500">l</span>
                    <span className="text-red-500">e</span>
                </p>
            </button>

        </div>
    );
}

export default LoginPage;