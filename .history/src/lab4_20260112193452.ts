type student = {
    id:number
    name:string
    score:number
}
const student1: student = {
    id:1,
    name:"Đỗ Đức Huy",
    score:95
}
console.log("Sinh viên:", student1);

interface User {
    id:number
    email: Required<string>
    phone?: number
}
const user1: User = {
    id:1,
    email:"doduchuy1952000@gmail.com",
}
console.log("Người dùng:", user1);

type FunctionCalculate = (a:number, b:number) => number;

const calculateSum: FunctionCalculate = (a,b) => {
    return a + b;
}

console.log("Sum:", calculateSum(5,10));


const calmulateMultiply: FunctionCalculate = (a,b) => {
    return a * b;
}
console.log("Multiply:", calmulateMultiply(5,10));


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
logStatus("loading");
logStatus("success");
logStatus("error");