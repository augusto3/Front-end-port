import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

export interface Redes{
  id:number;
  instagram:string;
  facebook:string;
  linkedin:string;
  persona_id:number;
}

@Component({
  selector: 'app-menu-head',
  templateUrl: './menu-head.component.html',
  styleUrls: ['./menu-head.component.css']
})
export class MenuHeadComponent implements OnInit{
  redes!:Redes;
  instagram!:string;
  facebook!:string;
  linkedin!:string;

  constructor(private datosPortafolio:PortfolioService){}
  ngOnInit():void {
    this.datosPortafolio.Redes().subscribe(redes=>{
      this.redes=redes[0];
      this.instagram=this.redes.instagram;
      this.facebook=this.redes.facebook;
      this.linkedin=this.redes.linkedin;  
    });
  }
}