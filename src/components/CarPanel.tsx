'use client'
import { useReducer,useRef,useEffect, use, useState } from "react"
import ProductCard from "./ProductCard"
import Link from "next/link"
import getCars from "@/libs/getCars"

export default function CarPanel(){

    const[carResponse,setCarResponse] = useState(null);

    useEffect(()=>{
        const fetchData = async() =>{
            const cars = await getCars()
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
                    carResponse.data.map((carItem:object)=>(
                        <Link href={`/car/${carItem.id}`} className="w-1/5">
                            <ProductCard carName={carItem.model} imgSrc={carItem.picture}
                            onCompare={(car:string)=>dispatchCompare({type:'add',carName:car})}/>
                        </Link> 
                    ))
                }
            </div>
            <div className="w-full text-xl font-medium">Compare List: {compareList.size}</div>
                {Array.from(compareList).map( (car)=><div key={car}onClick={()=>
                dispatchCompare({type:'remove',carName:car})}>{car}</div>)}

            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 
            px-3 py-2 shadow-sm text-white" onClick={()=>{count.current=count.current+1;alert(count.current)}}>
                Count with local variable
            </button> 
            <input type="text" placeholder='Please Fill' className="block text-grey-900 
            text-sm rounded-lg p-2 m-2 bg-purple-50 ring-1 ring-inset ring-purple-400
            focus:outline-none focus:bg-purple-200 focus:ring-2" ref={inputRef} />

            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 
            px-3 py-2 shadow-sm text-white"
            onClick={()=>{
                if(inputRef.current!=null){
                    inputRef.current.focus();
                }}}>
                Focus Text Fill
            </button> 
        </div>
    )
}

