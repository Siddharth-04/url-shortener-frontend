import { useState } from 'react'
import { useForm } from 'react-hook-form';
import TextField from './TextField';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/api';
import toast from 'react-hot-toast';
import { useStoreContext } from '../contextApi/ContextApi';

const Login = () => {
    const navigate = useNavigate();
    const [loader,setLoader] = useState(false);
    const {setToken} = useStoreContext();

    const{
        register,
        handleSubmit,
        reset,
        formState : {errors}
    } = useForm({
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
        mode: "onTouched",
    });

    const loginHandler = async (data) => { 
        setLoader(true);
        try{
            const {data:response} = await api.post(
                "/api/auth/public/login",data
            );
            console.log(response.token); 
            //storing the token in local storage and setting token in context
            //so that it can be accessed globally
            setToken(response.token);
            localStorage.setItem("JWT_TOKEN",JSON.stringify(response.token));

            toast.success("Login successful");
            reset();
            navigate("/dashboard");
        }catch(err){
            navigate("/error");
            console.log(err);
            toast.error("Login failed, please try again");
        }
        finally{
            setLoader(false);
        }
    }
  return (
    <div
        className='min-h-[calc(100vh-64px)] flex justify-center items-center'
    >
        <form onSubmit={handleSubmit(loginHandler)}
        className="sm:w-[450px] w-[360px] bg-dark shadow-2xl py-8 sm:px-8 px-4 rounded-2xl">
            <h1 className="font-heading text-center font-serif text-btnColor font-bold lg:text-3xl text-2xl">
                Login Here
            </h1>

            <hr className='mt-2 mb-5 text-white'/>

            <div className="flex flex-col gap-3">
                <TextField
                    label="Username"
                    required
                    id="username"
                    type="text"
                    message="Username is required"
                    placeholder="Enter your username"
                    register={register}
                    errors={errors}
                />

                <TextField
                    label="Password"
                    required
                    id="password"
                    type="password"
                    message="Password is required"
                    placeholder="Enter your password"
                    register={register}
                    min={2}
                    errors={errors}
                />
            </div>

            <button 
                disabled = {loader}
                type='submit'
                className="mt-12 text-white font-semibold w-full py-3 rounded-md my-4 hover:from-blue-400 hover:to-blue-600 hover:text-white hover:cursor-pointer transition-all duration-300 shadow-sm"
            >
                {loader ? "Loading..." : "Login"}
            </button>

            <p className='font-text text-center text-blue text-sm mt-6'>
                Don't have an account?  
                <Link to="/register">
                    <span className='font-text text-white font-semibold ml-1 cursor-pointer hover:underline'>
                        Sign Up
                    </span>
                </Link>
                
            </p>
        </form>
    </div>
  )
}

export default Login