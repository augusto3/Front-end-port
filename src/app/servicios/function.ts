import { BehaviorSubject } from "rxjs";

export class funcion{
  edit: boolean=false;
  add: boolean=false;
  mostrar: boolean=false;
  admin:boolean=false;
  constructor(){
    this.admin= this.getAdmin();
  }
  getAdmin(){
    if(sessionStorage.getItem('UID')){
      return true;
    }else{
      return false;
    }
  }
  setDatos(nombre:string,datos:any){
    localStorage.setItem(nombre,JSON.stringify(datos))
  }
  getDatos(nombre:string):any{
    return JSON.parse(localStorage.getItem(nombre)as string);
  }
  getmostrar():boolean{
    return this.mostrar;
  }
  getEdit():boolean{
    return this.edit;
  }
  getAdd():boolean{
    return this.add; 
  }
  botonOpciones():void{
    this.mostrar=!this.mostrar;
  }
  botonEdit():void{
    this.edit=!this.edit;
  }
  botonAdd():void{
    this.add=!this.add; 
  }
}