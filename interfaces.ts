interface carItems {
    success: boolean,
    count: number,
    data: Car[],
    pagination: object,
}

interface Shop {
    _id: string,
    name: string,
    address: string,
    phone: string,
    openingHours: string,
    rating: number,
    createdAt: string,
    id: string
}

interface Booking {
    _id: string,
    car: string,
    user: string,
    startDate: string,
    duration: number,
    totalPrice: number,
    status: string,
    deposit: number,
    endDate: string,
    createdAt: string
}
interface Car {
    _id: string,
    license: string,
    type: string,
    model: string,
    color: string[],
    fuel_type: string,
    year: number,
    price: number,
    mileage: number,
    condition: string,
    image: string[],
    number_of_seats: number,
    status: string,
    shop: Shop,
    bookings: Booking[],
    id: string
}