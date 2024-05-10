import { IoMdTime } from "react-icons/io";
import { CiLock,CiDeliveryTruck } from "react-icons/ci";

const Hero = () => {
   
    return ( 
        <div className="flex flex-col gap-3 items-center">
            <div className="w-full flex gap-3">
                <div className="w-full flex bg-blue-800 text-white justify-between items-center h-60 sm:h-72 md:h-96 p-5 pb-0 relative ">
                    <div className="z-40 flex flex-col gap-3 md:gap-5">
                        <p className=" max-sm:text-[13px] text-[#333]-500 pb-1 md:text-[18px]">Everyday deals</p>
                        <h1 className="text-2xl sm:text-3xl md:text-5xl w-64 sm:w-72 md:w-[500px] md:leading-[52px]  font-bold  ">The perfect <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">gadget</span>  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">deals </span>made especially for you</h1>
                        <button className=" rounded-full border-2 border-blue-300  py-1 px-3 w-28 sm:w-36 md:w-44 sm:h-11 md:h-12 text-[14px] hover:bg-blue-900 hover:shadow hover:shadow-md hover:shadow-blue-400 lg:mt-3">Shop Now</button>
                    </div>
                    <img src="/images/banner-phone.png" alt=""className="w-60 sm:w-72 md:w-96 absolute right-0 lg:right-5 bottom-0 z-10" />
                </div>
                <div className="flex flex-col gap-2 justify-between max-lg:hidden w-2/5">
                    <div className="flex gap-2 w-full">
                        <img src="https://th.bing.com/th/id/R.081aadaecbfae94ff23d550edeb390e4?rik=pjDc%2bQFf9aInxQ&pid=ImgRaw&r=0" alt="" className="w-40" />
                        <img src="https://th.bing.com/th/id/OIP.PprtLxbe44G9DpCBqh8QuAHaHa?rs=1&pid=ImgDetMain" alt="" className="w-40 " />
                    </div>
                    <img src="https://cdn.mos.cms.futurecdn.net/R4JUHrXr8HnCvFKLsxhe5h.jpg" alt="image" className="w-full " />
                </div>
            </div>
            <div className="w-full lg:hidden">
                <div className="flex flex-wrap gap-3 items-center">
                    <p className="bg-[#eee] py-2 px-3 rounded-full text-[12px] cursor-pointer hover:bg-[#ddd] transition duration-200">Iphones</p>
                    <p className="bg-[#eee] py-2 px-3 rounded-full text-[12px] cursor-pointer hover:bg-[#ddd] transition duration-200">Samsungs</p>
                    <p className="bg-[#eee] py-2 px-3 rounded-full text-[12px] cursor-pointer hover:bg-[#ddd] transition duration-200">Others</p>
                    <p className="bg-[#eee] py-2 px-3 rounded-full text-[12px] cursor-pointer hover:bg-[#ddd] transition duration-200">Ipads</p>
                    <p className="bg-[#eee] py-2 px-3 rounded-full text-[12px] cursor-pointer hover:bg-[#ddd] transition duration-200">Tablets</p>          
                </div>
            </div>
          
        </div>
     );
}
 
export default Hero;