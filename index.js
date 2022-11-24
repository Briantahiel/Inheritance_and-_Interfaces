/*Importación de clases*/
import {Cliente} from './Cliente.js'
import {CuentaCorriente} from './CuentaCorriente.js';
import {CuentaAhorro} from './CuentaAhorro.js'

const cliente = new Cliente('Brian','13804050','123224');
const cliente2 = new Cliente('María','16979808','8989');

const cuentaDeBrian = new CuentaCorriente(cliente, '1', '001');
const cuentaDeMaria = new CuentaCorriente(cliente2,'2','002');

