import * as fs from 'fs';
export class Auto{
    private marca:string;
    private modelo: string;
    private anio:number;
    private anioFabricacion:number;
    private color:string;
    private listaAutos:Auto[];

    constructor (marca:string,modelo:string,anio:number,anioFabricacion:number,color:string){
        this.marca = marca;
        this.modelo =modelo;
        this.anio = anio;
        this.anioFabricacion = anioFabricacion;
        this.color = color;
        this.listaAutos=[];   
    }
   // metodo para obtener los datos del auto en forma de sting
    getAuto():string{
      return `Marca: ${this.marca}, Modelo: ${this.modelo}, Anio: ${this.anio}, Anio de Fabricación: ${this.anioFabricacion}, Color: ${this.color}`;
    } 
    //metodo para modificar los datos del auto
    setModificarAutos(nuevaMarca?:string,nuevoModelo?:string,nuevoAnio?:number,nuevoAnioFabricacion?:number,nuevoColor?:string, ):void{
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
    //metodo para obtener la lista de autos 
    obtenerAutos(): Auto[]{
      return this.listaAutos;
     }
     //metodos para agregar un auto a la lista
     agregarAutos(autos: Auto): void {
      this.listaAutos.push(autos);
  }
    //metodo para obtener la marca del auto
     getMarca ():string {
      return this.marca;

     }
   
  }          


