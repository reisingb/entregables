import { Habilidades } from "./habilidades";
import { Personaje } from "./Personaje";

// declaro la clase mago con los atributos abtractos de atacar y defender
export class Mago extends Personaje{
    

    getPersonaje(): string {
        return this.nombre
    }

    atacar(): void {
        console.log(`${this.nombre} lanza un hechizo!`);
    }
    
    defender(): void {
        console.log(`${this.nombre} se protege con un escudo mágico!`);
    }
}
