export default async function createCar(license:string, type:string, model:string, color:string[], fuel_type:string, year:number, price:number, mileage:number, condition:string, image:string[], number_of_seats:number, shopId:string, token:string) {
    
    const response = await fetch(`https://mai-chob-kin-mala-backend.vercel.app/api/v1/shops/${shopId}/cars`,{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            authorization:`Bearer ${token}`
        },
        body: JSON.stringify({
                license: license,
                type: type,
                model: model,
                color: color,
                fuel_type: fuel_type,
                year: year,
                price: price,
                mileage: mileage,
                condition: condition,
                image: image,
                number_of_seats: number_of_seats
        }),
    });
    if(!response.ok){
        throw new Error("Failed to fetch createCar")
    }
    return await response.json()
}