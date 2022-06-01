import { useNavigate } from "solid-app-router";
import { FC } from "../../../types";

const RequiredAuth: FC = ({ children }) => {
    // temporary
    const isAuth = false;
    const isAdmin = false;
    const navigate = useNavigate();

    if (!isAuth) {
        return navigate("/login", { replace: true });
    }

    return children;
};

export default RequiredAuth;