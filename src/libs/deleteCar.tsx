export default async function deleteCar(carId:string,token:string) {
    const response = await fetch(`https://mai-chob-kin-mala-backend.vercel.app/api/v1/cars/${carId}`,{
        method: "DELETE",
        headers:{
            "Content-Type": "application/json",
            authorization:`Bearer ${token}`
        },
    });
    if(!response.ok){
        throw new Error("Failed to fetch deleteCar")
    }
    return await response.json()
}