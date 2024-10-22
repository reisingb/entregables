
export class Habilidades{ // declaro la  clase habilidades siendo una composicion de personaje para que todos los personajes puedan tener las mismas habilidades
   protected dañoBasico:number;
    protected habilidad1:number;
    protected habilidad2:number;
   protected habilidad3:number;
    protected definitiva:number;
    protected defender:boolean;
   constructor(dañoBasico:number,habilidad1:number,habilidad2:number,habilidad3:number,definitiva:number,defender:boolean){
       this.dañoBasico= dañoBasico;
       this.habilidad1= habilidad1;
       this.habilidad2= habilidad2;
       this.habilidad3= habilidad3;
       this.definitiva= definitiva;
       this.defender=   defender;
       
       if (defender) {
           console.log(`Levantar escudo: ${defender}`);
       } else {
           console.log("Baja el escudo");
       }      

}
   // los getter y setter de cada habilidad 
   getDañoBasico():number{
       return this.dañoBasico;
   }
   getHabilidad1():number{
       return this.habilidad1;
   }
   getHabilidad2():number{
       return this.habilidad2;
   }
   getHabilidad3():number{
       return this.habilidad3;
   }
   getDefinitiva():number{
       return this.definitiva;
   }
   getDefensa():boolean{
       return this.defender
   }
   setDañoBasico(dañoBasico:number):void{
    this.dañoBasico=dañoBasico;
   }
   setHabilidad1(habilidad1:number):void{
    this.habilidad1=habilidad1;
   }
   setHabilidad2(habilidad2:number):void{
    this.habilidad2=habilidad2;
}

setHabilidad3(habilidad3:number):void{
    this.habilidad3=habilidad3;
}
setDefinitiva(definitiva:number):void{
    this.definitiva=definitiva;
}
setDefender(defender:boolean):void{
    this.defender=defender;
}
}