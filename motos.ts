export * as fs from 'fs';// exporto a un  txt 
 export class Moto{//declaro la clase del objeto pasandole los parametros que quiero que tenga ese objeto 
    private marca:string;
    private modelo: string;
    private anio:number;
    private anioFabricacion:number;
    private color:string;
    private listaMotos:[];

    constructor(marca:string,modelo:string,anio:number,anioFabricacion:number,color:string) { // creo un constructor del objeto 
        this.marca=marca;
        this.modelo=modelo;
        this.anio=anio;
        this.anioFabricacion;
        this.color=color;
    }
    getMotos():string{
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.anio}, Año de Fabricación: ${this.anioFabricacion}, Color: ${this.color}`;
      } 
      // con el seter modifico parametros mencionados en el constructor para modificar un valor  
    setModificarMotos(nuevaMarca?:string,nuevoModelo?:string,nuevoAnio?:number,nuevoAnioFabricacion?:number,nuevoColor?:string, ):void{
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

        obtenermoto(): Moto[]{
            return this.listaMotos;
           }
      
           getMarca ():string {
            return this.marca;
      
           }
}      
class SoporteMotos extends Moto{
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


let soporteMotos = new SoporteMotos("Honda", "CBR", 2021, 2019, "Rojo", 5);
soporteMotos.setAgregarClientes("Carlos");
soporteMotos.setAgregarClientes("Ana");
console.log(soporteMotos.getClientes());
soporteMotos.setSacarCliente("Carlos");
console.log(soporteMotos.getClientes());