import { FaOpencart } from "react-icons/fa6";
import { GoPerson,GoSearch } from "react-icons/go";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
const Header = () => {
    return ( 
        <div className="flex flex-col gap-5 w-full md:my-1 p-5 pb-0">
            <div className="flex justify-between items-center gap-5 md:gap-10">
                <h1 className="text-blue-600 font-bold  sm:text-[20px]">GadgetsConnect</h1>
                <div className="flex w-full h-8 md:h-10 max-sm:hidden">
                    <input type="text" className="w-full border border-blue-300 h-full  rounded-tl-sm rounded-bl-sm focus:outline-none pl-3"/>
                    <h5 className="h-full bg-blue-600 text-white w-10 md:w-12 flex items-center justify-center cursor-pointer rounded-tr-sm rounded-br-sm"><GoSearch className="text-[20px]"/></h5>
                </div>
                <div className="flex items-center gap-5">
                    <GoSearch className="sm:hidden cursor-pointer text-[20px]"/>
                    <FaOpencart className="cursor-pointer text-[20px]"/>
                    <GoPerson className="cursor-pointer text-[20px]"/>
                    <Link href="/signup"><p className="max-sm:hidden text-[14px] bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 cursor-pointer">SignUp</p></Link>
                    <CiMenuFries className="sm:hidden cursor-pointer text-[20px]"/>
                </div>
            </div>
            <div className="w-full max-lg:hidden flex justify-between">
                <div className="flex flex-wrap gap-3 items-center">
                    <p className="text-blue-600 py-2 px-3 rounded-full text-[12px] cursor-pointer hover:bg-blue-200 transition duration-200">Iphones</p>
                    <p className="text-blue-600 py-2 px-3 rounded-full text-[12px] cursor-pointer hover:bg-blue-200 transition duration-200">Samsungs</p>
                    <p className="text-blue-600 py-2 px-3 rounded-full text-[12px] cursor-pointer hover:bg-blue-200 transition duration-200">Others</p>
                    <p className="text-blue-600 py-2 px-3 rounded-full text-[12px] cursor-pointer hover:bg-blue-200 transition duration-200">Ipads</p>
                    <p className="text-blue-600 py-2 px-3 rounded-full text-[12px] cursor-pointer hover:bg-blue-200 transition duration-200">Tablets</p>          
                </div>
                <Link href="/list-products"><h2 className="text-black h-10 w-28 bg-blue-600 rounded-sm text-white text-[14px] flex justify-center items-center">List Product</h2></Link>
            </div>
        </div>
     );
}
 
export default Header;