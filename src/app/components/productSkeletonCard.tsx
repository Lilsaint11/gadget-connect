const ProductSkeletonCard = () => {
    return ( 
        <div className="text-[12px] h-[320px] bg-white  shadow-md shadow-slate-300 rounded-md flex flex-col  gap-3 justify-between py-5 items-center p-2 relative cursor-pointer animate-pulse">
            <div className="">
                <div  className="w-40 h-40 flex bg-slate-200"></div>
            </div>
            <div className="w-full flex flex-col  gap-2">
                <h2 className="h-4 w-full  bg-slate-200 rounded-full"></h2>
                <p  className="h-4 w-full  bg-slate-200 rounded-full"> </p>
                <div className="flex items-center gap-2 -ml-1">
                    <div  className="h-6 w-7 rounded-full  bg-slate-200"/>
                    <p  className="h-4 w-full  bg-slate-200 rounded-full"></p>
                </div>
                <p className="h-4 w-full  bg-slate-200 rounded-full"></p>
                <div className="flex">
                    <p className="h-4 w-20  bg-slate-200 rounded-full"></p>
                </div>
            </div>
            <div className="absolute bottom-0 right-0 w-5 h-4 md:w-10 md:h-6 bg-slate-200 flex items-center justify-center rounded-tl-2xl rounded-br-md text-white">
                <div  className=""/>
            </div>
        </div>
     );
}
 
export default ProductSkeletonCard;