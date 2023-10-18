import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <>
            <div className="text-center mt-20">
                <span className="loading loading-spinner text-primary"></span>
                <span className="loading loading-spinner text-secondary"></span>
                <span className="loading loading-spinner text-accent"></span>
            </div>
        </>
    }
    if (user) {
        return children
    }
    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRouter;