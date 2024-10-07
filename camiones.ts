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
   class SoporteCamion extends Camion{
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
let SoporteCamiones = new SoporteCamion("mercedez", "benz", 2000, 2005, "negro", 5);
SoporteCamiones.setAgregarClientes("gustavo");
SoporteCamiones.setAgregarClientes("marcos");
console.log(SoporteCamiones.getClientes());
SoporteCamiones.setSacarCliente("gustavo");
console.log(SoporteCamiones.getClientes());
  

