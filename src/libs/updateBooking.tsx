export default async function updateBooking(data:object,bookingId:string,token:string) {
    const response = await fetch(`https://mai-chob-kin-mala-backend.vercel.app/api/v1/bookings/${bookingId}`,{
        method: "PUT",
        headers:{
            "Content-Type": "application/json",
            authorization:`Bearer ${token}`
        },
        body: JSON.stringify(data),
    });
    if(!response.ok){
        throw new Error("Failed to fetch updateBooking")
    }
    return await response.json()
}