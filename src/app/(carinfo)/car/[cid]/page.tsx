import Image from "next/image";
import getCar from "@/libs/getCar";

export default async function CarDetailPage({params}:{params:{cid:string}}){
    
    const CarDetail = await getCar(params.cid)
    
    return(
        <main className="text-center p-5">
            <h1 className="text-lg font-medium">{CarDetail.data.model}</h1>
            <div className="flex flex-row my-5">
                <Image src={CarDetail.data.picture} 
                width={0} height={0} sizes="100vw"
                className="rounded-lg w-[30%]"
                alt="CarImage"/>
                <div className="text-left text-md mx-5">
                    <div>{CarDetail.data.description}</div>
                    <div className="text-md mx-5">Door: {CarDetail.data.doors}</div>
                    <div className="text-md mx-5">Seats: {CarDetail.data.seats}</div>
                    <div className="text-md mx-5">Large Bags: {CarDetail.data.largebags}</div>
                    <div className="text-md mx-5">Small Bags: {CarDetail.data.smallbags}</div>
                    <div className="text-md mx-5">Daily Rental Rate: {CarDetail.data.dayRate}(insurance included)</div>
                </div>
            </div>
        </main>
    )
}
export async function  generateStaticParams() {
    return[{cid:'001'},{cid:'002'},{cid:'003'},{cid:'004'}]
}