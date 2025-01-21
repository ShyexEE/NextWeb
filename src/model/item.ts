type itemType = {
    id: number,
    name:string,
    rating:number,
    price: string,
    stock: string, 
    description: string, 
    specs: {
        brand: string,
        model: string,
        warranty: string
    }
};
export default itemType
