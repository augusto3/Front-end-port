import { Component} from '@angular/core';
import { funcion } from '../../servicios/function';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Habilidades } from 'src/app/model/Habilidades';
import { FirebaseRDService } from 'src/app/servicios/firebase.rd.service';
@Component({
  selector: 'app-page-four',
  templateUrl: './page-four.component.html',
  styleUrls: ['./page-four.component.css']
})
export class PageFourComponent{
  opciones= new funcion;
  public habilidades!:Habilidades[];
  formCarga!:FormGroup;
  public titulo:string="Mis Habilidades";
  public id:number=0;
  constructor(private formBuilder:FormBuilder,private fire:FirebaseRDService){
    this.buildForms();
    this.fire.getDatos('misHabilidades','habilidades');
    this.habilidades=this.opciones.getDatos('habilidades');
  }
  buildForms(){
    this.formCarga =this.formBuilder.group({
      lenguaje:[],
      porcentaje:[],
    })
  }
  mostrar(indice:number){
    this.id=indice
    this.opciones.botonOpciones()
  }
  edit(indice:number){
    this.id=indice;
    this.opciones.botonEdit();
  }
  submitEdit(indice:number){
    var form =this.formCarga.value;
    if (form.lenguaje!=null){
      this.habilidades[indice].lenguaje=form.lenguaje;
    }
    if (form.porcentaje!=null){
      this.habilidades[indice].porcentaje=form.porcentaje;
    }
    this.fire.setDatos('misHabilidades',this.habilidades);
  }
  submitNew(){
    this.habilidades.push(this.formCarga.value);
    this.fire.setDatos('misHabilidades',this.habilidades);
  }
  eliminar(indice:number){
    this.habilidades.splice(indice,1);
    this.fire.setDatos('misHabilidades',this.habilidades);
  }  
  dataStyle(indice:number):string{
    return '--wth: '+ this.habilidades[indice].porcentaje + '%'
  }
}