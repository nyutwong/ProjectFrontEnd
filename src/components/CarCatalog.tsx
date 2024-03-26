import Link from "next/link"
import ProductCard from "./ProductCard"

export default async function CarCatalog({carJson}:{carJson:Promise<carItems>}){
    
    const carJsonReady = await carJson
    return(
        <>
            Explore {carJsonReady.count} model in our catalog
            <div style={{margin:"20px",display:"flex", flexDirection:"row",flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}>
                {
                    carJsonReady.data.map((carItem:Car)=>(
                        <Link href={`/car/${carItem.id}`} className="w-[400px]">
                            <ProductCard status={carItem.status} price={carItem.price} model={carItem.model} type={carItem.type} rating={carItem.rating} img={carItem.image[0]} size={carItem.number_of_seats} shop={carItem.shop.name} />
                        </Link> 
                    ))
                }
            </div>
        </>
    )
}