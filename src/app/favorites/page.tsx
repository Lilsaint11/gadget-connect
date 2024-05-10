import Layout from "@/app/components/layout";
import { IoMdClose } from "react-icons/io";

const Favorites = () => {
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
    return ( 
        <Layout>
           <div className="flex flex-col items-center  gap-10">
                <h1 className="text-4xl font-bold">Favorites</h1>
              
                <div className="w-full px-10 flex flex-col  gap-5">
                    {todayDeals.map(deal => (
                        <div className="flex gap-16 justify-between items-center w-full border border-slate-300 p-3">
                            <div className="flex items-center w-56">
                                <img src={deal.image} alt="" className="w-12"/>
                                <div className="text-[12px]">
                                    <h3>{deal.name}</h3>
                                    <p>{deal.section}</p>
                                </div>
                            </div>
                            <p className="text-[12px] flex justify-center w-20">{deal.numOfItems}</p>
                            <p className="text-[12px]">{deal.price}</p>
                            <p className="text-[12px]">{deal.location}</p>
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