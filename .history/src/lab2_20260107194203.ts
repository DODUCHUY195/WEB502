type Product = {name:string,price:number,sale:boolean,rate:'Thấp' | 'Trung bình' | 'Cao',description?:string};


let listProducts: Array<{name:string,price:number,sale:boolean,rate:'Thấp' | 'Trung bình' | 'Cao'}> = [
    { name: "Laptop", price: 1000, sale: true, rate: "Cao" },
    { name: "Phone", price: 500, sale: false, rate: "Trung bình" },
    { name: "Tablet", price: 300, sale: true, rate: "Thấp" },
    { name: "Monitor", price: 200, sale: false, rate: "Cao" },
    { name: "Headphones", price: 150, sale: true, rate: "Trung bình" }
];

console.log("List San Pham:", listProducts);


function addProduct(product: Product){
    listProducts = listProducts.map(p => ({
        ...p,
        description : p.price >5 ? 'Tot' : 'Binh Thuong',
    }))
    
    const newPrd = {
        ...product,
        description : product.price >5 ? 'Tot' : 'Binh Thuong',
    }
    listProducts.push(newPrd);
}