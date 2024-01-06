"use client";
import Link from "next/link";
import { IoIosArrowForward } from 'react-icons/io';
import { BiLogoFacebook,BiLogoInstagramAlt } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import { useState } from "react";
import { CgWebsite } from "react-icons/cg";
import { CiDeliveryTruck } from 'react-icons/ci';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { RiWhatsappFill } from 'react-icons/ri';
import { useParams } from "next/navigation";
import { IoLocationSharp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import Header from "@/app/components/header";
import Layout from "@/app/components/layout";



const Details = () => {
    const params = useParams()
    const [zodiacProduct, setZodiacProduct] = useState([])
    const [gemstoneProduct, setGemstoneProduct] = useState([])
    const [imageSlide, setImageSlide] = useState(0)
    const [itemQuant, setItemQuant] = useState(1)
    let totalCartPrice = 0
   

    //get the single product data from sanity
  

    const [desc, setDesc] = useState(true)

    const addCommasToNumberString = (numberString:number) =>{
        return  numberString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
      
    return ( 
        <Layout>
            <div className="px-10 py-5 flex flex-col gap-5">
                <div className="flex gap-2 items-center  ">
                    <Link href="/"><h3 className="text-blue-600">Home</h3></Link>
                    <IoIosArrowForward className="text-[10px]"/>
                    <h3 className="text-[#5c5c5c]">Samsung galaxy note 10</h3> 
                </div>
                <div className=" px-20">
                    <div className="flex   max-sm:flex-col">
                    
                            <div className="w-full flex flex-col gap-3">
                                <img src="https://th.bing.com/th/id/R.081aadaecbfae94ff23d550edeb390e4?rik=pjDc%2bQFf9aInxQ&pid=ImgRaw&r=0" alt="" className='object-contain w-[380px] h-[300px] max-sm:w-[350px] shadow shadow-md shadow-slate-300'/>
                                <div className="flex gap-2">
                                    <img src="https://th.bing.com/th/id/R.081aadaecbfae94ff23d550edeb390e4?rik=pjDc%2bQFf9aInxQ&pid=ImgRaw&r=0" alt="" className="w-16"/>
                                    <img src="https://th.bing.com/th/id/OIP.PprtLxbe44G9DpCBqh8QuAHaHa?rs=1&pid=ImgDetMain" alt="" className="w-16"/>
                                    <img src="https://th.bing.com/th/id/OIP.PprtLxbe44G9DpCBqh8QuAHaHa?rs=1&pid=ImgDetMain" alt=""className="w-16" />
                                    <img src="https://th.bing.com/th/id/OIP.PprtLxbe44G9DpCBqh8QuAHaHa?rs=1&pid=ImgDetMain" alt=""className="w-16" />
                                </div>
                            </div> 
                    
                        <div className="w-full flex flex-col gap-2">
    
                                <div className=" flex flex-col gap-2">
                                    <h1 className="text-[24px]  max-sm:text-[18px] font-medium ">Samsung Galaxy Note 10</h1> 
                                    <p className="text-[14px]">Storage: 256gb</p>
                                    <div>
                                        <p className="text-[14px]">3 pieces available</p>
                                    </div>
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
                                    <IoLocationSharp className="text-[20px] text-red-600"/>
                                    <p className="text-[14px]"> - Radar tech store, Lagos</p>
                                </div>
                                <h4 className="flex items-center gap-1 text-[14px]"><FaInstagram className="mt-1 text-[16px]"/> - https://www.instagram.com/rader</h4>
                                <h4  className="flex items-center gap-1 text-slate-400 text-[14px]"><CgWebsite className="text-green-500 mt-1 text-[20px]"/>- Website not Available </h4>
                            </div>
                        
                        
                        </div>
                    </div>
                </div>
            
            </div>
        </Layout>
     );
}
 
export default Details;