import { useContext } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../Components/AuthProvider";

const Register = () => {

    const { user, createUser, signInWithGoogle, signInWithGithub, signInWithFacebook } = useContext(AuthContext);
console.log(user?.email);
    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                toast("You have logged in Successfully!")
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleGoogleSingIn = () => {
        signInWithGoogle();
        toast("You have logged in Successfully!")
    }
    const handleGithubSingIn = () => {
        signInWithGithub();
        toast("You have logged in Successfully!")
    }
    const handleFacebookSignIn = () => {
        signInWithFacebook();
        toast("You have logged in Successfully!")
    }
    return (
        <div className="bg-gray-200 ">
            <div className="hero md:min-h-screen md:container md:mx-auto ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center">
                        <h1 className="text-5xl mt-16 font-bold">Register now!</h1>
                        <p className="py-6 md:w-[500px]">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card mx-auto shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="photo" name="photo" placeholder="Photo" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                                <label className="label">
                                    <Link to="/" className="label-text-alt link link-hover">Forgot Password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="button btn-fill">Register</button>
                            </div>
                            <p>Already have an account? <Link to="/login" className="underline text-[#ff2e74]">Login here</Link> </p>

                        </form>
                        <div className="flex items-center justify-center text-4xl mb-8">
                            <button className="mx-3" onClick={handleGoogleSingIn}><FcGoogle /></button>
                            <button className="mx-3" onClick={handleGithubSingIn}><FaGithub /></button>
                            <button className="mx-3" onClick={handleFacebookSignIn}><FaFacebook /></button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;