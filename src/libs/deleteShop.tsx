export default async function deleteShop(shopId:string,token:string) {
    const response = await fetch(`https://mai-chob-kin-mala-backend.vercel.app/api/v1/shops/${shopId}`,{
        method: "DELETE",
        headers:{
            "Content-Type": "application/json",
            authorization:`Bearer ${token}`
        },
    });
    if(!response.ok){
        throw new Error("Failed to fetch deleteShop")
    }
    return await response.json()
}