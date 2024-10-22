import { Personaje } from "./Personaje"; // aca llamo los import de cada clase para poder instanciarlos en el main 
import { Habilidades } from "./habilidades";
import { Arquero } from "./arquero";
import { Luchador } from "./luchador";
import { Mago } from "./mago";
import { Asesino } from "./asesino";

// instancio las habilidades con el daño de cada personaje 
let habiliadadTirador =new Habilidades(5,15,5,10,30,true );
let habiliadadMago =new Habilidades(3,17,3,15,25,true );
let habiliadadluchador =new Habilidades(7,25,5,25,170,true );
let habiliadadAsesino =new Habilidades(8,25,2,4,40,true);
// creo los perosnajes con con el tipo, clase, y habilidades que cada uno va tener
let personaje1:Personaje = new Arquero("mgnus","tirador","iferior",habiliadadTirador);
let personaje2:Personaje = new Mago("beek","hechicero","central",habiliadadMago);
let personaje3:Personaje = new Luchador("mgnus","tirador","iferior",habiliadadluchador);
let personaje4:Personaje = new Asesino("mgnus","tirador","iferior",habiliadadAsesino);

// los muestro por consola a los perosnajes 
console.log(personaje2)
console.log(personaje3)
console.log(personaje4)


console.log(personaje1.getNombre);
personaje1.atacar();
personaje1.defender();
console.log(personaje1.atacar);
console.log(personaje1.defender);