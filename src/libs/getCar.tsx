export default async function getCar(id:string) {
    const response = await fetch(`https://mai-chob-kin-mala-backend.vercel.app/api/v1/cars/${id}`,{cache:'no-cache'});
    if(!response.ok) {
        throw new Error("Failed to fetch getCar");
    }
    return await response.json();
}