import Link from "next/link";

const ListProducts = () => {
    return ( 
        <div className="bg-[#eee] h-screen w-screen flex justify-center items-center relative">
            <Link href="/"> <p className=" text-slate-400 absolute left-7 top-5 text-[12px] hover:text-black transition duration-200">Return to home</p></Link>
            <div className="w-[700px] bg-white p-3 px-10 rounded-md shadow shadow-lg shadow-slate-300">
                <h1 className="text-3xl text-center mb-5 font-medium">List Product</h1>
                <form action="" className="w-full flex flex-col gap-2">
                    <div className="flex flex-col  gap-1">
                        <label htmlFor="" className="text-[12px]"> Name</label>
                        <input type="text" className="border border-slate-300 h-12 rounded-md pl-2 focus:outline-none"/>
                    </div>
                    <div  className="flex justify-between gap-2">
                        <div className="flex flex-col  gap-1 w-full">
                            <label htmlFor="" className="text-[12px]">Color</label>
                            <input type="text" className="border border-slate-300 h-12 rounded-md pl-2 focus:outline-none w-full"/>
                        </div>
                        <div className="flex flex-col  gap-1 w-full">
                            <label htmlFor="" className="text-[12px]">Storage</label>
                            <input type="email" className="border border-slate-300 h-12 rounded-md pl-2 focus:outline-none w-full"/>
                        </div>
                        <div className="flex flex-col  gap-1 w-full">
                            <label htmlFor="" className="text-[12px]">Type(e.g uk used/new)</label>
                            <input type="text" className="border border-slate-300 h-12 rounded-md pl-2 focus:outline-none"/>
                        </div>
                    </div>
                    <div className="flex justify-between gap-2">
                        <div className="flex flex-col  gap-1 w-full">
                            <label htmlFor="" className="text-[12px]">Amount of items</label>
                            <input type="number" className="border border-slate-300 h-12 rounded-md pl-2 focus:outline-none"/>
                        </div>
                        <div className="flex flex-col  gap-1 w-full">
                            <label htmlFor="" className="text-[12px]">Battery Health</label>
                            <input type="number" className="border border-slate-300 h-12 rounded-md pl-2 focus:outline-none"/>
                        </div>
                        <div className="flex flex-col  gap-1 w-full">
                            <label htmlFor="" className="text-[12px]">Price</label>
                            <input type="number" className="border border-slate-300 h-12 rounded-md pl-2 focus:outline-none"/>
                        </div>
                    </div>
                    <div className="flex flex-col  gap-1">
                        <label htmlFor="" className="text-[12px]">Images</label>
                        <input type="file" className="border border-slate-300 h-12 rounded-md pl-2 focus:outline-none pt-2 " multiple/>
                    </div>
                    <div className="flex flex-col  gap-1">
                        <label htmlFor="" className="text-[12px]">Description</label>
                        <textarea  className="border border-slate-300 h-16 rounded-md pt-1 pl-2 focus:outline-none"/>
                    </div>
                    <button className="h-12 w-full bg-blue-700 text-white rounded-md ">Add</button>
                </form> 
            </div>
        </div>
     );
}
 
export default ListProducts;