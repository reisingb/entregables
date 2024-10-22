import { Habilidades } from "./habilidades"; // export la clase habilidades 
export abstract class Personaje{ //  declarar la calse personaje y que sea  abtract 
    protected nombre: string= "mago";
    protected nivel: number= 1;
    protected puntosDeVida:number= 100;
    protected clase: string;
    protected rol: string= "por defecto";
    protected habilidades:Habilidades;
   
    abstract atacar();  // delaro las instancias atacar y defender que van a heredar todos los personajes 
    abstract defender();

    constructor(nombre:string,clase:string,rol:string,habilidades:Habilidades){ // constructor de la clase personaje
        this.nombre= nombre;
        this.clase=clase;
        this.rol=rol;
        this.habilidades= habilidades;

    }  

    public getNombre(){ // get nombre que me retorna el nombre del personaje 
    return this.nombre;
    }
    public setClase(cambiarClase:string){ // set para cambiar el tipo de clase que deseo para cada persoanje
        this.clase=cambiarClase;
    }
    public setRol(cambiarRol:string){ // el rol que se le asigne al peronaje 
        this.rol= cambiarRol;
    }
     public setHabilidades(cambiarHabilidades:Habilidades){ // set para cambiar las habilidades y poner las que nos guste 
            this.habilidades=cambiarHabilidades;
        }
        

    }



    