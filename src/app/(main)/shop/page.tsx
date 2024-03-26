import getShops from "@/libs/getShops";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import ShopCatalog from "@/components/ShopCatalog";

export default function Car(){
    const shops = getShops();
    
    return(
        <main className="text-xl text-center">
            <h1>Select Your Travel Partner</h1>
            <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
                <ShopCatalog shopJson={shops}/>
            </Suspense>
        </main>
    )
} 