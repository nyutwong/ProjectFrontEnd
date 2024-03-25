export default async function getShops() {
    const response = await fetch(`http://localhost:5000/api/v1/shops`);
    if(!response.ok) {
        throw new Error("Failed to fetch getShops");
    }
    return await response.json();
}