import Person from "./Models/Person";
import Gender from "./Models/Gender";

let person: Person = new Person("@mario_catch", 32, Gender.Male);
person.sayHello();