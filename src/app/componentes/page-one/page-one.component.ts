import { Component} from '@angular/core';
import { funcion} from '../../servicios/function';
import { FormBuilder, FormGroup} from '@angular/forms';
import { FirebaseRDService } from 'src/app/servicios/firebase.rd.service';
import { SobreMi } from 'src/app/model/SobreMi';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})

export class PageOneComponent{
  public opciones= new funcion;
  public titulo:string="sobre mi";
  public sobremi!:SobreMi;
  public nombre!:string;
  public edad!:number;
  public descripcion!:string;
  public urlFoto!:string;
  formCarga!: FormGroup;
  constructor(private formBuilder: FormBuilder,private fire:FirebaseRDService ){
    this.buildForms();
    this.fire.getDatos('sobreMi','sobre');
    this.sobremi=this.opciones.getDatos('sobre');
    this.inicializar();
  }
  inicializar(){
    if (this.sobremi!=null){
      this.nombre=this.sobremi.nombre;
      this.descripcion=this.sobremi.descripcion;
      this.edad=this.sobremi.edad;
      this.urlFoto=this.sobremi.urlFoto;
    }
  }
  buildForms(){
    this.formCarga =this.formBuilder.group({
      nombre:[],
      urlFoto:[],
      edad:[],
      descripcion:[],
    })
  }
  submitEdit(){
    let form =this.formCarga.value;
    if (form.nombre!=null){
      this.sobremi.nombre=form.nombre;}
    if (form.urlFoto!=null){
      this.sobremi.urlFoto=form.urlFoto;}
    if (form.edad !=null){
      this.sobremi.edad=form.edad;}
    if (form.descripcion!=null){
      this.sobremi.descripcion=form.descripcion;}
    this.opciones.setDatos('sobre',this.sobremi);
    this.fire.setDatos('sobreMi',this.sobremi);
  }
}