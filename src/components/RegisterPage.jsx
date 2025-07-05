import { useState } from 'react'
import { useForm } from 'react-hook-form';
import TextField from './TextField';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/api';
import toast from 'react-hot-toast';

const RegisterPage = () => {
    const navigate = useNavigate();
    const [loader,setLoader] = useState(false);
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

    const registerHandler = async (data) => {
        console.log(data);  
        setLoader(true);
        try{
            const {data:response} = await api.post(
                "/api/auth/public/register",data
            );
            reset();
            navigate("/login");
            toast.success("Registration successful, please login")
        }catch(err){
            navigate("/error");
            console.log(err);
            toast.error("Registration failed, please try again");
        }
        finally{
            setLoader(false);
        }
    }
  return (
    <div
        className='min-h-[calc(100vh-64px)] flex justify-center items-center'
    >
        <form onSubmit={handleSubmit(registerHandler)}
        className="sm:w-[450px] w-[360px]  shadow-2xl py-8 sm:px-8 px-4 rounded-md">
            <h1 className="text-center font-serif text-btnColor font-bold lg:text-3xl text-2xl">
                Register Here
            </h1>

            <hr className='mt-2 mb-5 text-black'/>

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
                    label="Email"
                    required
                    id="email"
                    type="email"
                    message="Email is required"
                    placeholder="Enter your email"
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
                    min={6}
                    errors={errors}
                />
            </div>

            <button 
                disabled = {loader}
                type='submit'
                className="bg-gradient-to-r from-blue-300 to-blue-500 text-slate-900 font-semibold w-full py-3 rounded-md my-4 hover:from-blue-400 hover:to-blue-600 hover:text-white hover:cursor-pointer transition-all duration-300 shadow-sm"
            >
                {loader ? "Loading..." : "Register"}
            </button>

            <p className='text-center text-slate-700 text-sm mt-6'>
                Already have an account?  
                <Link to="/login">
                    <span className='text-blue-500 font-semibold ml-1 cursor-pointer hover:underline'>
                        Login
                    </span>
                </Link>
                
            </p>
        </form>
    </div>
  )
}

export default RegisterPage