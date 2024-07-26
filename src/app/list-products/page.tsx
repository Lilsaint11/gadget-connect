"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { supabase } from "../auth/supabase";
import { RotatingLines } from 'react-loader-spinner'
import { Toaster, toast } from 'sonner'

const ListProducts = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [imageArray,setImageArray] = useState<string[]>([])
    const [formData, setFormData] = useState({
        name: "",
        color: "",
        storage:"",
        grade:"",
        amt:"",
        bh:"",
        price:"",
        img:[""],
        desc:"",
        category:"",
    });
    const {name, color,storage, grade,amt,bh,price,img,desc,category} = formData;
    function onChange(e: React.ChangeEvent<HTMLTextAreaElement>|React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLSelectElement>){
        setFormData((prevState) => ({
            ...prevState,[e.target.id]: e.target.value
        }))
        console.log(formData)
    }
    
    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const fileList = event.target.files;
        if (!fileList || fileList.length === 0) return;
    
        const file = fileList[0];
        console.log(file)
        setSelectedFile(file)
    }

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const fileList = e.target.files;
        if (!fileList || fileList.length === 0) return;
    
        const file = fileList[0];
        console.log(file)
        setSelectedFile(file)
        if (!file) {
        return;
        }


        try {
        const { data, error } = await supabase
            .storage
            .from('images')
            .upload(`phones/${file.name}`, file);

        if (error) {
            console.log('Error uploading image:', error);
        } else {
            console.log('Image uploaded successfully:', data);
            const publicUrl = await supabase.storage.from('images').getPublicUrl(`phones/${file.name}`)
            if(publicUrl.data.publicUrl !== ""){
                setImageArray([...imageArray, publicUrl?.data.publicUrl]);
                console.log(imageArray,publicUrl?.data.publicUrl)
                setFormData((prevState) => ({
                    ...prevState,img: imageArray
                }))
                console.log(formData)
            }
        }
        console.log("true")
        } catch (error) {
        console.log('Error:', error);
        }
        console.log(selectedFile)
    };      

  async function onSubmit(e: React.MouseEvent<HTMLButtonElement>){
    e.preventDefault()
    setLoading(true)
   // handleUpload()
   console.log(formData.img)
    const { data: { user } } = await supabase.auth.getUser()
    let vendor_id = user?.id
    const {data, error} = await supabase
    .from('phones')
    .insert([{ name: name, color: color,storage:storage,grade:grade,amt:amt, battery_health:bh,price:price,img:imageArray,desc:desc,vendor_id:vendor_id,category:category}])
    .select()

    if (error){
        console.log(error)
        setLoading(false)
        toast.error('Check again sir')
    }
    if(data){
        console.log("data")
        toast.success('Hundred!!!!, item listed egbon')
        setLoading(false)
        setTimeout(()=>{
            router.push('/');
        },2000)
    }
}
useEffect(()=>{
    console.log(imageArray)
},[imageArray])
    return ( 
        <div className="bg-[#eee] md:h-screen sm:w-screen w-full flex justify-center items-center relative">
             <Toaster position="top-right" richColors />
            <Link href="/"> <p className=" text-slate-400 absolute left-7 top-5 text-[12px] hover:text-black transition duration-200">Return to home</p></Link>
            <div className=" w-[700px] bg-white p-5  rounded-md shadow shadow-lg shadow-slate-300">
                <h1 className="text-3xl text-center mb-5 max-md:mt-10 font-medium">List Product</h1>
                <form action="" className="w-full flex flex-col  gap-2">
                    <div className="flex flex-col  gap-1">
                        <label htmlFor="" className="text-[12px]"> Name</label>
                        <input type="text" id="name" value={name} onChange={onChange} className="border border-slate-300 h-12 rounded-md pl-2 focus:outline-none"/>
                    </div>
                    <div  className="flex max-md:flex-col justify-between gap-2">
                        <div className="flex flex-col  gap-1 w-full">
                            <label htmlFor="" className="text-[12px]">Color</label>
                            <input type="text" id="color" value={color} onChange={onChange} className="border border-slate-300 h-12 rounded-md pl-2 focus:outline-none w-full"/>
                        </div>
                        <div className="flex flex-col  gap-1 w-full">
                            <label htmlFor="" className="text-[12px]">Storage</label>
                            <input type="text" id="storage" value={storage} onChange={onChange} className="border border-slate-300 h-12 rounded-md pl-2 focus:outline-none w-full"/>
                        </div>
                        <div className="flex flex-col  gap-1 w-full">
                            <label htmlFor="" className="text-[12px]">grade(e.g uk used/new)</label>
                            <input type="text" id="grade" value={grade} onChange={onChange} className="border border-slate-300 h-12 rounded-md pl-2 focus:outline-none"/>
                        </div>
                    </div>
                    <div className="flex max-md:flex-col justify-between gap-2">
                        <div className="flex flex-col  gap-1 w-full">
                            <label htmlFor="" className="text-[12px]">Amount of items</label>
                            <input type="number" id="amt" value={amt} onChange={onChange} className="border border-slate-300 h-12 rounded-md pl-2 focus:outline-none"/>
                        </div>
                        <div className="flex flex-col  gap-1 w-full">
                            <label htmlFor="" className="text-[12px]">Battery Health</label>
                            <input type="number" id="bh" value={bh} onChange={onChange} className="border border-slate-300 h-12 rounded-md pl-2 focus:outline-none"/>
                        </div>
                        <div className="flex flex-col  gap-1 w-full">
                            <label htmlFor="" className="text-[12px]">Price</label>
                            <input type="number" id="price" onChange={onChange} className="border border-slate-300 h-12 rounded-md pl-2 focus:outline-none"/>
                        </div>
                    </div>
                    <div className="flex max-md:flex-col justify-between gap-2">
                        <div className="flex flex-col  gap-1">
                            <label htmlFor="" className="text-[12px]">Main image</label>
                            <input type="file" id="img" onChange={handleUpload} className="border border-slate-300 h-12 rounded-md pl-2 w-full focus:outline-none pt-2 "/>
                        </div>
                        <div className="flex flex-col  gap-1 w-full">
                            <label htmlFor="" className="text-[12px]">Category</label>
                            <select name=""  id="category" onChange={onChange}  value={category} className="border border-slate-300 h-12 rounded-md pl-2 focus:outline-none">
                                <option value="default">Select Category</option>
                                <option value="iphone">Iphone</option>
                                <option value="samsung">Samsung</option>
                                <option value="tablet">Tablet</option>
                                <option value="ipad">Ipad</option>
                                <option value="others">Others</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex max-md:flex-col justify-between gap-2">
                        <div className="flex flex-col  gap-1">
                            <label htmlFor="" className="text-[12px]">Sub image 1</label>
                            <input type="file" id="img" onChange={handleUpload} className="border border-slate-300 h-12 w-full rounded-md pl-2 focus:outline-none pt-2 " />
                        </div>
                        <div className="flex flex-col  gap-1">
                            <label htmlFor="" className="text-[12px]">Sub image 2</label>
                            <input type="file" id="img" onChange={handleUpload} className="border border-slate-300 h-12 w-full rounded-md pl-2 focus:outline-none pt-2 " />
                        </div>
                        <div className="flex flex-col  gap-1">
                            <label htmlFor="" className="text-[12px]">Sub image 3</label>
                            <input type="file" id="img" onChange={handleUpload} className="border border-slate-300 h-12 w-full rounded-md pl-2 focus:outline-none pt-2 "/>
                        </div>
                    </div>
                    <div className="flex flex-col  gap-1">
                        <label htmlFor="" className="text-[12px]">Description</label>
                        <textarea  className="border border-slate-300 h-16 rounded-md pt-1 pl-2 focus:outline-none" id="desc" value={desc} onChange={onChange}/>
                    </div>
                    <button className="h-12 w-full bg-blue-700 text-white rounded-md flex items-center justify-center" onClick={onSubmit}>
                        {!loading ? "Add" : 
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
        </div>
     );
}
 
export default ListProducts;