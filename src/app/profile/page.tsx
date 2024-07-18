"use client"
import { supabase } from "../auth/supabase";
import Layout from "../components/layout";
import { useEffect, useState } from "react";
import Link from "next/link";
import { IoLocationSharp,IoTrashBinOutline } from "react-icons/io5";
import { RiHeartAddLine } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import { useStore } from "../store/zustand";
import EditProducts from "../components/editModal";
import { Product } from "../types";
import { Toaster, toast } from 'sonner'
import { RotatingLines } from 'react-loader-spinner'
import ProductSkeleton from "../components/productSkeleton";


const Profile = () => {
    const [listings,setListings] = useState<Product[] | null>()
    const { openEditModal, setOpenEditModalTrue,selectedItemToEdit, setSelectedItemToEdit } = useStore();
    const [userSession,setUserSession] = useState<any>()
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullname: "",
        businessName: "",
        email:"",
        location:"",
        phoneNum:"",
        whatsapp:"",
        website:"",
        instagram:""
    });
    const {fullname, businessName,email, location,phoneNum,whatsapp,website,instagram} = formData;
    function onChange(e: React.ChangeEvent<HTMLTextAreaElement>|React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLSelectElement>){
        setFormData((prevState) => ({
            ...prevState,[e.target.id]: e.target.value
        }))
        console.log(formData)
    }
    const fetchItem = async () => {   
        const { data:phoneDetails, error } = await supabase
        .from('phones') // Replace 'products' with your table name
        .select(`
        *,
        users(
            *
        )
    `) // Specify desired columns
        .eq('vendor_id', "0db8700f-dcf3-4a52-b038-eb60570fd194") // Filter by product ID
        
        console.log(phoneDetails)
        setListings(phoneDetails)
      }

      useEffect(()=>{
        fetchItem()
    },[ openEditModal])

    async function deleteRow(id:string) {
        const confirmed = window.confirm('Are you sure you want to delete this row?');
        if(confirmed){
            try {
            const { data, error } = await supabase
                .from('phones')
                .delete()
                .eq('id', id); // Replace 'id' with your actual column name
        
            if (error) {
                console.error('deleteRow error:', error);
                // Handle errors appropriately, e.g., display an error message to the user
                return;
            }
        
            console.log('Row deleted:', data);
            // Handle success, e.g., update UI, show confirmation message
            } catch (err) {
            console.error('deleteRow catch error:', err);
            // Handle unexpected errors
            }
        }
      }

      const editItem = (item:Product) =>{
        setOpenEditModalTrue()
        setSelectedItemToEdit(item)
    }
      

    const addCommasToNumberString = (numberString:number) =>{
        return  numberString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
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
        const user = session;
        const { data } = await supabase
        .from('users')
        .select('*') // Select all columns (you can specify specific columns if needed)
        .eq('id', user?.session?.user.id) // Filter by the id column
        .single();
        
        if(data){
            console.log(data)
      
        // Access user data from the session (assuming user object is present)
        console.log('Logged in user:', user.session?.user);
        setUserSession(user?.session?.user)
        setFormData(
            {
                fullname: data?.fullname || "",
                businessName: data?.businessName || "",
                email:  data?.email || "",
                location: data?.location || "",
                phoneNum: data?.phoneNumber || "",
                whatsapp: data?.whatsapp_link || "",
                website: data?.website_link || "",
                instagram:  data?.instagram_link || "",
            }
        )
        }
      }
      async function onSubmit(e: React.MouseEvent<HTMLButtonElement>){
        e.preventDefault()
        setLoading(true)
        const { data: user} = await supabase.auth.getSession();
        let vendor_id = user?.session?.user.id
        
        const {data, error} = await supabase
        .from('users')
        .update([{
            fullname: fullname,
            businessName: businessName,
            email:email,
            location:location,
            phoneNumber:phoneNum,
            whatsapp_link:whatsapp,
            website_link:website,
            instagram_link:instagram
        }])
        .eq('id', vendor_id);
    
        if (error){
            console.log(error)
            setLoading(false)
            toast.error('Check again sir')
        }
      
            console.log("data")
            toast.success('Hundred!!!!, item edited successfully egbon')
            setLoading(false)
        
        console.log(data)
        setLoading(false)
    }
    

      useEffect(()=>{
        getUserInfo()
      },[])
      
    return ( 
        <Layout>
            {openEditModal && <EditProducts />}
            <div className="flex flex-col gap-5 items-center justify-center p-5 ">
                <Toaster position="top-right" richColors />
                <h1 className="text-4xl font-bold text-[#333]"> Profile</h1>
                <div>
                    <form action="" className="w-[700px] flex flex-col gap-3">
                        <div className="flex flex-col  gap-1">
                            <label htmlFor="" className="text-[12px]">Full Name</label>
                            <input type="text" id="fullname" className="border border-slate-300 h-12 rounded-md pl-2 focus:outline-none" value={fullname} onChange={onChange}/>
                        </div>
                        <div  className="flex justify-between gap-5">
                            <div className="flex flex-col  gap-1 w-full">
                                <label htmlFor="" className="text-[12px]">Business Name</label>
                                <input type="text" id="businessName" className="border border-slate-300 h-12 rounded-md pl-2 focus:outline-none w-full" value={businessName} onChange={onChange}/>
                            </div>
                            <div className="flex flex-col  gap-1 w-full">
                                <label htmlFor="" className="text-[12px]">Email</label>
                                <input type="email" id="email" className="border border-slate-300 h-12 rounded-md pl-2 focus:outline-none w-full" value={email} onChange={onChange}/>
                            </div>
                        </div>

                        <div className="flex justify-between gap-5">
                            <div className="flex flex-col  gap-1 w-full">
                                <label htmlFor="" className="text-[12px]">Location</label>
                                <input type="text" id="location" className="border border-slate-300 h-12 rounded-md pl-2 focus:outline-none" value={location} onChange={onChange}/>
                            </div>
                            <div className="flex flex-col  gap-1 w-full">
                                <label htmlFor="" className="text-[12px]">Phone Number</label>
                                <input type="text" id="phoneNum" className="border border-slate-300 h-12 rounded-md pl-2 focus:outline-none" value={phoneNum} onChange={onChange}/>
                            </div>
                           
                        </div>
                        <div className="flex justify-between gap-5">
                            <div className="flex flex-col  gap-1 w-full">
                                <label htmlFor="" className="text-[12px]">WhatsApp link</label>
                                <input type="text" id="whatsapp" className="border border-slate-300 h-12 rounded-md pl-2 focus:outline-none" value={whatsapp} onChange={onChange}/>
                            </div>
                            <div className="flex flex-col  gap-1 w-full">
                                <label htmlFor="" className="text-[12px]">Website link</label>
                                <input type="text" id="website" className="border border-slate-300 h-12 rounded-md pl-2 focus:outline-none" value={website} onChange={onChange}/>
                            </div>
                            <div className="flex flex-col  gap-1 w-full">
                                <label htmlFor="" className="text-[12px]">Instagram link</label>
                                <input type="text" id="instagram" className="border border-slate-300 h-12 rounded-md pl-2 focus:outline-none" value={instagram} onChange={onChange}/>
                            </div>
                        </div>
                        <button className="h-12 w-full bg-blue-700 text-white rounded-md flex items-center justify-center cursor-pointer"  onClick={onSubmit}>
                        {!loading ? "Edit" : 
                            <RotatingLines
                                width="26"
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                ariaLabel="rotating-lines-loading"
                            />
                        }
                    </button>  
                    </form> 
                </div>
                <h3 className="text-2xl font-semibold mt-10">Listed Items</h3>
                {listings ?
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
                    {listings?.map(phone => (
                        <>
                        <div className="text-[12px] bg-white  shadow-md shadow-slate-300 rounded-md flex flex-col  gap-1 justify-center items-center p-2 relative cursor-pointer">
                            <Link href={"/details/" + phone.id}>
                                <div className="">
                                    {phone?.img?.length > 0 && ( // Check if array has at least one item
                                        <img src={phone?.img[0]} alt="" className="w-40" />
                                    )}
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
                            </Link>
                            <div className="absolute bottom-0 right-10 w-8 h-7 md:w-10 md:h-8 flex items-center justify-center text-blue-600">
                                <MdEdit className="text-[16px] md:text-[20px]" onClick={()=>editItem(phone)} />
                            </div>
                            <div className="absolute bottom-0 right-0 w-8 h-7 md:w-10 md:h-8 bg-blue-600 flex items-center justify-center rounded-tl-2xl rounded-br-md text-white">
                            <IoTrashBinOutline className="text-[16px] md:text-[20px]" onClick={()=> deleteRow(phone?.id)}/>
                            </div>
                        </div>
                        </>
                        ))}   
                        {listings?.map(phone => (
                    <>
                    <div className="text-[12px] bg-white  shadow-md shadow-slate-300 rounded-md flex flex-col  gap-1 justify-center items-center p-2 relative cursor-pointer">
                        <Link href={"/details/" + phone.id}>
                            <div className="">
                                {phone?.img?.length > 0 && ( // Check if array has at least one item
                                    <img src={phone?.img[0]} alt="" className="w-40" />
                                )}
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
                        </Link>
                        <div className="absolute bottom-0 right-10 w-8 h-7 md:w-10 md:h-8 flex items-center justify-center text-blue-600">
                            <MdEdit className="text-[16px] md:text-[20px]" onClick={()=>editItem(phone)} />
                        </div>
                        <div className="absolute bottom-0 right-0 w-8 h-7 md:w-10 md:h-8 bg-blue-600 flex items-center justify-center rounded-tl-2xl rounded-br-md text-white">
                        <IoTrashBinOutline className="text-[16px] md:text-[20px]" onClick={()=> deleteRow(phone?.id)}/>
                        </div>
                    </div>
                    </>
                    ))}   
                </div> : 
                <ProductSkeleton />
                }
            </div>
        </Layout>
     );
}
 
export default Profile;