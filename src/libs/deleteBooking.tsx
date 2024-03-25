export default async function deleteBooking(bookingId:string,token:string) {
    const response = await fetch(`https://mai-chob-kin-mala-backend.vercel.app/api/v1/bookings/${bookingId}`,{
        method: "DELETE",
        headers:{
            "Content-Type": "application/json",
            authorization:`Bearer ${token}`
        },
    });
    if(!response.ok){
        throw new Error("Failed to fetch deleteBooking")
    }
    return await response.json()
}