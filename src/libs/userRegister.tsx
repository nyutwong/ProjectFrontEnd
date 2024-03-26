export default async function userRegister(data:{SSN:string,name:string,email:string,password:string,telephone_number:string,role:string}) {
    
    const response = await fetch("https://mai-chob-kin-mala-backend.vercel.app/api/v1/auth/register",{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            SSN: data.SSN,
            name: data.name,
            email: data.email,
            password: data.password,
            telephone_number: data.telephone_number,
            role: data.role,
        }),
    });
    if(!response.ok){
        throw new Error("Failed to register")
    }
    return await response.json()
}