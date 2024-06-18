import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {

    const { status, checking } = useSelector(state => state.auth);
    if (status === 'no-authenticated' && !checking) return <Navigate to="/auth/login" replace />;

    {/* <NavbarPrivate /> */ }
    return <Outlet />;
}

export default PrivateRouter