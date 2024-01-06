import { IoLocationSharp } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { CiLock,CiDeliveryTruck } from "react-icons/ci";
import { RiHeartAddLine } from "react-icons/ri";

const Deals = () => {
    const todayDeals = [
        {
            name:"Iphone 13 (blue) 256gb",
            image:"https://th.bing.com/th/id/OIP.PprtLxbe44G9DpCBqh8QuAHaHa?rs=1&pid=ImgDetMain",
            price:550000,
            section:"uk used",
            location:"Radar tech store, Lagos",
            numOfItems:3,
            storeType:"Official store",
        },
        {
            name:"Iphone 13 (blue) 256gb",
            image:"https://th.bing.com/th/id/OIP.PprtLxbe44G9DpCBqh8QuAHaHa?rs=1&pid=ImgDetMain",
            price:550000,
            section:"uk used",
            location:"Radar tech store, Lagos",
            numOfItems:3,
            storeType:"Official store",
        },
        {
            name:"Iphone 13 (blue) 256gb",
            image:"https://th.bing.com/th/id/OIP.PprtLxbe44G9DpCBqh8QuAHaHa?rs=1&pid=ImgDetMain",
            price:550000,
            section:"uk used",
            location:"Radar tech store, Lagos",
            numOfItems:3,
            storeType:"Official store",
        },
        {
            name:"Iphone 13 (blue) 256gb",
            image:"https://th.bing.com/th/id/OIP.PprtLxbe44G9DpCBqh8QuAHaHa?rs=1&pid=ImgDetMain",
            price:550000,
            section:"uk used",
            location:"Radar tech store, Lagos",
            numOfItems:3,
            storeType:"Official store",
        }
    ]
    const allDeals = [
        {
            name:"Iphone 13 (blue) 256gb",
            image:"https://th.bing.com/th/id/OIP.PprtLxbe44G9DpCBqh8QuAHaHa?rs=1&pid=ImgDetMain",
            price:550000,
            section:"uk used",
            location:"Radar tech store, Lagos",
            numOfItems:3,
            storeType:"Official store",
        },
        {
            name:"Iphone 13 (blue) 256gb",
            image:"https://th.bing.com/th/id/OIP.PprtLxbe44G9DpCBqh8QuAHaHa?rs=1&pid=ImgDetMain",
            price:550000,
            section:"uk used",
            location:"Radar tech store, Lagos",
            numOfItems:3,
            storeType:"Official store",
        },
        {
            name:"Iphone 13 (blue) 256gb",
            image:"https://th.bing.com/th/id/OIP.PprtLxbe44G9DpCBqh8QuAHaHa?rs=1&pid=ImgDetMain",
            price:550000,
            section:"uk used",
            location:"Radar tech store, Lagos",
            numOfItems:3,
            storeType:"Official store",
        },
        {
            name:"Iphone 13 (blue) 256gb",
            image:"https://th.bing.com/th/id/OIP.PprtLxbe44G9DpCBqh8QuAHaHa?rs=1&pid=ImgDetMain",
            price:550000,
            section:"uk used",
            location:"Radar tech store, Lagos",
            numOfItems:3,
            storeType:"Official store",
        },
        {
            name:"Iphone 13 (blue) 256gb",
            image:"https://th.bing.com/th/id/OIP.PprtLxbe44G9DpCBqh8QuAHaHa?rs=1&pid=ImgDetMain",
            price:550000,
            section:"uk used",
            location:"Radar tech store, Lagos",
            numOfItems:3,
            storeType:"Official store",
        },
        {
            name:"Iphone 13 (blue) 256gb",
            image:"https://th.bing.com/th/id/OIP.PprtLxbe44G9DpCBqh8QuAHaHa?rs=1&pid=ImgDetMain",
            price:550000,
            section:"uk used",
            location:"Radar tech store, Lagos",
            numOfItems:3,
            storeType:"Official store",
        },
        {
            name:"Iphone 13 (blue) 256gb",
            image:"https://th.bing.com/th/id/OIP.PprtLxbe44G9DpCBqh8QuAHaHa?rs=1&pid=ImgDetMain",
            price:550000,
            section:"uk used",
            location:"Radar tech store, Lagos",
            numOfItems:3,
            storeType:"Official store",
        },
        {
            name:"Iphone 13 (blue) 256gb",
            image:"https://th.bing.com/th/id/OIP.PprtLxbe44G9DpCBqh8QuAHaHa?rs=1&pid=ImgDetMain",
            price:550000,
            section:"uk used",
            location:"Radar tech store, Lagos",
            numOfItems:3,
            storeType:"Official store",
        },
    ]
    const addCommasToNumberString = (numberString:number) =>{
        return  numberString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return ( 
        <div className="mt-5 flex flex-col  gap-10">
            <div className="flex flex-col  gap-5">
                <h1 className="text-blue-700 text-[14px] ">Today's deals</h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
                    {todayDeals.map(phone => (
                        <div className="text-[12px] bg-white  shadow-md shadow-slate-300 rounded-md flex flex-col  gap-1 justify-center items-center p-2 relative cursor-pointer">
                            <div className="">
                                <img src={phone.image} alt="" className="w-40" />
                            </div>
                            <div className="w-full flex flex-col  gap-1">
                                <h2 className="text-[12px]">{phone.name}</h2>
                                <p className="font-bold text-[16px]">₦{addCommasToNumberString (phone.price)} <span className="font-normal text-[13px] text-gray-500">- {phone.section}</span> </p>
                                <div className="flex items-center -ml-1">
                                    <IoLocationSharp className="text-[18px] text-red-600"/>
                                    <p className="">{phone.location}</p>
                                </div>
                                <p className="">{phone.numOfItems} pieces available</p>
                                <div className="flex">
                                    <p className="bg-blue-600 text-white px-1 rounded-sm ">{phone.storeType}</p>
                                </div>
                            </div>
                            <div className="absolute bottom-0 right-0 w-8 h-7 md:w-10 md:h-8 bg-blue-600 flex items-center justify-center rounded-tl-2xl rounded-br-md text-white">
                                <RiHeartAddLine  className="text-[16px] md:text-[20px]"/>
                            </div>
                        </div>
                        ))}   
                </div>
            </div>
            <div className="flex flex-col  gap-5">
                <h1 className="text-blue-700 text-[14px]">All deals</h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
                    {allDeals.map(phone => (
                         <div className="text-[12px] bg-white  shadow-md shadow-slate-300 rounded-md flex flex-col  gap-1 justify-center items-center p-2 relative cursor-pointer">
                         <div className="">
                             <img src={phone.image} alt="" className="w-40" />
                         </div>
                         <div className="w-full flex flex-col  gap-1">
                             <h2 className="text-[12px]">{phone.name}</h2>
                             <p className="font-bold text-[16px]">₦{phone.price} <span className="font-normal text-[13px] text-gray-500">- {phone.section}</span> </p>
                             <div className="flex items-center -ml-1">
                                 <IoLocationSharp className="text-[18px] text-red-600"/>
                                 <p className="">{phone.location}</p>
                             </div>
                             <p className="">{phone.numOfItems} pieces available</p>
                             <div className="flex">
                                 <p className="bg-blue-600 text-white px-1 rounded-sm ">{phone.storeType}</p>
                             </div>
                         </div>
                         <div className="absolute bottom-0 right-0 w-8 h-7 md:w-10 md:h-8 bg-blue-600 flex items-center justify-center rounded-tl-2xl rounded-br-md text-white">
                             <RiHeartAddLine  className="text-[16px] md:text-[20px]"/>
                         </div>
                     </div>
                    ))}             
                </div>
            </div>
            <div className="flex max-sm:flex-col items-center gap-3 md:gap-7 lg:gap-10  mt-5">
               <div className="flex flex-col items-center gap-1  border border-slate-300  p-2 rounded-lg shadow  shadow-sm shadow-slate-300">
                   <IoMdTime className="text-[24px]"/>
                   <p className="text-[12px] font-bold">24/7 Services</p>
                   <p className="text-[10px] text-center ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laborum enim fuga pariatur.</p>
               </div>
               <div className="flex flex-col items-center gap-1  border border-slate-300 p-2 rounded-lg shadow  shadow-sm shadow-slate-300">
                   <CiDeliveryTruck className="text-[24px]"/>
                   <p className="text-[12px] font-bold">Swift Delivery</p>
                   <p className="text-[10px] text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laborum enim fuga pariatur.</p>
               </div>
               <div className="flex flex-col items-center gap-1  border border-slate-300 p-2 rounded-lg shadow  shadow-sm shadow-slate-300">
                   <CiLock className="text-[24px]" />
                   <p className="text-[12px] font-bold">Secure Payments</p>
                   <p className="text-[10px] text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laborum enim fuga pariatur.</p>
               </div>
           </div>
        </div>
     );
}
 
export default Deals;