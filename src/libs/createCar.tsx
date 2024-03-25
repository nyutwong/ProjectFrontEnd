export default async function createCar(data:{license:string, type:string, model:string, color:string[], fuel_type:string, year:number, price:number, mileage:number, condition:string, image:string[], number_of_seats:number}, shopId:string, token:string) {
    
    const response = await fetch(`https://mai-chob-kin-mala-backend.vercel.app/api/v1/shops/${shopId}/cars`,{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            authorization:`Bearer ${token}`
        },
        body: JSON.stringify({
                license: data.license,
                type: data.type,
                model: data.model,
                color: data.color,
                fuel_type: data.fuel_type,
                year: data.year,
                price: data.price,
                mileage: data.mileage,
                condition: data.condition,
                image: data.image,
                number_of_seats: data.number_of_seats
        }),
    });
    if(!response.ok){
        throw new Error("Failed to fetch createCar")
    }
    return await response.json()
}