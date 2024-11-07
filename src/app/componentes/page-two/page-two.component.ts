import { Component, OnInit} from '@angular/core';
import { funcion} from '../../servicios/function';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Experiencia } from 'src/app/model/Experiencia';
import { FirebaseRDService } from 'src/app/servicios/firebase.rd.service';
@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent implements OnInit{
  public opciones=new funcion;
  public titulo:string="Experiencia";
  public experiencia!:Experiencia;
  public formCarga!:FormGroup;
  public nombreEmpresa:string="";
  public puestoTrabajo:string="";
  public fechaInicio:String="";
  public fechaFin:String="";
  public descripcion:string="";
  constructor(private formBuilder :FormBuilder,private fire:FirebaseRDService){
    this.buildForms();
  }
  ngOnInit(){
    this.fire.getDatos('experiencia')
    .then((snapshot) => {
      this.experiencia=snapshot.val()
      this.inicializar();
    })
    .catch((error) => {
      console.error(error.code+'|'+error.message);
    });
  }
  inicializar(){
    if(this.experiencia!=undefined){
      this.nombreEmpresa=this.experiencia.nombreEmpresa;
      this.puestoTrabajo=this.experiencia.puestoTrabajo;
      this.fechaInicio=this.experiencia.fechaInicio;
      this.fechaFin=this.experiencia.fechaFin;
      this.descripcion=this.experiencia.descripcion;
    }
  }
  buildForms(){
    this.formCarga =this.formBuilder.group({
      nombreEmpresa:[]="",
      puestoTrabajo:[]="",
      fechaInicio:[]="",
      fechaFin:[]="",
      descripcion:[]="",
    }
  )}
  mostrar(){
    this.opciones.botonOpciones();
  }
  edit(){
    this.opciones.botonEdit();
  }
  submitEdit(indice:number){
    let form:Experiencia =this.formCarga.value;
    console.log(form.nombreEmpresa);
    if (form.nombreEmpresa!=""){
      this.experiencia.nombreEmpresa=form.nombreEmpresa;
    }
    if (form.puestoTrabajo!=""){
      this.experiencia.puestoTrabajo=form.puestoTrabajo;
    }
    if (form.fechaInicio!=""){
      this.experiencia.fechaInicio=form.fechaInicio;
    }
    if (form.fechaFin!=""){
      this.experiencia.fechaFin=form.fechaFin;
    }
    if (form.descripcion!=""){
      this.experiencia.descripcion=form.descripcion;}
      console.log(this.experiencia);
    //      this.fire.setDatos('experiencia',this.experiencia);
  }
  eliminar(indice:number){}
  submitNew(){}

  /*  submitNew(){
    if (this.experiencia!=null){
      this.experiencia.push(this.formCarga.value);
      this.fire.setDatos('experiencia',this.experiencia);
    }else{
      this.fire.setDatos('experiencia',this.formCarga.value);
    }
  }
  eliminar(indice:number){
    this.experiencia.splice(indice,1);
    this.fire.setDatos('experiencia',this.experiencia);
  }*/
}