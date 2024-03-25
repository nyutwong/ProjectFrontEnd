export default async function getShop(id:string) {
    const response = await fetch(`https://mai-chob-kin-mala-backend.vercel.app/api/v1/shops/${id}`);
    if(!response.ok) {
        throw new Error("Failed to fetch getShop");
    }
    return await response.json();
}