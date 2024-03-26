import Image from "next/image";
import getCar from "@/libs/getCar";
import { authOptions } from "@/app/(auth)/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import ReservationData from "@/components/ReservationData";

export default async function Reservation({params}:{params:{cid:string}}){

    const session = await getServerSession(authOptions);
    const CarDetail = await getCar(params.cid)

    return(
        <main className="text-center p-5">
            <h1 className="text-2xl font-bold">{CarDetail.data.model}</h1>
            <div className="flex flex-row my-5 justify-center">
                <Image
                        src={CarDetail.data.image[0]}
                        alt="CarImage"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="rounded-lg w-[30%]"
                />
                <div className="text-left text-md mx-5">
                    <ReservationData price={CarDetail.data.price} dateLabel="Pick Reservation Date" numLabel="Hours"/>
                </div>
            </div>
        </main>
    )
}