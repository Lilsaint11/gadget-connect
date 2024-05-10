import Layout from "../components/layout";
import { IoLocationSharp } from "react-icons/io5";
import { RiHeartAddLine } from "react-icons/ri";

const Ipads = () => {
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
    return ( 
        <Layout>
            <div className="flex flex-col gap-10 items-center justify-center p-5 mt-5">
                <h1 className="text-4xl font-bold text-[#333]">IPads</h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 w-full">
                    {allDeals.map(phone => (
                         <div className="text-[12px] bg-white  shadow-md shadow-slate-300 rounded-md flex flex-col  gap-1 justify-center items-center p-2 relative cursor-pointer w-full">
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
        </Layout>
     );
}
 
export default Ipads;