export default async function userRegister(SSN:string,name:string,email:string,password:string,telephone_number:string,role:string) {
    
    const response = await fetch("http://localhost:5000/api/v1/auth/register",{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            SSN: SSN,
            name: name,
            email: email,
            password: password,
            telephone_number: telephone_number,
            role: role,
        }),
    });
    if(!response.ok){
        throw new Error("Failed to register")
    }
    return await response.json()
}