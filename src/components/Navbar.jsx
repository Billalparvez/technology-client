import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    // console.log(user)
    const links = <>
        <li> <NavLink className="mr-5" to={'/'}>Home</NavLink></li>
        <li> <NavLink className="mr-5" to={'/addProduct'}>Add Product</NavLink></li>
        <li><NavLink className="mr-5" to={'/myCart'}>My Cart</NavLink></li>

        {
            user ?
                <>
                    <li><NavLink to={'/about'}>About</NavLink></li>
                    <li><NavLink to={'/features'}>Features</NavLink></li>
                </> : ""
        }
    </>
    const handleSingOut = () => {
        logOut()
            .then()
            .catch()

    }
    return (
        <div className="navbar bg-base-100 max-w-7xl mx-auto p-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor"><path strokeLinecap="round"
                                strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                        {links}
                    </ul>
                </div>
                <img className="w-10 h-10 rounded-full" src="https://i.postimg.cc/wxrhP7ry/istockphoto-1452604857-1024x1024.jpg" alt="" />
                <a className="btn btn-ghost normal-case text-xl text-sky-500">Technology</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ">
                    {links}
                </ul>
            </div>
            <div className="navbar-end ">

                {
                    user ? <>
                        {/* <p>{user.displayName}</p> */}
                        <p className="ml-3">{user.photoURL}</p>
                        <p>{user.email}</p>
                        <a onClick={handleSingOut} className="btn">SingOUt</a>
                    </> : <Link className="btn" to={'/login'}>Login</Link>
                }
            </div>

            {
                // user ? <>
                //     <p>{user.displayName}</p>
                //     <p className="ml-3">{user.photoURL}</p>
                //     {/* <p>{user.email}</p> */}
                //     <a onClick={handleSingIn} className="btn">SingOUt</a>
                // </>
                //     : ""

            }
        </div>
    );
};

export default Navbar;