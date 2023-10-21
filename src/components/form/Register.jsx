
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from "react-router-dom";
import { AiOutlineGoogle, AiFillGithub } from 'react-icons/ai';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';



const Register = () => {
    const { createUser,googleUser } = useContext(AuthContext)
    const [success, setSuccess] = useState("")
    const [regError, setRegError] = useState("")
    const [passwordShow, setPasswordShow] = useState(false)
    const handleRegister = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get("email");
        const password = form.get("password");
        console.log(email, password,)
        setSuccess("")
        setRegError("")
        if (password.length < 6) {
            toast.error("password must be 6 cherecter")
            return
        }
        else if (!/[a-z]/.test(password)) {
            toast.error("must be capital letter")
            return
        }
        if (!/[/e.g., !, @, #, $, %, etc./]/.test(password)) {
            toast.error("password must be special charecter")
            return
        }

        createUser(email, password)
            .then(res => {
                console.log(res)
                setSuccess(res)
                // toast.success("Your Register is Successfull!!!")
                Swal.fire({
                    title: 'success!',
                    text: 'Your Login Success!!!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                return

            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message
                console.log(errorCode, errorMessage)
                setRegError(errorMessage)
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
                    <form onSubmit={handleRegister} className="card-body">
                        <h1 className='font-bold mb-5'>Create an Account</h1>
                        <div className="form-control">
                            <input type="text"
                                placeholder="Enter Your Name"
                                name="name"
                                className="input rounded-3xl
                          input-bordered " required />
                        </div>
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
                            <div className='flex mt-3 justify-between items-center'>
                            </div>
                            <p className='text-xl absolute top-[210px] right-12 ' onClick={() => setPasswordShow(!passwordShow)}>
                                {passwordShow ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>}
                            </p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-info text-white rounded-3xl">Create an Account
                                <Link to={"/"}></Link>
                            </button>
                            < Toaster />
                        </div>
                        <div className='text-center'>
                            <p className='font-bold'>or Sing Up with</p>
                            <div className='flex justify-center mt-3 gap-4'>
                                <button onClick={handleGoogle} className='border p-5 rounded-2xl text-2xl' ><AiOutlineGoogle></AiOutlineGoogle></button>
                                <a onClick={""} className='border p-5 rounded-2xl text-2xl' ><AiFillGithub></AiFillGithub></a>
                            </div>
                        </div>
                        <p className='text-center font-bold text-sm'>Don't Have An Account ?<Link className='text-sky-400' to={'/login'}> Login</Link></p>
                    </form>
                    {
                        regError && toast.error(regError)

                    }
                </div>
                <div>
                </div>
            </div>
        </div>
    );
};

export default Register;