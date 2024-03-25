export default async function getUserProfile(token:string) {
    
    const response = await fetch("https://mai-chob-kin-mala-backend.vercel.app/api/v1/auth/me",{
        method: "GET",
        headers:{
            authorization:`Bearer ${token}`
        },
    });

    if(!response.ok){
        throw new Error("Can't get User Profile");
    }
    return await response.json()
}