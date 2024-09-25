export * as fs from 'fs';
export class Camion{
    private marca:string;
    private modelo: string;
    private anio:number;
    private anioFabricacion:number;
    private color:string;
    private listaCamiones:Camion[];

    constructor(marca:string,modelo:string,anio:number,anioFabricacion:number,color:string,){
        this.marca=marca;
        this.modelo=modelo;
        this.anio=anio;
        this.anioFabricacion=anioFabricacion;
        this.color=color;
        this.listaCamiones=[];

    }
    getCamion():string{
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Anio: ${this.anio}, Anio de Fabricación: ${this.anioFabricacion}, Color: ${this.color}`;
      }  
      setModificarCamiones(nuevaMarca?:string,nuevoModelo?:string,nuevoAnio?:number,nuevoAnioFabricacion?:number,nuevoColor?:string, ):void{
        if (nuevaMarca){
         this.marca=nuevaMarca;
        }
        if (nuevoModelo){
         this.modelo=nuevoModelo;
        }
        if(nuevoAnio){
         this.anio= nuevoAnio;
        }
        if(nuevoAnioFabricacion){
         this.anioFabricacion=nuevoAnioFabricacion;
        }     
        if(nuevoColor){
         this.color=nuevoColor;
        }
} 
obtenerCamiones(): Camion[]{
    return this.listaCamiones;
   }
   agregarCamion(camion: Camion): void {
    this.listaCamiones.push(camion);
}

   getMarca ():string {
    return this.marca;

   }
}
  

