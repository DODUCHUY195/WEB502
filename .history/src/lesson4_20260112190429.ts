class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Xin chào, tôi là ${this.name}`);
  }
}

const p = new Person("An", 20);
p.greet();

interface Animal {
  species: string;
  height: number;
  isVoice: boolean;
  isDie?: boolean;
}

const dog: Animal = {
  species: "Dog",
  height: 60,
  isVoice: true,
};

interface Calculator {
  (a:number, b:number): number;
}

const sum :  Casculator = (a: number, b: number): number => {
  return a + b;
}

sum(5, 10);