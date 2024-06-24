import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PublicRouter = () => {
    console.log('PublicRouter');
    //const { status, checking } = useSelector(state => state.auth);

    //if (status == 'authenticated' && !checking) return <Navigate to="/admin" replace />;

    {/* <NavbarPublic /> */ }
    return <Outlet />;

}

export default PublicRouter