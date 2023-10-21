
import { Link } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye, AiOutlineGoogle, AiFillGithub } from 'react-icons/ai';
import toast, { Toaster } from 'react-hot-toast';
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
const Login = () => {
    const { singInUser,googleUser } = useContext(AuthContext)
    const [passwordShow, setPasswordShow] = useState(false)
    const [loginError, setLoginError] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get("email");
        const password = form.get("password");
        const checkBox = e.target.box.checked;
        setLoginError("")
        console.log(email, password)
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            alert("Email NOt Match")

        }
        if (!checkBox) {
            toast.error("Must be selected box")
            return
        }
        singInUser(email, password)
            .then(res => {
                console.log(res.user)
                Swal.fire({
                    title: 'success!',
                    text: 'Your Login Success!!!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })
            .catch(error => {
                console.log(error)
                setLoginError(error.message)
                // toast.error("No match")
            })
    }
    const handleGoogle = () => {
        googleUser()
            .then()
            .catch()
        console.log("google")
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: 'url(https://i.postimg.cc/xCQRqDk8/80-cm-Vtb3-Rl-X3dvcmtpbmct-MDg.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="card flex w-full max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className='font-bold mb-5'>LOgin</h1>
                        <div className="form-control">
                            <input type="email"
                                placeholder="Enter Your Email"
                                name="email"
                                className="input rounded-3xl
                              input-bordered " required />
                        </div>
                        <div className="form-control">
                            <input type={passwordShow ? "text" : "password"}
                                placeholder="password"
                                name="password"
                                className="relative input 
                              input-bordered rounded-3xl"
                                required />
                            <div className='mt-5 px-3 flex items-center justify-between'>
                                <div>
                                    <input className='mr-3' type="checkbox" name="box" id="checkbox" />
                                    <label htmlFor="">Remember Me<a href=""></a></label>
                                </div>
                                <label className="label">
                                    <a href="#" className="text-info label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <p className='text-xl absolute top-[155px] right-12 ' onClick={() => setPasswordShow(!passwordShow)}>
                                {passwordShow ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>}
                            </p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-info text-white rounded-3xl">Login
                            </button>
                            < Toaster />
                        </div>
                        <div className='text-center'>
                            <p className='font-bold'>or Sing In with</p>
                            <div className='flex justify-center mt-3 gap-4'>
                                <button onClick={handleGoogle} className='border p-5 rounded-2xl text-2xl' ><AiOutlineGoogle></AiOutlineGoogle></button> 
                                <a onClick={""} className='border p-5 rounded-2xl text-2xl' ><AiFillGithub></AiFillGithub></a>
                            </div>
                        </div>
                        <p className='text-center font-bold text-sm'>Don't Have An Account ?<Link className='text-sky-400' to={'/register'}> Register Now</Link></p>
                    </form>
                    {
                        loginError && <p className='text-red-500 font-bold'>{loginError}</p>

                    }

                </div>
                <div>
                </div>
            </div>
        </div>
    );
};

export default Login;