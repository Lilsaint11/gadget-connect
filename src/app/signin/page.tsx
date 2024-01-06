"use client"
import Layout from "../components/Layout";
import Link from "next/link";

const Signin = () => {
    return ( 
        <Layout showHeaderAndFooter={false}>
        <div className="flex">
            <div className="w-1/2 h-screen">
                <img src="https://images.unsplash.com/photo-1677794438539-b21f8632ab70?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="h-screen object-cover"/>
            </div>
            <div className="h-screen w-1/2 flex flex-col gap-4  justify-center px-16 relative">
               <Link href="/"> <p className=" text-slate-400 absolute right-7 top-5 text-[12px] hover:text-black transition duration-200">Return to home</p></Link>
                <div className="flex flex-col gap-2">
                    <h1 className="text-[28px] font-bold">Sign in</h1>
                    <p className="text-[14px]">Don't have an account? <span className="underline text-blue-600"><Link href="/signup">Sign Up</Link></span></p>
                </div>
                <form action="" className="w-full flex flex-col gap-3">
                    <div className="flex flex-col  gap-1 w-full">
                        <label htmlFor="" className="text-[12px]">Email</label>
                        <input type="email" className="border border-slate-300 h-12 rounded-md pl-2 focus:outline-none w-full"/>
                    </div>
                    <div className="flex flex-col  gap-1 w-full">
                        <label htmlFor="" className="text-[12px]">Password</label>
                        <input type="password" className="border border-slate-300 h-12 rounded-md pl-2 focus:outline-none"/>
                    </div>
                    <button className="h-12 w-56 bg-blue-700 text-white rounded-md ">Sign in</button>
                </form>
            </div>
        </div>
    </Layout>
     );
}
 
export default Signin;