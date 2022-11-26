import { Empleado } from "./Empleados.js";

export class Gerente extends Empleado{
    constructor(nombre, dni, salario){
        super(nombre, dni, salario);
    }
    verBono(){
        const bono = 5;
        return super._verBono(bono);
    }
}