import { Component} from '@angular/core';
import { funcion } from '../../servicios/function';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Proyectos } from 'src/app/model/Proyectos';
import { FirebaseRDService } from 'src/app/servicios/firebase.rd.service';

@Component({
  selector: 'app-page-five',
  templateUrl: './page-five.component.html',
  styleUrls: ['./page-five.component.css']
})
export class PageFiveComponent{
  opciones= new funcion;
  public proyectos!:Proyectos[];
  public titulo:string="Proyectos";
  public id:number=0;
  formCarga!:FormGroup;
  constructor( private formBuilder:FormBuilder,private fire:FirebaseRDService){
    this.buildForms();
    this.fire.getDatos('proyectos','proyectos');
    this.proyectos=this.opciones.getDatos('proyectos');
  }
  buildForms(){
    this.formCarga =this.formBuilder.group({
      nombreProyecto:[],
      urlProyecto:[],
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
    if (form.urlProyectos!=null){
      this.proyectos[indice].urlProyectos=form.urlProyectos;
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