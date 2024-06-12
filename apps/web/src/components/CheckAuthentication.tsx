import { Navigate, Outlet } from "react-router-dom";
import { getAccessToken } from "../utilities/localStorage/accessTokens";
import { routes } from "../routes";
import { getUserEmail } from "../utilities/localStorage/email";

const CheckAuthentication = () => {

    const isLoggedIn = getAccessToken();
    const isEmailSaved = getUserEmail();

    if (isLoggedIn === "" || isEmailSaved === "")
        return (
            <Navigate to={routes.login} />
        );


    return (
        <Outlet />
    );
}

export default CheckAuthentication;