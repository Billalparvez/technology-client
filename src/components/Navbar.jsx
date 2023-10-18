import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    const links = <>
        <NavLink className="mr-5" to={'/'}>Home</NavLink>
        <NavLink className="mr-5" to={'/addProduct'}>Add Product</NavLink>
        <NavLink className="mr-5" to={'/myCart'}>My Cart</NavLink>
    </>
    return (
        <div className="navbar bg-base-100 max-w-7xl mx-auto p-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor"><path strokeLinecap="round"
                                strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                     {links}
                    </ul>
                </div>
                <img className="w-12 h-12 rounded-full" src="https://i.postimg.cc/MGN0F8LB/istockphoto-1144557228-1024x1024.jpg" alt="" />
                <a className="btn btn-ghost normal-case text-xl">Technology</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {links}
                </ul>
            </div>
            <div className="navbar-end ">
                <Link className="btn" to={'/login'}>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;