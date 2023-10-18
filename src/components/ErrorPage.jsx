import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center mt-48 space-y-3">
            <h1 className="text-3xl">Oopps!</h1>
            <p>Sorry ,!!!!</p>
            <Link to={'/'}><button className="btn btn-accent text-white">GoTo Home</button></Link>
        </div>
    );
};

export default ErrorPage;