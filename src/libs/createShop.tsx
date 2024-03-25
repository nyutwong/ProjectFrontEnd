export default async function createShop(data:{image:string, name:string, address:string, phone:string, openingHours:string, rating:number}, token:string) {
    
    const response = await fetch(`https://mai-chob-kin-mala-backend.vercel.app/api/v1/shops/`,{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            authorization:`Bearer ${token}`
        },
        body: JSON.stringify({
            image:data.image,
            name: data.name,
            address: data.address,
            phone: data.phone,
            openingHours: data.openingHours,
            rating: data.rating,
        }),
    });
    if(!response.ok){
        throw new Error("Failed to fetch createShop")
    }
    return await response.json()
}