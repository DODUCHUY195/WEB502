type student = {
    id:number
    name:string
    score:number
}

interface User {
    id:number
    email: Required<string>
    phone?: number
}

type FunctionCalculate = (a:number, b:number) => number;

const calculateSum: FunctionCalculate = (a,b) => {
    return a + b;
}
const calmulateMultiply: FunctionCalculate = (a,b) => {
    return a * b;
}