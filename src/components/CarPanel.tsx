'use client'
import { useReducer,useRef,useEffect, use, useState } from "react"
import ProductCard from "./ProductCard"
import Link from "next/link"
import getCars from "@/libs/getCars"

export default function CarPanel(){

    const[carResponse,setCarResponse] = useState<carItems>();

    useEffect(()=>{
        const fetchData = async() =>{
            const cars = await getCars()
            console.log(cars);
            setCarResponse(cars);
        }
        fetchData();
    },[]);
    
    let count = useRef(0);
    const inputRef = useRef<HTMLInputElement>(null);


    const compareReducer = (compareList:Set<string>, action:{type:string, carName:string}) =>{
        switch(action.type){
            case 'add' :{
                return new Set(compareList.add(action.carName))
            }
            case 'remove':{
                compareList.delete(action.carName)
                return new Set(compareList)
            }
            default: return compareList
        }
    }

    const [compareList,dispatchCompare] = useReducer(compareReducer, new Set<string>())

    if(!carResponse) return (<p>Car Panel is Loading ...</p>)
    return(
        <div>
            <div style={{margin:"20px",display:"flex", flexDirection:"row",flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}>
                {
                    carResponse.data.map((carItem)=>(
                        <Link href={`/car/${carItem._id}`} className="w-1/5">
                            <ProductCard carName={carItem.model} imgSrc={''}
                            onCompare={(car:string)=>dispatchCompare({type:'add',carName:car})}/>
                        </Link> 
                    ))
                }
            </div>
        </div>
    )
}

