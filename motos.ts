export * as fs from 'fs';// exporto a un  txt 
 export class Moto{//declaro la clase del objeto pasandole los parametros que quiero que tenga ese objeto 
    private marca:string;
    private modelo: string;
    private año:number;
    private añoFabricacion:number;
    private color:string;
    private listaMotos:Moto[];

    constructor(marca:string,modelo:string,año:number,añoFabricacion:number,color:string) { // creo un constructor del objeto 
        this.marca=marca;
        this.modelo=modelo;
        this.año=año;
        this.añoFabricacion;
        this.color=color;
    }
    getMotos():string{
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}, Año de Fabricación: ${this.añoFabricacion}, Color: ${this.color}`;
      } 
      // con el seter modifico parametros mencionados en el constructor para modificar un valor  
    setModificarMotos(nuevaMarca?:string,nuevoModelo?:string,nuevoAño?:number,nuevoAñoFabricacion?:number,nuevoColor?:string, ):void{
       if (nuevaMarca){
        this.marca=nuevaMarca;
       }
       if (nuevoModelo){
        this.modelo=nuevoModelo;
       }
       if(nuevoAño){
        this.año= nuevoAño;
       }
       if(nuevoAñoFabricacion){
        this.añoFabricacion=nuevoAñoFabricacion;
       }     
       if(nuevoColor){
        this.color=nuevoColor;
       }
        }

        obtenermoto(): Moto[]{
            return this.listaMotos;
           }
      
           getMarca ():string {
            return this.marca;
      
           }
    }      

