export default async function getCars(query:string|null) {
    const response = await fetch(`https://mai-chob-kin-mala-backend.vercel.app/api/v1/cars${query?`?shop=${query}`:''}`,{cache:'no-cache'});
    if(!response.ok) {
        throw new Error("Failed to fetch getCars");
    }
    return await response.json();
}