import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { funcionPortfolio } from '../../function';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';

export interface Universidad{
  id:number;
  nameUniversidad:string;
  nameCurso:string;
  nameCarrera:string;
  fechaInicio:Date;
  fechaFin:Date;
  historialAcademico:string;
  educacion_id:number;
  educacion_persona_id:number
}

export interface Cursos{
  id:number;
  nameCurso:string;
  urlCurso:string;
  urlCertificado:string;
  educacion_id:number;
  educacion_persona_id:number;
}

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.css']
})
export class PageThreeComponent implements OnInit{
  opciones=new funcionPortfolio;
  public titulo:String="Educacion";

  public universidad!:Universidad;
  public nameUniversidad!:string;
  public nameCurso!:string;
  public fechaInicio!:Date;
  public fechaFin!:Date;
  public historialAcademico!:string;

  public cursos!:Cursos[];
  public formUniversidad!:FormGroup;
  public formCurso!:FormGroup;

  constructor(private datos:PortfolioService, private formBuilder :FormBuilder){
    this.buildForms();
  }

  ngOnInit():void {
    this.datos.Universidad().subscribe(Universidad=>{
      this.universidad=Universidad[0];
      this.nameUniversidad=this.universidad.nameUniversidad;
      this.universidad.nameCurso="licenciatura en sistemas de informacion";
      this.nameCurso=this.universidad.nameCurso;
      this.fechaInicio=this.universidad.fechaInicio;
      this.fechaFin=this.universidad.fechaFin;
      this.historialAcademico=this.universidad.historialAcademico;
    })
    this.datos.Cursos().subscribe(Cursos=>{
      this.cursos=Cursos;
    })
  }

  buildForms(){
    this.formUniversidad =this.formBuilder.group({
      nameUniversidad:[],
      nameCurso:[],
      fechaInicio:[],
      fechaFin:[],
      historialAcademico:[],    
    })
    this.formCurso=this.formBuilder.group({
      nameCurso:[],
      urlCurso:[],
      urlCertificado:[],
    })
  }

  submitEditU(){
    let form =this.formUniversidad.value;
    if (form.nameUniversidad!=null){
      this.universidad.nameUniversidad=form.nameUniversidad;
    }
    if (form.nameCursos!=null){
      this.universidad.nameCarrera=form.nameCarrera;
    }
    if (form.fechaInicio!=null){
      this.universidad.fechaInicio=form.fechaInicio;
    }
    if (form.fechaFin!=null){
      this.universidad.fechaFin=form.fechaFin;
    }
    if (form.historialAcademico!=null){
      this.universidad.historialAcademico=form.historialAcademico;
    }
//    this.datos.setUniversidad(this.universidad);
  }
  submitNewU(){
    let form =this.formUniversidad.value;
//    this.datos.newUniversidad(form);
  }

  submitEditC(indice:number){
    let form =this.formCurso.value;
    if (form.nameCurso!=null){
      this.cursos[indice].nameCurso=form.nameCurso;
    }
    if (form.urlCurso!=null){
      this.cursos[indice].urlCurso=form.urlCurso;
    }
    if (form.urlCertificado!=null){
      this.cursos[indice].urlCertificado=form.urlCertificado;
    }
//    this.datos.setCursos(this.cursos);
  }
  submitNewC(){
    let form =this.formCurso.value;
//    this.datos.newCursos(form);
  }
}