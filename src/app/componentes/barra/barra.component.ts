import { Component, OnInit } from '@angular/core';

export interface Redes{
  id:number;
  instagram:string;
  facebook:string;
  linkedin:string;
  persona_id:number;
}

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit{
  redes!:Redes;
  instagram!:string;
  facebook!:string;
  linkedin!:string;
  constructor(){}
  ngOnInit():void {
    let datos:Redes= JSON.parse(localStorage.getItem('redes') as string);
    if(datos!=undefined){
        this.instagram=this.redes.instagram;
        this.facebook=this.redes.facebook;
        this.linkedin=this.redes.linkedin;  
    }
  }
}