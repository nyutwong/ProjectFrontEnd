export default async function updateShop(data:object,shopId:string,token:string) {
    const response = await fetch(`https://mai-chob-kin-mala-backend.vercel.app/api/v1/shops/${shopId}`,{
        method: "PUT",
        headers:{
            "Content-Type": "application/json",
            authorization:`Bearer ${token}`
        },
        body: JSON.stringify(data),
    });
    if(!response.ok){
        throw new Error("Failed to fetch updateShop")
    }
    return await response.json()
}