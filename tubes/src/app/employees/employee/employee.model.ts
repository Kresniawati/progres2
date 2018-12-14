import {Ingredient} from '../shared/ingredient.model';
export class Employee {
    $key : string;
    name : string;
    position : string;
    office : string;
    salary : number;
    ingredient:Ingredient[];

    constructor(name:string,position:string,office:string,salary:number, ingredient:Ingredient[]) {
        this.name=name;
        this.position=position;
        this.office=office;
        this.salary=salary;
        this.ingredient=ingredient;
    }
}
