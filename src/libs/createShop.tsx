export default async function createShop(image:string, name:string, address:string, phone:string, openingHours:string, rating:number, token:string) {
    
    const response = await fetch(`https://mai-chob-kin-mala-backend.vercel.app/api/v1/shops/`,{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            authorization:`Bearer ${token}`
        },
        body: JSON.stringify({
            image:image,
            name: name,
            address: address,
            phone: phone,
            openingHours: openingHours,
            rating: rating,
        }),
    });
    if(!response.ok){
        throw new Error("Failed to fetch createShop")
    }
    return await response.json()
}