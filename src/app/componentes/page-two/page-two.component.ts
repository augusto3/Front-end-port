import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { funcionPortfolio } from '../../function';
import { FormGroup, FormBuilder, FormControl, Validator } from '@angular/forms';

export interface Experiencia{
  id:number;
  nombreEmpresa:string;
  puestoTrabajo:string;
  fechaInicio:Date;
  fechaFin:Date;
  descripcion:string;
  persona_id:number;
}
@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent implements OnInit{
  public opciones= new funcionPortfolio;
  public titulo:string="Experiencia";
  public experiencia!:Experiencia[];
  public formCarga!:FormGroup;
 
  constructor(private datosPortafolio:PortfolioService, private formBuilder :FormBuilder){
    this.buildForms();
  }
  ngOnInit():void{
    this.datosPortafolio.Experiencia().subscribe(Experiencia=>{
      this.experiencia=Experiencia;
    })
  }
  buildForms(){
    this.formCarga =this.formBuilder.group({
      nombreEmpresa:[],
      puestoTrabajo:[],
      fechaInicio:[],
      fechaFin:[],
      descripcion:[],
    })}

  submitEdit(indice:number){
    let form =this.formCarga.value;
    if (form.nombreEmpresa!=null){
      this.experiencia[indice].nombreEmpresa=form.nombreEmpresa;
    }
    if (form.puestoTrabajo!=null){
      this.experiencia[indice].puestoTrabajo=form.puestoTrabajo;
    }
    if (form.fechaInicio!=null){
      this.experiencia[indice].fechaInicio=form.fechaInicio;
    }
    if (form.fechaFin!=null){
      this.experiencia[indice].fechaFin=form.fechaFin;
    }
    if (form.descripcion!=null){
      this.experiencia[indice].descripcion=form.descripcion;
    }
//    this.datos.setExperiencia(this.experiencia);
  }
  submitNew(){
    let form =this.formCarga.value;
//    this.datosPortafolio.newExperiencia(form);
  }
}