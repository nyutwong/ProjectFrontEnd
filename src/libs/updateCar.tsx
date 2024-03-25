export default async function updateCar(data:object,carId:string,token:string) {
    const response = await fetch(`https://mai-chob-kin-mala-backend.vercel.app/api/v1/cars/${carId}`,{
        method: "PUT",
        headers:{
            "Content-Type": "application/json",
            authorization:`Bearer ${token}`
        },
        body: JSON.stringify(data),
    });
    if(!response.ok){
        throw new Error("Failed to fetch updateCar")
    }
    return await response.json()
}