export default async function getCars() {
    const response = await fetch("http://localhost:5000/api/v1/cars");
    if(!response.ok) {
        throw new Error("Failed to fetch cars");
    }
    return await response.json();
}