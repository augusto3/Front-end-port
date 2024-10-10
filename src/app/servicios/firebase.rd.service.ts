import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { getDatabase, set,ref,get,child, update, remove, push, Database } from "firebase/database";
import { FirebaseAuth } from './firebaseAuth.service';

const app = initializeApp(environment.firebase);
const dataBase = getDatabase(app);
@Injectable({
  providedIn: 'root'
})
export class FirebaseRDService {
  constructor() {}
  setDatos(direccion:string,datos:any){
    set(ref(getDatabase(), direccion),datos)
    .then(mensaje=>console.log(mensaje))
    .catch(error=>console.error(error));
  }
  getDatos(direccion:string,guardar:string){
    get(child(ref(getDatabase()), direccion))
    .then((snapshot) => {
      if (snapshot.exists()) {
        localStorage.setItem(guardar,JSON.stringify(snapshot.val()));
      } else {
        console.log("No data available");}})
    .catch((error) => {
      console.error(error.code+'|'+error.message);
    });
  }
}