export default async function getShops() {
    const response = await fetch(`https://mai-chob-kin-mala-backend.vercel.app/api/v1/shops`,{cache:'no-cache'});
    if(!response.ok) {
        throw new Error("Failed to fetch getShops");
    }
    return await response.json();
}