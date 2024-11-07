import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { getDatabase, set,ref,get,child, update, remove, push, Database } from "firebase/database";
const app = initializeApp(environment.firebase);
const dataBase = getDatabase(app);
@Injectable({
  providedIn: 'root'
})
export class FirebaseRDService {
  setDatos(direccion:string,datos:any){
    return set(ref(getDatabase(), direccion),datos)
    .then(mensaje=>console.log(mensaje))
    .catch(error=>console.error(error));
  }
  getDatos(direccion:string){
    return get(child(ref(getDatabase()), direccion));
  }
}