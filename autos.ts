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
  class SoporteAuto extends Auto{
    protected service:number;
    protected clientes:string[];

   constructor(marca:string,modelo:string,anio:number,anioFabricacion:number,color:string,service:number,clientes?:string[]){        
    super(marca,modelo,anio,anioFabricacion,color)
    this.service=service;
    this.clientes=[];
  }
  getService():number{
  return this.service
  }
  setSumarService():void{
  this.service += 1;
            
  }
  setRestarService(): void {
    if (this.service > 0) {
        this.service -= 1;
    } else {
        console.log("El número de servicios no puede ser menor que 0.");
    }
}
  getClientes():string[]{
  return this.clientes;
 }
 setAgregarClientes(nuevoCliente:string):void{
  if(nuevoCliente){
  this.clientes.push(nuevoCliente);
  }else{
  console.log(`los clientes son ${this.clientes}`);
  }
 }
  setSacarCliente(eliminarCliente:string):void{
  const indice = this.clientes.indexOf(eliminarCliente);
  if (indice !== -1) {
  this.clientes.splice(indice, 1); // Elimina el cliente si se encuentra en el array
  console.log(`Cliente ${eliminarCliente} eliminado.`);;
  } else {
   console.log(`cliente ${this.clientes} no encontrado.`);
  }
 }
   
}      
let SoporteAutos = new SoporteAuto("toyota", "etios", 2021, 2019, "Rojo", 5);
SoporteAutos.setAgregarClientes("franco");
SoporteAutos.setAgregarClientes("enrique");
console.log(SoporteAutos.getClientes());
SoporteAutos.setSacarCliente("franco");
console.log(SoporteAutos.getClientes());


