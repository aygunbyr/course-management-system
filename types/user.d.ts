type Address = {
  address: string
  city: string
  coordinates: {
    lat: number
    lng: number
  }
  postalCode: string
  state: string
}

export type User = {
  id: number
  firstName: string
  lastName: string
  maidenName: string
  age: number
  gender: string
  email: string
  phone: string
  username: string
  password: string
  birthDate: string
  image: string
  bloodGroup: string
  height: number
  weight: number
  eyeColor: string
  hair: {
    color: string
    type: string
  }
  domain: string
  ip: string
  address: Address
  macAddress: string
  university: string
  bank: {
    cardExpire: string
    cardNumber: string
    cardType: string
    currency: string
    iban: string
  }
  company: {
    address: Address
    department: string
    name: string
    title: string
  }
  ein: string
  ssn: string
  userAgent: string
}