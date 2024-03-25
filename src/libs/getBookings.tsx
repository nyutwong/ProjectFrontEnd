export default async function getBookings(token:string) {
    
    const response = await fetch("https://mai-chob-kin-mala-backend.vercel.app/api/v1/bookings",{
        method: "GET",
        headers:{
            authorization:`Bearer ${token}`
        },
    });

    if(!response.ok){
        throw new Error("Failed to fetch getBookings");
    }
    return await response.json()
}