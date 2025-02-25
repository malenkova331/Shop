export interface IProduct {
    id: number,
    title: string,
    description: string,
    category: string,
    brand: string,
    price: number,
    images: [],
}

export interface IProductInfo {
    title: string,
    description: string,
    category: string,
    brand: string,
    price: number,
    images: [],
}

export interface IProductInCart {
    id: number,
    title: string,
    price: number,
    quantity: number,
    totalPrice: number
}