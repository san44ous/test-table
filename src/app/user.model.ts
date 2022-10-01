export interface User{
    _id: string,
    amount: number,
    type: string,
    name: Name,
    company: string,
    email: string,
    phone: string,
    address: string
}

interface Name{
    first: string,
    last: string
}

