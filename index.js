/*Importación de clases*/

import { Cliente } from './Cliente.js';
import { Director } from './Empleados/Director.js';
import { Empleado } from './Empleados/Empleados.js';
import { Gerente } from './Empleados/Gerente.js';
import {SistemaAutenticacion} from './SistemaAutenticacion.js';

const cliente = new Cliente("Joe Dean", "12345678", "12345");
const empleado = new Empleado("Joe Dean", "12345678", 6000);
const gerente = new Gerente("Jane Dean", "87654321", 8000);
const director = new Director("John Dean", "1357924", 10000);
cliente.asignarClave('1111');
console.log(SistemaAutenticacion.login(cliente, '1111'))
empleado.asignarClave("1234");
console.log(empleado.verBono());
console.log(gerente.verBono());
console.log(director.verBono());

console.log(SistemaAutenticacion.login(empleado, "1234"));

