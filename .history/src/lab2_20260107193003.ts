const product: {name:string,price:number,sale:boolean,rate:'Thấp' | 'Trung bình' | 'Cao'} = {
    name: "Laptop",
    price: 1000,
    sale: true,
    rate: "Cao"
};

console.log("San Pham:", product);

const listProducts: Array<{name:string,price:number,sale:boolean,rate:'Thấp' | 'Trung bình' | 'Cao'}> = [
    { name: "Laptop", price: 1000, sale: true, rate: "Cao" },
    { name: "Phone", price: 500, sale: false, rate: "Trung bình" },
    { name: "Tablet", price: 300, sale: true, rate: "Thấp" },
    { name: "Monitor", price: 200, sale: false, rate: "Cao" },
    { name: "Headphones", price: 150, sale: true, rate: "Trung bình" }
];

console.log("List San Pham:", listProducts);

