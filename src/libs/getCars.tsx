export default async function getCars() {
    const response = await fetch("https://mai-chob-kin-mala-backend.vercel.app/api/v1/cars");
    if(!response.ok) {
        throw new Error("Failed to fetch getCars");
    }
    return await response.json();
}