"use client"
import Layout from "../components/Layout";
import Link from "next/link";
import { useState } from "react";


const Signup = () => {
    const [vendor, setVendor] = useState(true)
    return ( 
        <Layout showHeaderAndFooter={false}>
            <div className="flex">
                <div className="w-1/2 h-screen">
                    <img src="https://images.unsplash.com/photo-1605170439002-90845e8c0137?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="h-screen object-cover"/>
                </div>
                <div className="h-screen w-1/2 flex flex-col gap-4  justify-center px-16 relative">
                   <Link href="/"> <p className=" text-slate-400 absolute right-7 top-5 text-[12px] hover:text-black transition duration-200">Return to home</p></Link>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-[28px] font-bold">Create an account</h1>
                        <p className="text-[14px]">Already have an account? <span className="underline text-blue-600"><Link href="/signin">Sign In</Link></span></p>
                    </div>
                    <div className="flex items-center gap-5">
                        <h1 className={`${vendor && "font-bold underline"} cursor-pointer`} onClick={()=>setVendor(true)}>Vendor</h1>
                        <h1 className={`${!vendor && "font-bold underline"} cursor-pointer`} onClick={()=>setVendor(false)}>User</h1>
                    </div>
                    {vendor ?
                        <form action="" className="w-full flex flex-col gap-3">
                        <div className="flex flex-col  gap-1">
                            <label htmlFor="" className="text-[12px]">Full Name</label>
                            <input type="text" className="border border-slate-300 h-12 rounded-md pl-2 focus:outline-none"/>
                        </div>
                        <div  className="flex justify-between gap-5">
                            <div className="flex flex-col  gap-1 w-full">
                                <label htmlFor="" className="text-[12px]">Business Name</label>
                                <input type="text" className="border border-slate-300 h-12 rounded-md pl-2 focus:outline-none w-full"/>
                            </div>
                            <div className="flex flex-col  gap-1 w-full">
                                <label htmlFor="" className="text-[12px]">Email</label>
                                <input type="email" className="border border-slate-300 h-12 rounded-md pl-2 focus:outline-none w-full"/>
                            </div>
                        </div>
                        <div className="flex flex-col  gap-1">
                            <label htmlFor="" className="text-[12px]">Location</label>
                            <input type="text" className="border border-slate-300 h-12 rounded-md pl-2 focus:outline-none"/>
                        </div>
                        <div className="flex justify-between gap-5">
                            <div className="flex flex-col  gap-1 w-full">
                                <label htmlFor="" className="text-[12px]">Phone Number</label>
                                <input type="text" className="border border-slate-300 h-12 rounded-md pl-2 focus:outline-none"/>
                            </div>
                            <div className="flex flex-col  gap-1 w-full">
                                <label htmlFor="" className="text-[12px]">Password</label>
                                <input type="password" className="border border-slate-300 h-12 rounded-md pl-2 focus:outline-none"/>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" name="" id="" />
                            <p className="text-[12px]">I agree to the <span className="underline text-blue-600"> terms and conditions</span></p>
                        </div>
                        <button className="h-12 w-56 bg-blue-700 text-white rounded-md ">Create Account</button>
                        </form> :
                        <form action="" className="w-full flex flex-col gap-3">
                            <div className="flex flex-col  gap-1">
                                <label htmlFor="" className="text-[12px]">Full Name</label>
                                <input type="text" className="border border-slate-300 h-12 rounded-md pl-2 focus:outline-none"/>
                            </div>
                            
                            <div className="flex flex-col  gap-1 w-full">
                                <label htmlFor="" className="text-[12px]">Email</label>
                                <input type="email" className="border border-slate-300 h-12 rounded-md pl-2 focus:outline-none w-full"/>
                            </div>
                            <div className="flex flex-col  gap-1 w-full">
                                <label htmlFor="" className="text-[12px]">Phone Number</label>
                                <input type="text" className="border border-slate-300 h-12 rounded-md pl-2 focus:outline-none"/>
                            </div>
                            <div className="flex flex-col  gap-1 w-full">
                                <label htmlFor="" className="text-[12px]">Password</label>
                                <input type="password" className="border border-slate-300 h-12 rounded-md pl-2 focus:outline-none"/>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" name="" id="" />
                                <p className="text-[12px]">I agree to the <span className="underline text-blue-600"> terms and conditions</span></p>
                            </div>
                            <button className="h-12 w-56 bg-blue-700 text-white rounded-md ">Create Account</button>
                        </form>
                    }
                </div>
            </div>
        </Layout>
     );
}
 
export default Signup;