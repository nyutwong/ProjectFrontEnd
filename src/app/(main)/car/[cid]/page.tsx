import Image from "next/image";
import getCar from "@/libs/getCar";
import Status from "@/components/Status";
import { authOptions } from "@/app/(auth)/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function CarDetailPage({params}:{params:{cid:string}}){

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
                    <div>License: {CarDetail.data.license}</div>
                    <div>Color: {CarDetail.data.color[0]}</div>
                    <div>Fuel: {CarDetail.data.fuel_type}</div>
                    <div>Year: {CarDetail.data.year}</div>
                    <div>Mileage: {CarDetail.data.mileage}</div>
                    <div>Condition: {CarDetail.data.condition}</div>
                    <div>Shop: {CarDetail.data.shop.name}</div>
                    <div className="ml-6 mb-3 mt-1"><Status status={CarDetail.data.status}/></div>
                    <div className="flex">
                        <div><Link
                            href={`/car/${params.cid}/reservation`}
                            className="bg-sky-500 text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-indigo-600 ml-7"
                        >
                            Reserve
                        </Link></div>
                        {
                            session?.user.data.role=='admin'? <div className="flex">
                                <div ><Link
                            href={`/car/${params.cid}/reservation`}
                            className="bg-yellow-500 text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-indigo-600 ml-7"
                            >
                                Edit
                            </Link></div>

                            <div><Link
                                href={`/car/${params.cid}/reservation`}
                                className="bg-red-500 text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-indigo-600 ml-7"
                            >
                                Delete
                            </Link></div>
                                </div>:""
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}