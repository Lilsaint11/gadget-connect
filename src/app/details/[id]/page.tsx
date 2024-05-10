"use client";
import Link from "next/link";
import { IoIosArrowForward } from 'react-icons/io';
import { BiLogoFacebook,BiLogoInstagramAlt } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import { useEffect, useState } from "react";
import { CgWebsite } from "react-icons/cg";
import { CiDeliveryTruck } from 'react-icons/ci';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { RiWhatsappFill } from 'react-icons/ri';
import { useParams } from "next/navigation";
import { IoLocationSharp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import Header from "@/app/components/header";
import Layout from "@/app/components/layout";
import { supabase } from "@/app/auth/supabase";
import { FcBusinessman } from "react-icons/fc";
import { RiHeartAddLine } from "react-icons/ri";
import DetailsSkeleton from "@/app/components/detailsSkeleton";



const Details = () => {
    const params = useParams()   
    interface ProductDetails {
        amt: number;
        battery_health: number;
        category: string;
        color: string;
        created_at: string;
        desc: string;
        grade: string;
        id: string;
        img: string[];
        name: string;
        price: number;
        storage: number;
        users: {
            businessName: string;
            createdAt: string;
            email: string;
            fullname: string;
            id: string;
            location: string;
            phoneNumber: number;
            vendor: boolean;
            instagram_link: string;
            website_link: string;
          };
      }

      const [details, setDetails] = useState<ProductDetails>()
      const [imageIndex, setImageIndex] = useState(0)

    //get the single product data from sanity
  

    const [desc, setDesc] = useState(true)

    const addCommasToNumberString = (numberString:number) =>{
        return  numberString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }

      const [listings,setListings] = useState<ProductDetails[] | null>()
     

      const fetchItem = async () => {   
        const { data:phoneDetails, error } = await supabase
        .from('phones') // Replace 'products' with your table name
        .select(`
        *,
        users(
            *
        )
    `) // Specify desired columns
        .eq('id', params.id) // Filter by product ID
        .single();
        console.log(phoneDetails)
        setDetails(phoneDetails)

        const { data:phoneDetailss} = await supabase
        .from('phones') 
        .select(`
        *,
        users(
            *
        )
    `) // Specify desired columns
        .eq('vendor_id', phoneDetails?.users?.id) // Filter by product ID
        console.log(phoneDetails?.users?.id)
        console.log(phoneDetailss)
        setListings(phoneDetailss)
      }
      
      useEffect(()=>{
          fetchItem()
      },[])
    return ( 
        <Layout>
            <div className="px-10 py-5 flex flex-col gap-5">
                <div className="flex gap-2 items-center  ">
                    <Link href="/"><h3 className="text-blue-600">Home</h3></Link>
                    <IoIosArrowForward className="text-[10px]"/>
                    <h3 className="text-[#5c5c5c]">{details?.name}</h3> 
                </div>
                {details ? 
                    <div className=" px-20">
                        <div className="flex max-sm:flex-col">
                            <div className="w-full flex flex-col gap-3">
                                {details?.img  && ( 
                                    <img src={details?.img[imageIndex]} alt="" className='object-cover w-[380px] h-[350px] max-sm:w-[350px] shadow shadow-md shadow-slate-300 rounded-sm' />
                                )}
                                <div className="flex gap-2">
                                    <img src={details?.img[0]} alt="" className="w-16 cursor-pointer" onClick={()=> setImageIndex(0)}/>
                                    <img src={details?.img[1]} alt="" className="w-16 cursor-pointer" onClick={()=> setImageIndex(1)}/>
                                    <img src={details?.img[2]} alt="" className="w-16 cursor-pointer" onClick={()=> setImageIndex(2)}/>
                                    <img src={details?.img[3]} alt=""className="w-16 cursor-pointer" onClick={()=> setImageIndex(3)}/>                               
                                </div>
                            </div> 
    
                            <div className="w-full flex flex-col gap-2">

                                <div className=" flex flex-col gap-2">
                                    <h1 className="text-[24px]  max-sm:text-[18px] font-medium ">{details?.name}</h1> 
                                    <p className="text-[14px]">Storage: {details?.storage}gb</p>
                                    <div>
                                        <p className="text-[14px]">{details?.amt} piece(s) available</p>
                                    </div>
                                    <p className="text-[12px] text-[#333]">{details?.desc}</p>
                                    <h3 className="text-[40px]  max-sm:text-[18px] text-[#333] font-bold">N{addCommasToNumberString(200000)}.00</h3>
                                
                                </div>

                                <div className="flex gap-3">
                                    
                                    <div className="w-full">
                                        <button className="w-full  bg-blue-600 h-[50px] rounded-md text-white text-[16px] flex justify-center items-center gap-2"><RiWhatsappFill className="text-green-500 mt-1 text-[20px]"/> Chat with us on Whatsapp</button>
                                    </div>
                                </div>
                                <p className="text-[12px] text-[#333]">(Text the store on Whatsapp using the above button or check out more of their products on social media if provided)</p>
                                <div className="flex flex-col gap-2 mt-2">
                                    <div className="flex items-center -ml-1">
                                        <FcBusinessman className="text-[20px text-blue-600"/>
                                    {details ? <p className="text-[14px]"> - {details?.users?.businessName}</p> :  <div className="w-60 h-3 bg-slate-200 animate-pulse rounded-full "></div>}
                                    </div>
                                    <div className="flex items-center -ml-1">
                                        <MdEmail className="text-[20px] text-blue-600"/>
                                        {details ? <p className="text-[14px]"> - {details?.users?.email}</p> :  <div className="w-60 h-3 bg-slate-200 animate-pulse rounded-full "></div>}
                                    </div>
                                    <div className="flex items-center -ml-1">
                                        <IoLocationSharp className="text-[20px] text-red-600"/>
                                        {details ? <p className="text-[14px]"> - {details?.users?.location}</p> :  <div className="w-60 h-3 bg-slate-200 animate-pulse rounded-full "></div>}
                                    </div>
                                    {details?.users?.instagram_link ? 
                                        <h4 className="flex items-center gap-1 text-[14px]"><FaInstagram className="mt-1 text-[16px]"/> - <Link href={details?.users?.instagram_link} className="underline">{ details?.users?.instagram_link }</Link></h4> :
                                        <h4 className="flex items-center gap-1 text-[14px]"><FaInstagram className="mt-1 text-[16px]"/> - Instagram unavailable</h4>
                                    }
                                    {details?.users?.website_link ? 
                                        <h4  className="flex items-center gap-1  text-blue-600  text-[14px]"><CgWebsite className="text-green-500 mt-1 text-[20px]"/> - <Link href={details?.users?.website_link} className="underline">{ details?.users?.website_link}</Link>  </h4> :
                                        <h4  className="flex items-center gap-1 text-slate-400 text-[14px]"><CgWebsite className="text-green-500 mt-1 text-[20px]"/> - Website not Available </h4>
                                    }
                                </div>
                            
                            
                            </div>
                        </div>
                    </div> : 
                    <DetailsSkeleton />
                }
                <div className="flex flex-col items-center justify-center gap-6">
                    <h3 className="text-xl font-semibold mt-10">Other items from this vendor</h3>
                    {listings ?
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
                            {listings?.map(phone => (
                                <>
                                <Link href={"/details/" + phone.id}>
                                <div className="text-[12px] bg-white  shadow-md shadow-slate-300 rounded-md flex flex-col  gap-1 justify-center items-center p-2 relative cursor-pointer">
                                    <div className="">
                                        <img src={details?.img[0]}alt="" className="w-40" />
                                    </div>
                                    <div className="w-full flex flex-col  gap-1">
                                        <h2 className="text-[12px]">{phone.name} ({phone.color}) {phone.storage}gb</h2>
                                        <p className="font-bold text-[16px]">₦{addCommasToNumberString (phone.price)} <span className="font-normal text-[13px] text-gray-500">- {phone.grade}</span> </p>
                                        <div className="flex items-center -ml-1">
                                            <IoLocationSharp className="text-[18px] text-red-600"/>
                                            <p className="">{phone?.users?.location}</p>
                                        </div>
                                        <p className="">{phone.amt} piece(s) available</p>
                                        <div className="flex">
                                            <p className="bg-blue-600 text-white px-1 rounded-sm ">{phone?.users?.vendor == true && "Official store"}</p>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 right-0 w-8 h-7 md:w-10 md:h-8 bg-blue-600 flex items-center justify-center rounded-tl-2xl rounded-br-md text-white">
                                        <RiHeartAddLine  className="text-[16px] md:text-[20px]"/>
                                    </div>
                                </div>
                                </Link>
                                </>
                                ))}   
                                {listings?.map(phone => (
                                <>
                                <Link href={"/details/" + phone.id}>
                                <div className="text-[12px] bg-white  shadow-md shadow-slate-300 rounded-md flex flex-col  gap-1 justify-center items-center p-2 relative cursor-pointer">
                                    <div className="">
                                        <img src={details?.img[0]}alt="" className="w-40" />
                                    </div>
                                    <div className="w-full flex flex-col  gap-1">
                                        <h2 className="text-[12px]">{phone.name} ({phone.color}) {phone.storage}gb</h2>
                                        <p className="font-bold text-[16px]">₦{addCommasToNumberString (phone.price)} <span className="font-normal text-[13px] text-gray-500">- {phone.grade}</span> </p>
                                        <div className="flex items-center -ml-1">
                                            <IoLocationSharp className="text-[18px] text-red-600"/>
                                            <p className="">{phone?.users?.location}</p>
                                        </div>
                                        <p className="">{phone.amt} piece(s) available</p>
                                        <div className="flex">
                                            <p className="bg-blue-600 text-white px-1 rounded-sm ">{phone?.users?.vendor == true && "Official store"}</p>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 right-0 w-8 h-7 md:w-10 md:h-8 bg-blue-600 flex items-center justify-center rounded-tl-2xl rounded-br-md text-white">
                                        <RiHeartAddLine  className="text-[16px] md:text-[20px]"/>
                                    </div>
                                </div>
                                </Link>
                                </>
                                ))}   
                        </div> : 
                       <img src="https://bsmedia.business-standard.com/_media/bs/theme/faq_view_all/images/no-result-found.png" alt="" />
                    }
                </div>
            </div>
        </Layout>
     );
}
 
export default Details;