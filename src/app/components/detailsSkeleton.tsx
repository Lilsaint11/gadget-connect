const DetailsSkeleton = () => {
    return ( 
        <div className=" px-20">
        <div className="flex max-sm:flex-col">
            <div className="w-full flex flex-col gap-3">
                <div className='object-cover w-[380px] h-[350px] max-sm:w-[350px] bg-slate-200 animate-pulse rounded-sm' />
                <div className="flex gap-2">
                    <div className="w-16 h-16 bg-slate-200 animate-pulse"></div>      
                    <div className="w-16 h-16 bg-slate-200 animate-pulse"></div>      
                    <div className="w-16 h-16 bg-slate-200 animate-pulse"></div>      
                    <div className="w-16 h-16 bg-slate-200 animate-pulse"></div>                           
                </div>
            </div> 
        
            <div className="w-full flex flex-col gap-3">

                <div className=" flex flex-col gap-4">
                    <div className="w-80 h-3 bg-slate-200 animate-pulse rounded-full "></div>
                    <div className="w-60 h-3 bg-slate-200 animate-pulse rounded-full "></div>
                    <div>
                        <div className="w-40 h-3 bg-slate-200 animate-pulse rounded-full "></div>
                    </div>
                    <div className="w-52 h-3 bg-slate-200 animate-pulse rounded-full "></div>
                    <div className="w-96 h-10 bg-slate-200 animate-pulse rounded-full "></div>
                
                </div>

                <div className="flex gap-3">
                    
                    <div className="w-full">
                        <button className="w-full  bg-slate-200 h-[50px] rounded-md text-white text-[16px] flex justify-center items-center gap-2"></button>
                    </div>
                </div>
                <div className="w-full h-3 bg-slate-200 animate-pulse rounded-full "></div>
                <div className="w-60 h-3 bg-slate-200 animate-pulse rounded-full "></div>
                <div className="flex flex-col gap-4 mt-2">
                    <div className="flex items-center -ml-1 gap-1">
                        <div  className="h-3 w-3 rounded-full  bg-slate-200"/>
                         <div className="w-60 h-3 bg-slate-200 animate-pulse rounded-full "></div>
                    </div>
                    <div className="flex items-center -ml-1 gap-1">
                        <div  className="h-3 w-3 rounded-full  bg-slate-200"/>
                        <div className="w-80 h-3 bg-slate-200 animate-pulse rounded-full "></div>
                    </div>
                    <div className="flex items-center -ml-1 gap-1">
                        <div  className="h-3 w-3 rounded-full  bg-slate-200"/>
                        <div className="w-96 h-3 bg-slate-200 animate-pulse rounded-full "></div>
                    </div>
                    <div className="flex items-center -ml-1 gap-1">
                        <div  className="h-3 w-3 rounded-full  bg-slate-200"/>
                        <div className="w-full h-3 bg-slate-200 animate-pulse rounded-full "></div>
                    </div>
                    <div className="flex items-center -ml-1 gap-1">
                        <div  className="h-3 w-3 rounded-full  bg-slate-200"/>
                        <div className="w-full h-3 bg-slate-200 animate-pulse rounded-full "></div>
                    </div>
                </div>
            
            
            </div>
        </div>
    </div>
       
     );
}
 
export default DetailsSkeleton;