"use client";
import { useState } from "react";
import style from "./banner.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Session } from "inspector";

export default function Banner() {
    const covers = ["/img/cover.jpg", "/img/cover2.jpg", "/img/cover3.jpg"];
    const [index, setIndex] = useState(0);
    const router = useRouter();
    const { data: session } = useSession();

    return (
        <div
            className={style.banner}
            onClick={() => {
                setIndex(index + 1);
            }}
        >
            <Image
                src={covers[index % 3]}
                alt="cover"
                fill={true}
                priority
                objectFit="cover"
            />
            <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
                <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white drop-shadow-lg">
                    Rent a car in seconds with our easy-to-use service!
                </h1>
                <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto drop-shadow-sm">
                    Choose from a wide range of vehicles and book your rental
                    car today.
                </p>
                {session ? (
                    <div className="z-30 absolute top-5 right-10 font-semibold text-cyan-800 text-xl">
                        Hello {session.user.data.name}
                    </div>
                ) : null}
                <div className="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm">
                    <a
                        className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-violet-500 dark:highlight-white/20 dark:hover:bg-violet-400"
                        onClick={(e) => {
                            e.stopPropagation();
                            router.push("/shop");
                        }}
                    >
                        Select Your Travel Partner NOW
                    </a>
                    
                    
                </div>
            </div>
            {/* <div className={style.bannerText}>
                <h1 className='text-4xl'>Your เทสๆTravel Partner</h1>
                <h3 className='text-xl'>Explore Your World with Us</h3>
            </div>
            {
                session?
                <div className='z-30 absolute top-5 right-10 font-semibold text-cyan-800 text-xl'>
                    Hello {session.user.data.name}
                </div>
                :
                null
            }
            <button className='bg-white text-cyan-600 border border-cyan-600 font-semibold py-2 px-2 m-2 rounded 
            z-30 absolute bottom-0 right-0 hover:bg-cyan-600 hover:text-white hover:border-transparent'
            onClick={(e)=>{e.stopPropagation(); router.push('/car')}}>
                Select Your Travel Partner NOW
            </button> */}
        </div>
    );
}
