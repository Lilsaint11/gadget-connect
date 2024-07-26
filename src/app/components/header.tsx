"use client"
import { FaOpencart } from "react-icons/fa6";
import { GoPerson,GoSearch } from "react-icons/go";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import { supabase } from "../auth/supabase";
import { useStore } from "../store/zustand";
import { useEffect, useState } from "react";
const Header = () => {
    const [userSession,setUserSession] = useState<any>()
    const [sessionState,setSessionState] = useState<boolean>(false)
    const {setUserDetails} = useStore();
    const [navMenu,setNavMenu] = useState<boolean>(false)
    async function getUserInfo() {
        // Retrieve the current session
        const { data: session, error } = await supabase.auth.getSession();
      
        if (error) {
          console.error('Error getting session:', error);
          return;
        }
      
        // Check if a user is logged in (session exists)
        if (!session) {
          console.log('Not logged in');
          return;
        }
      
        // Access user data from the session (assuming user object is present)
        const user = session;
        console.log('Logged in user:', user.session?.user);
        setUserSession(session)
        setUserDetails(user?.session?.user)
      }

      async function logout(){    
        if (confirm("Do you want to logout")) {
        
          const { error } = await supabase.auth.signOut();

          if (error) {
            console.error('Error logging out:', error);
            return;
          }
          setSessionState(!sessionState)
          console.log('Logged out successfully')
          console.log(sessionState)
        }
      }

      useEffect(()=>{
        getUserInfo()
      },[sessionState])
    return ( 
        <div className="flex flex-col gap-5 w-full md:my-1 p-5 pb-0">
            <div className="flex justify-between items-center gap-5 md:gap-10 relative">
              <Link href="/"><h1 className="text-blue-600 font-bold  sm:text-[20px] cursor-pointer">GadgetsConnect</h1></Link>
                <div className="flex w-full h-8 md:h-10 max-sm:hidden">
                    <input type="text" className="w-full border border-blue-300 h-full  rounded-tl-sm rounded-bl-sm focus:outline-none pl-3"/>
                    <h5 className="h-full bg-blue-600 text-white w-10 md:w-12 flex items-center justify-center cursor-pointer rounded-tr-sm rounded-br-sm"><GoSearch className="text-[20px]"/></h5>
                </div>
                <div className="flex items-center gap-5">
                    <GoSearch className="sm:hidden cursor-pointer text-[20px]"/>
                    <Link href="/favorites"><FaOpencart className="cursor-pointer text-[20px]"/></Link>
                    <Link href="/profile"><GoPerson className="cursor-pointer text-[20px]"/></Link>
                    {userSession?.session !== null ? 
                       <p className="max-sm:hidden text-[14px] bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 cursor-pointer w-16" onClick={logout}>Log out</p>
                        : 
                        <Link href="/signup"><p className="max-sm:hidden text-[14px] bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 cursor-pointer">SignUp</p></Link>
                    }
                    <CiMenuFries className={`sm:hidden cursor-pointer text-[20px]  transition duration-200  ${navMenu ? "rotate-180" : "rotate-0"}`} onClick={()=>setNavMenu(!navMenu)}/>

                    <div className={`bg-blue-700 rounded-sm absolute right-0 z-50 top-7 flex flex-col text-[12px] gap-1 = text-white p-2 sm:hidden transition duration-200  ${navMenu ? "opacity-1" : "opacity-0"}`}>
                        <Link href="/list-products"><p className="border-b border-white pb-2 cursor-pointer">List product</p></Link>
                        {userSession?.session !== null ? 
                       <p className="cursor-pointer" onClick={logout}>Log out</p>
                        : 
                        <Link href="/signup"><p className=" cursor-pointer">SignUp</p></Link>
                    }
                    </div>

                </div>
            </div>
            <div className="w-full max-lg:hidden flex justify-between">
                <div className="flex flex-wrap gap-3 items-center">
                   <Link href="/Iphones"><p className="text-blue-600 py-2 px-3 rounded-full text-[12px] cursor-pointer hover:bg-blue-200 transition duration-200">Iphones</p></Link> 
                   <Link href="/samsungs"><p className="text-blue-600 py-2 px-3 rounded-full text-[12px] cursor-pointer hover:bg-blue-200 transition duration-200">Samsungs</p></Link>
                   <Link href="/others"><p className="text-blue-600 py-2 px-3 rounded-full text-[12px] cursor-pointer hover:bg-blue-200 transition duration-200">Others</p></Link>
                   <Link href="/ipads"><p className="text-blue-600 py-2 px-3 rounded-full text-[12px] cursor-pointer hover:bg-blue-200 transition duration-200">Ipads</p></Link>
                   <Link href="/tablets"><p className="text-blue-600 py-2 px-3 rounded-full text-[12px] cursor-pointer hover:bg-blue-200 transition duration-200">Tablets</p></Link>          
                </div>
                <Link href="/list-products"><h2 className="text-black h-10 w-28 bg-blue-600 rounded-sm text-white text-[14px] flex justify-center items-center">List Product</h2></Link>
            </div>
        </div>
     );
}
 
export default Header;