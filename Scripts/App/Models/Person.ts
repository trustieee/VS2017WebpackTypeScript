import Gender from "./Gender";

export default class Person {
    private _name: string;
    private _age: number;
    private _gender: Gender;

    constructor(name: string, age: number, gender: Gender) {
        this._name = name;
        this._age = age;
        this._gender = gender;
    }

    public sayHello(): void {
        console.log(`${this._name} says hello! ${this.getPronoun()} is ${this._age} years old, and ${this.getDeterminer(false)} gender is ${Gender[this._gender]}.`);
    }

    private getPronoun(titleCase: boolean = true): string {
        const pronoun: string = this._gender === Gender.Male ? "He" : "She";
        return titleCase ? pronoun : pronoun.toLowerCase();
    }

    private getDeterminer(titleCase: boolean = true): string {
        const determiner: string = this._gender === Gender.Male ? "His" : "Her";
        return titleCase ? determiner : determiner.toLowerCase();
    }
}