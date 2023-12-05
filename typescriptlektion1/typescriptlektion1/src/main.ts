import './style.css'

import { Person } from './Person.ts'


const p:Person = new Person
("Sebastian", 44, true);
p.name;

console.log(p)

const p2:Person = new Person
("Test", 33, true);


console.log(p2)

console.log(p.name)
console.log(p2.name)
console.log(p2.age)

class Todo {
  isDone:boolean;
  constructor(public text:string) {
  this.isDone = false;
  }
  }
  const myTodo:Todo = new Todo("practice typescript");
  console.log(myTodo.isDone) 

  const t:Todo = new Todo
  ("hej")

  console.log(t)

  function sum (a:number, b:number):number {
    const theResult: number = a + b;
    return theResult
  }
  console.log(sum)
  

  const result = sum(3,4);
  console.log(result)

 

  

  

  

 