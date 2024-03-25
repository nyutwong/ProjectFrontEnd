export default async function addBooking(startDate:string,duration:number,totalPrice:number,deposit:number, carId:string, token:string) {
    
    const response = await fetch(`https://mai-chob-kin-mala-backend.vercel.app/api/v1/cars/${carId}/bookings/`,{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            authorization:`Bearer ${token}`
        },
        body: JSON.stringify({
            startDate: startDate,
            duration: duration,
            totalPrice: totalPrice,
            deposit: deposit
        }),
    });
    if(!response.ok){
        throw new Error("Failed to fetch addBooking")
    }
    return await response.json()
}