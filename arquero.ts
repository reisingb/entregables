import { Personaje } from "./Personaje";
// declaro la clase arquero con los atributos abtractos de atacar y defender
export class Arquero extends Personaje{


    getPersonaje(): string {
        return this.nombre;
    }
    atacar(): void {
        console.log(`${this.nombre} lanza flechas rapidas!`);
    }
    
    defender(): void {
        console.log(`${this.nombre} obtiene camuflaje !`);
    }
}