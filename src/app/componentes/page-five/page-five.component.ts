import { Component, OnInit} from '@angular/core';
import { funcion } from '../../servicios/function';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Proyectos } from 'src/app/model/Proyectos';
import { FirebaseRDService } from 'src/app/servicios/firebase.rd.service';

@Component({
  selector: 'app-page-five',
  templateUrl: './page-five.component.html',
  styleUrls: ['./page-five.component.css']
})
export class PageFiveComponent implements OnInit{
  opciones= new funcion;
  public proyectos!:Proyectos[];
  public titulo:string="Proyectos";
  public id:number=0;
  formCarga!:FormGroup;
  constructor( private formBuilder:FormBuilder,private fire:FirebaseRDService){
    this.buildForms();
  }
  ngOnInit(){
    this.fire.getDatos('proyectos')
    .then((snapshot) => {
      this.proyectos=snapshot.val()
    })
    .catch((error) => {
      console.error(error.code+'|'+error.message);
    });
  }

  buildForms(){
    this.formCarga =this.formBuilder.group({
      nombreProyecto:[],
      urlProyecto:[],
      urlFoto:[],
      urlPagina:[],
      descripcion:[],
    })
  }
  mostrar(indice:number){
    this.id=indice;
    this.opciones.botonOpciones();
  }
  edit(indice:number){
    this.id=indice;
    this.opciones.botonEdit();
  }
  submitEdit(indice:number){
    var form =this.formCarga.value;
    if (form.nombreProyectos!=null){
      this.proyectos[indice].nombreProyecto=form.nombreProyecto;
    }
    if (form.urlProyecto!=null){
      this.proyectos[indice].urlProyectos=form.urlProyecto;
    }
    if (form.urlFoto!=null){
      this.proyectos[indice].urlFoto=form.urlFoto;
    }
    if (form.urlPagina!=null){
      this.proyectos[indice].urlPagina=form.urlPagina;
    }
    if (form.descripcion!=null){
      this.proyectos[indice].descripcion=form.descripcion;
    }
    this.fire.setDatos('proyectos',this.proyectos)
  }
  submitNew(){
    this.proyectos.push(this.formCarga.value);
    this.fire.setDatos('proyectos',this.proyectos);
  }
  eliminar(indice:number){
    this.proyectos.splice(indice,1);
    this.fire.setDatos('proyectos',this.proyectos);
  }  
}