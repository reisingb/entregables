import { Personaje } from "./Personaje";
// declaro la clase luchador con los atributos abtractos de atacar y defender
export class Luchador extends Personaje{
      
    getPersonaje(): string {
        return this.nombre;
    }
        
    atacar(): void {
        console.log(`${this.nombre} lanza un golpe poderoso!`);
    }
    
    defender(): void {
        console.log(`${this.nombre} se prepara para bloquear el ataque!`);
    }
}