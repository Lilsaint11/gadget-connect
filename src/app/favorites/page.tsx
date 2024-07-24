import Layout from "@/app/components/layout";
import { IoMdClose } from "react-icons/io";

const Favorites = () => {
    const todayDeals = [
        {
            id:1,
            name:"Iphone 13 (blue) 256gb",
            image:"https://th.bing.com/th/id/OIP.PprtLxbe44G9DpCBqh8QuAHaHa?rs=1&pid=ImgDetMain",
            price:550000,
            section:"uk used",
            location:"Radar tech store, Lagos",
            numOfItems:3,
            storeType:"Official store",
        },
        {
            id:2,
            name:"Iphone 13 (blue) 256gb",
            image:"https://th.bing.com/th/id/OIP.PprtLxbe44G9DpCBqh8QuAHaHa?rs=1&pid=ImgDetMain",
            price:550000,
            section:"uk used",
            location:"Radar tech store, Lagos",
            numOfItems:3,
            storeType:"Official store",
        },
        {
            id:3,
            name:"Iphone 13 (blue) 256gb",
            image:"https://th.bing.com/th/id/OIP.PprtLxbe44G9DpCBqh8QuAHaHa?rs=1&pid=ImgDetMain",
            price:550000,
            section:"uk used",
            location:"Radar tech store, Lagos",
            numOfItems:3,
            storeType:"Official store",
        },
        {
            id:4,
            name:"Iphone 13 (blue) 256gb",
            image:"https://th.bing.com/th/id/OIP.PprtLxbe44G9DpCBqh8QuAHaHa?rs=1&pid=ImgDetMain",
            price:550000,
            section:"uk used",
            location:"Radar tech store, Lagos",
            numOfItems:3,
            storeType:"Official store",
        },
        {
            id:5,
            name:"Iphone 13 (blue) 256gb",
            image:"https://th.bing.com/th/id/OIP.PprtLxbe44G9DpCBqh8QuAHaHa?rs=1&pid=ImgDetMain",
            price:550000,
            section:"uk used",
            location:"Radar tech store, Lagos",
            numOfItems:3,
            storeType:"Official store",
        },
        {
            id:6,
            name:"Iphone 13 (blue) 256gb",
            image:"https://th.bing.com/th/id/OIP.PprtLxbe44G9DpCBqh8QuAHaHa?rs=1&pid=ImgDetMain",
            price:550000,
            section:"uk used",
            location:"Radar tech store, Lagos",
            numOfItems:3,
            storeType:"Official store",
        },
        {
            id:7,
            name:"Iphone 13 (blue) 256gb",
            image:"https://th.bing.com/th/id/OIP.PprtLxbe44G9DpCBqh8QuAHaHa?rs=1&pid=ImgDetMain",
            price:550000,
            section:"uk used",
            location:"Radar tech store, Lagos",
            numOfItems:3,
            storeType:"Official store",
        },
        {
            id:8,
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
           <div className="flex flex-col items-center  gap-10 mt-10">
                <h1 className="text-4xl font-bold">Favorites</h1>
              
                <div className="w-full px-10 flex flex-col  gap-5">
                    {todayDeals.map(deal => (
                        <div className="flex gap-16 max-md:gap-8 justify-between items-center w-full border border-slate-300 p-3" key={deal.id}>
                            <div className="flex max-sm:flex-col sm:items-center w-56">
                                <img src={deal.image} alt="" className="w-12"/>
                                <div className="text-[12px]  max-sm:flex-col">
                                    <h3>{deal.name}</h3>
                                    <p>{deal.section}</p>
                                </div>
                            </div>
                            <div className="flex gap-16 max-md:gap-8 max-sm:gap-2 max-sm:flex-col justify-between items-center ">
                                <div className="flex gap-16 max-md:gap-8 justify-between items-center ">
                                    <p className="text-[12px] text-center text-white h-5 w-5 bg-blue-600 rounded-full flex justify-center md:w-20">{deal.numOfItems}</p>
                                    <p className="text-[12px]">{deal.price}</p>
                                </div>
                                <p className="text-[12px] ">{deal.location}</p>
                            </div>
                            <div className="cursor-pointer">
                                <IoMdClose />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
     );
}
 
export default Favorites;