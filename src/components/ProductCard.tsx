'use client'
import Image from "next/image";
import styles from "./productcard.module.css";
import { Rating } from "@mui/material";

export default function ProductCard({status,price,model,type,rating,img,size,shop}:{status:string,price:number,model:string,type:string,rating:number,img:string,size:number,shop:string}) {
    return (
        <div className="antialiased text-gray-900 font-sans">
            <div className="container w-full">
                <div className="flex flex-wrap mx-4">
                    <div className="w-full p-4">
                        <a
                            href=""
                            className={`${styles["c-card"]} block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden dark:shadow-white`}                        >
                            <div className="relative pb-48 overflow-hidden">
                                <Image
                                    className="absolute inset-0 h-full w-full object-cover"
                                    src={img}
                                    alt="Product Picture"
                                    fill={true}
                                />
                            </div>
                            <div className="p-4">
                                <span className="inline-block px-2 py-1 leading-none bg-green-200 text-green-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                                    {status}
                                </span>
                                <h2 className="mt-2 mb-2  font-bold">
                                    {model}
                                </h2>
                                <p className="text-sm">
                                    {shop}
                                </p>
                                <div className="mt-3 flex items-center">
                                    &nbsp;
                                    <span className="font-bold text-xl">
                                        {price}
                                    </span>
                                    &nbsp;
                                    <span className="text-sm font-semibold">
                                        THB / HOUR
                                    </span>
                                </div>
                            </div>
                            <div className="p-4 border-t border-b text-xs text-gray-700">
                                <span className="flex items-center mb-1">
                                    <i className="far fa-clock fa-fw mr-2 text-gray-900"></i>{" "}
                                    {type}
                                </span>
                                <span className="flex items-center">
                                    <i className="far fa-address-card fa-fw text-gray-900 mr-2"></i>{" "}
                                    {size} seat(s)
                                </span>
                            </div>
                        
                        </a>
                    </div>
                </div>
            </div>
        </div>
        // <InteractiveCard contentName={carName}>
        //     <div classNameName="antialiased bg-gray-200 text-gray-900 p-6">
        //         <div classNameName="w-full h-[70%] relative rounded-t-lg">
        //             <Image
        //                 src={imgSrc}
        //                 alt="Product Picture"
        //                 fill={true}
        //                 classNameName="object-cover rounded-t-lg"
        //             />
        //         </div>
        //         <div classNameName="w-full h-[15%] p-[10px]">{carName}</div>
        //         {onCompare ? (
        //             <button
        //                 classNameName="block h-[10%] text-sm rounded-md bg-sky-600
        //             hover:bg-indigo-600 mx-2 px-1 py-1 text-white shadow-sm"
        //                 onClick={(e) => {
        //                     e.preventDefault();
        //                     onCompare(carName);
        //                 }}
        //             >
        //                 Compare{" "}
        //             </button>
        //         ) : (
        //             ""
        //         )}
        //     </div>
        // </InteractiveCard>
    );
}
