import * as fs from 'fs';
import { Auto } from "./autos";
import { Camion} from "./camiones";
import { Moto } from "./motos";
import {Registro} from "./registro";

 //nombre del registro
const registro = new Registro ("Registro automotor de Olavarria");

//crear autos 
let auto1=new Auto("Ford","Kinetic",2024,2005,"Rojo");
let auto2=new Auto("Peugeot","Compact",2024,2005,"Negro");
let auto3=new Auto("Fiat","Uno",2024,2000,"Azul");
let auto4= new Auto ("ford","mustang",2024,2024,"negro");
//modificar autos 
auto1.setModificarAutos("lamborgini","gallardo",2024,2024,"negro");

//crear motos
let moto1= new Moto("kawasaki","Ninja",2024,2005,"Verde");
let moto2= new Moto("Honda","Ninja",2024,2005,"Verde");
let moto3= new Moto("kawasaki","Ninja",2024,2005,"Verde");
//modificar motos
moto1.setModificarMotos("Hoda","CBR600",2024,2022,"Rojo");

//crear camiones 
let camion1= new Camion("mercedes","benz",2024,1992,"Rojo");
let camion2= new Camion("volvo","S60",2024,2023,"Blanco");
let camion3= new Camion("Scania","R450",2024,2024,"Blanco");
//modificar camiones 
camion1.setModificarCamiones("mercedes","f14",2024,2024,"negro");

// crear vehiculos 
const auto5=new Auto("volkwagen","sirocco",2022,2020,"plata");
const camion4=new Camion("volvo","f150",2022,2020,"negro");
const moto4=new Moto("kwasaki","versys",2022,2020,"plata");

console.log(auto5);
console.log(camion4);
console.log(moto4);

//agregar a la flota 
registro.agregarAuto(auto5);
registro.agregarCamion(camion4);
registro.agregarMoto(moto4);

//dar de baja vehiulos 
registro.darDeBajaAuto("volkswagen");
registro.darDeBajaCamiones("volvo");
registro.darDeBajaMoto("honda");

const flota ={
    autos:[auto1,auto2,auto3,auto4,auto5],
    camiones: [camion1,camion2,camion3,camion4],
    motos: [moto1,moto2,moto3,moto4]
} 

// guardo en una variable la informacion que queremos guardar los archivos en txt 
const flotaData = JSON.stringify(flota, null, 2); 


fs.writeFileSync('flotaVehicular.txt', flotaData);
console.log(`Los datos de la flota han sido guardados en 'flotaVehicular.txt'.`);

try {
    // leer los datos del archivo
    const datosDeFlota = fs.readFileSync('flotaVehicular.txt', 'utf-8');
    // eliminar espacios en blanco
    const sinEspacio = datosDeFlota.trim();

    console.log(`${sinEspacio}`); // datos sin espacio

    const datosRecuperados = JSON.parse(sinEspacio);

    console.log("Datos recuperados desde el archivo:");
    console.log(datosRecuperados);  // Muestra todo el objeto

    // Mostrar la información de los vehículos recuperados
    datosRecuperados.autos.forEach((auto: any) => {
        console.log(`Auto - Marca: ${auto.marca}, Modelo: ${auto.modelo}, Año: ${auto.anio}, Año de Fabricación: ${auto.anioFabricacion}, Color: ${auto.color}`);
    });
    datosRecuperados.camiones.forEach((camion: any) => {
        console.log(`Camión - Marca: ${camion.marca}, Modelo: ${camion.modelo}, Año: ${camion.anio}, Año de Fabricación: ${camion.anioFabricacion}, Color: ${camion.color}`);
    });
    datosRecuperados.motos.forEach((moto: any) => {
        console.log(`Moto - Marca: ${moto.marca}, Modelo: ${moto.modelo}, Año: ${moto.anio}, Año de Fabricación: ${moto.anioFabricacion}, Color: ${moto.color}`);
    });

} catch (error) {
    if (error instanceof Error) {
        console.error("Error al leer o parsear el archivo:", error.message);
    } else {
        console.error("Error desconocido al leer o parsear el archivo");
    }
}