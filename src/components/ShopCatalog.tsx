import Link from "next/link"
import ShopCard from "./ShopCard"

export default async function ShopCatalog({shopJson}:{shopJson:Promise<shopItems>}){
    
    const shopJsonReady = await shopJson
    return(
        <>
            Explore {shopJsonReady.count} model in our catalog
            <div style={{margin:"20px",display:"flex", flexDirection:"row",flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}>
                {
                    shopJsonReady.data.map((shopItem:Shop)=>(
                        <Link href={`/car?shop=${shopItem.id}`} className="w-[400px]">
                            <ShopCard name={shopItem.name} tel={shopItem.phone} rating={shopItem.rating} opening={shopItem.openingHours} img={shopItem.image} address={shopItem.address}/>
                        </Link> 
                    ))
                }
            </div>
        </>
    )
}