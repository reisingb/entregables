import { Personaje } from "./Personaje";

// declaro la clase asesino con los atributos abtractos de atacar y defender 
export class Asesino extends Personaje{


    getPersonaje(): string {
        return this.nombre;
    }
    atacar(): void {
        console.log(`${this.nombre} lanza una sombra mortal!`);
    }
    
    defender(): void {
        console.log(`${this.nombre} se esconde en las sombras!`);
    }
}