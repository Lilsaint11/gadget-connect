"use client"
import Layout from "../components/layout";
import Link from "next/link";
import { supabase } from "../auth/supabase";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { ChangeEvent } from 'react';
import { RotatingLines } from 'react-loader-spinner'
import { Toaster, toast } from 'sonner'

const Signin = () => {
    const router = useRouter()
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const { email, password} = formData;
    function onChange(e: ChangeEvent<HTMLInputElement>){
        setFormData((prevState) => ({
            ...prevState,[e.target.id]: e.target.value
        }))
    }

    async function login(e:any){ 
        e.preventDefault();
        setLoading(true)
        try {
            let { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password
            })
            if(data.user != null){
                setLoading(false)
                toast.success("Login successful")
                router.push("/")
                }else{
                    toast.error("invalid login details")
                }
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
        setLoading(false)
    }

    return ( 
        <div className="flex">
            <Toaster position="top-right" richColors />
            <div className="w-1/2 max-md:w-2/5 h-screen max-sm:hidden">
                <img src="https://images.unsplash.com/photo-1677794438539-b21f8632ab70?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="h-screen object-cover"/>
            </div>
            <div className="sm:h-screen w-1/2 max-md:w-full flex flex-col gap-4  justify-center px-16 max-md:px-8 max-[500px]:px-4 relative">
               <Link href="/"> <p className=" text-slate-400 absolute right-7 top-5 text-[12px] hover:text-black transition duration-200">Return to home</p></Link>
                <div className="flex flex-col gap-2">
                    <h1 className="text-[28px] font-bold max-sm:mt-5">Sign in</h1>
                    <p className="text-[14px]">Don&apos;t have an account? <span className="underline text-blue-600"><Link href="/signup">Sign Up</Link></span></p>
                </div>
                <form action="" className="w-full flex flex-col gap-3" onSubmit={login}>
                    <div className="flex flex-col  gap-1 w-full">
                        <label htmlFor="" className="text-[12px]">Email</label>
                        <input type="email" id="email" value={email} onChange={onChange} className="border border-slate-300 h-12 rounded-md pl-2 focus:outline-none w-full"/>
                    </div>
                    <div className="flex flex-col  gap-1 w-full">
                        <label htmlFor="" className="text-[12px]">Password</label>
                        <input type="password"  id="password" value={password} onChange={onChange} className="border border-slate-300 h-12 rounded-md pl-2 focus:outline-none"/>
                    </div>
                    <button className="h-12 w-56 max-sm:w-full bg-blue-700 text-white rounded-md flex items-center justify-center">
                    {!loading ? "Sign in" : 
                                <RotatingLines
                                    width="26"
                                    strokeColor="white"
                                    strokeWidth="5"
                                    animationDuration="0.75"
                                    ariaLabel="rotating-lines-loading"
                                />
                                }
                    </button>
                </form>
            </div>
        </div>
     );
}
 
export default Signin;