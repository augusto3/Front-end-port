import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { funcionPortfolio } from '../../function';
import { FormBuilder,FormControl,Validators,FormGroup } from '@angular/forms';

export interface Habilidades{
  id:number;
  lenguaje:string;
  porcentaje:number;
  persona_id:number;
}
@Component({
  selector: 'app-page-four',
  templateUrl: './page-four.component.html',
  styleUrls: ['./page-four.component.css']
})
export class PageFourComponent implements OnInit{
  opciones= new funcionPortfolio;
  habilidades!:Habilidades[];
  formCarga!:FormGroup;
  titulo:string="Mis Habilidades";
  constructor(private datos:PortfolioService, private formBuilder:FormBuilder){
    this.buildForms();
  }

  ngOnInit():void {
    this.datos.Habilidades().subscribe(Habilidad=>{
      this.habilidades=Habilidad;
    })
  }
  buildForms(){
    this.formCarga =this.formBuilder.group({
      lenguaje:[],
      porcentaje:[],
    })
  }
  submitEditC(indice:number){
    let form =this.formCarga.value;
    if (form.lenguaje!=null){
      this.habilidades[indice].lenguaje=form.lenguaje;
    }
    if (form.porcentaje!=null){
      this.habilidades[indice].porcentaje=form.porcentaje;
    }
//    this.datos.setMisHabilidades(this.habilidades[indice]);
  }
  submitNewC(){
    let form =this.formCarga.value;
//    this.datos.newMisHabilidades(form);
  }
  dataStyle(indice:number):string{
    return '--wth: '+ this.habilidades[indice].porcentaje + '%'
  }
}
