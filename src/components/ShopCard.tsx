'use client'
import Image from "next/image";
import styles from "./productcard.module.css";
import { Rating } from "@mui/material";

export default function ShopCard({name,tel,rating,opening,img,address}:{name:string, tel:string, rating:number, opening:string,img:string, address:string}) {
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
                                <h2 className="mt-2 mb-2  font-bold">
                                    {name}
                                </h2>
                                <p className="text-sm">
                                    {address}
                                </p>
                            </div>
                            <div className="p-4 border-t border-b text-xs text-gray-700">
                                <span className="flex items-center mb-1">
                                    <i className="far fa-clock fa-fw mr-2 text-gray-900"></i>{" "}
                                    OpeningHours: {opening}
                                </span>
                                <span className="flex items-center">
                                    <i className="far fa-address-card fa-fw text-gray-900 mr-2"></i>{" "}
                                    tel: {tel}
                                </span>
                            </div>
                            <div className="p-4 flex items-center text-sm text-gray-600">
                                <Rating name="read-only" value={rating} readOnly ></Rating>
                                <span className="ml-2">1 review(s)</span>
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
