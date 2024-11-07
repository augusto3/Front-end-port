import { Component, OnInit} from '@angular/core';
import { funcion } from '../../servicios/function';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Habilidades } from 'src/app/model/Habilidades';
import { FirebaseRDService } from 'src/app/servicios/firebase.rd.service';
@Component({
  selector: 'app-page-four',
  templateUrl: './page-four.component.html',
  styleUrls: ['./page-four.component.css']
})
export class PageFourComponent implements OnInit{
  opciones= new funcion;
  public habilidades!:Habilidades[];
  formCarga!:FormGroup;
  public titulo:string="Mis Habilidades";
  public id:number=0;
  constructor(private formBuilder:FormBuilder,private fire:FirebaseRDService){
    this.buildForms();
  }
  ngOnInit(){
    this.fire.getDatos('misHabilidades')
    .then((snapshot) => {
      this.habilidades=snapshot.val()
    })
    .catch((error) => {
      console.error(error.code+'|'+error.message);
    });
  }
  buildForms(){
    this.formCarga =this.formBuilder.group({
      lenguaje:[],
      icono:[],
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
    if (form.icono!=null){
      this.habilidades[indice].icono=form.icono;
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
}