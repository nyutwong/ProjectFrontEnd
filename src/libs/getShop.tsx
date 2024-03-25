export default async function getShop(id:string) {
    const response = await fetch(`http://localhost:5000/api/v1/shops/${id}`);
    if(!response.ok) {
        throw new Error("Failed to fetch getShop");
    }
    return await response.json();
}