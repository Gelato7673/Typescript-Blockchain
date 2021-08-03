interface Human  {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: 'Lacto',
  age: 22,
  gender: 'male'
}

const sayHi = (person: Human):string => {
  return`Hello, my name is ${person.name}. I'm ${person.age}years old. and I'm ${person.gender}!`;
}

console.log(sayHi(person));

export {};

//6강 들을 차례임