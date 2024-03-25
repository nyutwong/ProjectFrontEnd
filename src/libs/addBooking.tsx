export default async function addBooking(data:{startDate:string,duration:number,totalPrice:number,deposit:number}, carId:string, token:string) {
    
    const response = await fetch(`https://mai-chob-kin-mala-backend.vercel.app/api/v1/cars/${carId}/bookings/`,{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            authorization:`Bearer ${token}`
        },
        body: JSON.stringify({
            startDate: data.startDate,
            duration: data.duration,
            totalPrice: data.totalPrice,
            deposit: data.deposit
        }),
    });
    if(!response.ok){
        throw new Error("Failed to fetch addBooking")
    }
    return await response.json()
}