import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { funcionPortfolio } from '../../function';
import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';

export interface Proyectos {
  id:number;
  nameProyectos:string;
  urlProyectos:string;
  descripcion:string;
  personajes_id:number;
}

@Component({
  selector: 'app-page-five',
  templateUrl: './page-five.component.html',
  styleUrls: ['./page-five.component.css']
})
export class PageFiveComponent implements OnInit{
  opciones= new funcionPortfolio;
  proyectos!:Proyectos[];
  titulo:string="Proyectos";
  formCarga!:FormGroup;
  constructor(private datos:PortfolioService, private formBuilder:FormBuilder){
    this.buildForms();
  }

  ngOnInit():void {
    this.datos.Proyectos().subscribe(Proyectos=>{
      this.proyectos=Proyectos;
    })  
  }

  buildForms(){
    this.formCarga =this.formBuilder.group({
      nameProyectos:[],
      urlProyectos:[],
      descripcion:[]
    })
  }
  submitEdit(indice:number){
    let form =this.formCarga.value;
    if (form.nameProyectos!=null){
      this.proyectos[indice].nameProyectos=form.nameProyectos;
    }
    if (form.urlProyectos!=null){
      this.proyectos[indice].urlProyectos=form.urlProyectos;
    }
    if (form.descripcion!=null){
      this.proyectos[indice].descripcion=form.descripcion;
    }
//    this.datos.setProyectos(this.proyectos[indice]);
  }
  submitNew(){
    let form =this.formCarga.value;
//    this.datosPortafolio.newProyectos(form);
  }
}