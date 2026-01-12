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

type ApiStatus = "idle" | "loading" | "success" | "error";
function logStatus(status: ApiStatus) {
    if(status === "loading") {
        console.log("API is loading...");
    }else if(status === "success") {
        console.log("API call was successful!");
    }else if(status === "error") {
        console.log("API call failed.");
    }
    console.log("API Status:", status);
}