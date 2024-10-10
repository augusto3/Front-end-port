import { Component, OnInit } from '@angular/core';
import { funcion } from '../../servicios/function';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Universidad } from 'src/app/model/Universidad';
import { Cursos } from 'src/app/model/Cursos';
import { FirebaseRDService } from 'src/app/servicios/firebase.rd.service';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.css']
})
export class PageThreeComponent implements OnInit{
  opciones=new funcion;
  public titulo:String="Educacion";
  public universidad!:Universidad;
  public nombreUniversidad!:string;
  public nombreCarrera!:string;
  public fechaInicio!:Date;
  public fechaFin!:Date;
  public historialAcademico!:string;
  public cursos!:Cursos[];
  public id:string='';
  public formUniversidad!:FormGroup;
  public formCurso!:FormGroup;
  constructor(private formBuilder :FormBuilder,private fire:FirebaseRDService){
    this.buildForms();
    this.fire.getDatos('universidad','universidad');
    this.universidad=this.opciones.getDatos('universidad');
    this.fire.getDatos('curso','curso');
    this.cursos=this.opciones.getDatos('curso');
  }
  ngOnInit():void {
    this.inicializar();
  }
  inicializar(){
    if(this.universidad!=null){
      this.nombreUniversidad=this.universidad.nombreUniversidad;
      this.nombreCarrera=this.universidad.nombreCarrera;
      this.fechaInicio=this.universidad.fechaInicio;
      this.fechaFin=this.universidad.fechaFin;
      this.historialAcademico=this.universidad.historialAcademico;
    }
  }
  buildForms(){
    this.formUniversidad =this.formBuilder.group({
      nombreUniversidad:[],
      nombreCarrera:[],
      fechaInicio:[],
      fechaFin:[],
      historialAcademico:[],    
    })
    this.formCurso=this.formBuilder.group({
      nombreCurso:[],
      urlContenido:[],
      urlCertificado:[],
    })
  }
  mostrar(indice:string){
    this.id=indice
    this.opciones.botonOpciones()
  }
  edit(indice:string){
    this.id=indice
    this.opciones.botonEdit()
  }
  botonEdit(name:string){
    this.id=name;
    this.opciones.botonEdit();
  }
  submitEditU(){
    var form =this.formUniversidad.value;
    if (form.nombreUniversidad!=null){
      this.universidad.nombreUniversidad=form.nombreUniversidad;}
    if (form.nombreCarrera!=null){
      this.universidad.nombreCarrera=form.nombreCarrera;}
    if (form.fechaInicio!=null){
      this.universidad.fechaInicio=form.fechaInicio;}
    if (form.fechaFin!=null){
      this.universidad.fechaFin=form.fechaFin;}
    if (form.historialAcademico!=null){
      this.universidad.historialAcademico=form.historialAcademico;}
    this.fire.setDatos('universidad',this.universidad);
  }
  submitEditC(indice:number){
    var form =this.formCurso.value;
    if (form.nombreCurso!=null){
      this.cursos[indice].nombreCurso=form.nombreCurso;}
    if (form.urlCurso!=null){
      this.cursos[indice].urlContenido=form.urlContenido;}
    if (form.urlCertificado!=null){
      this.cursos[indice].urlCertificado=form.urlCertificado;}
    this.fire.setDatos('cursos',this.cursos);
  }
  submitNewC(){
    this.cursos.push(this.formCurso.value);
    this.fire.setDatos('curso',this.cursos);
  }
  eliminar(indice:number){
    this.cursos.splice(indice,1);
    this.fire.setDatos('misHabilidades',this.cursos);
  }  

}