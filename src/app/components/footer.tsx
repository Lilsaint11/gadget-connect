import { LuFacebook,LuInstagram, LuTwitter, LuYoutube } from "react-icons/lu";

const Footer = () => {
    return ( 
        <div className="flex flex-col gap-24 mt-10 border-t border-[#eee] p-5">
            <div className="flex max-sm:grid max-sm:grid-cols-2 gap-5 justify-between">
                <div className="flex flex-col gap-4">
                    <h1 className="text-blue-600 font-bold text-xl">GadgetsConnect</h1>
                    <p className="text-[14px] w-48 max-sm:w-40 text-[#555555]">Bringing the perfect deals to you like a buffet</p>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="font-bold">Useful links</h1>
                    <p className="text-[14px] text-[#555555]">About us</p>
                    <p className="text-[14px] text-[#555555]">Events</p>
                    <p className="text-[14px] text-[#555555]">Blogs</p>
                    <p className="text-[14px] text-[#555555]">FAQ</p>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="font-bold">Main Menu</h1>
                    <p className="text-[14px] text-[#555555]">Iphones</p>
                    <p className="text-[14px] text-[#555555]">Ipads</p>
                    <p className="text-[14px] text-[#555555]">Androids</p>
                    <p className="text-[14px] text-[#555555]">Tablets</p>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="font-bold">Contact Us</h1>
                    <p className="text-[14px] text-[#555555]">example@email.com</p>
                    <p className="text-[14px] text-[#555555]">+64 958 248 966</p>
                    <p className="text-[14px] text-[#555555]">Social media</p>
                </div>
            </div>
            <div className="flex gap-40 max-md:gap-28 max-sm:gap-10 max-sm:flex-col items-center">
                <div className="flex gap-5 items-center">
                    <div className="h-10 w-10 bg-blue-100 flex items-center justify-center rounded-full cursor-pointer hover:bg-blue-600 hover:text-white transition duration-200">
                        <LuFacebook />
                    </div>
                    <div className="h-10 w-10 bg-blue-100 flex items-center justify-center rounded-full cursor-pointer hover:bg-blue-600 hover:text-white transition duration-200">
                        <LuInstagram />
                    </div>
                    <div className="h-10 w-10 bg-blue-100 flex items-center justify-center rounded-full cursor-pointer hover:bg-blue-600 hover:text-white transition duration-200">
                        <LuTwitter />
                    </div>
                    <div className="h-10 w-10 bg-blue-100 flex items-center justify-center rounded-full cursor-pointer hover:bg-blue-600 hover:text-white transition duration-200">
                        <LuYoutube />
                    </div>
                </div>
                <div>
                    <p className="text-[14px] text-[#555555]">Copyright © 2023 GadgetsConnect | All rights reserved</p>
                </div>
            </div>

        </div>
     );
}
 
export default Footer;