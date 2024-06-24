import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRouter = () => {

    const { pathname, search } = useLocation();
    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath);

    const { status, checking } = useSelector(state => state.auth);
    if (status === 'no-authenticated' && !checking) return <Navigate to="/auth/login" replace />;

    console.log('PrivateRouter');
    {/* <NavbarPrivate /> */ }
    return <Outlet />;
}

export default PrivateRouter