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
                            <ProductCard carName={carItem.model} imgSrc={carItem.image[0]}/>
                        </Link> 
                    ))
                }
            </div>
        </>
    )
}