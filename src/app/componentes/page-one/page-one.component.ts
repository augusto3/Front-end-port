import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { funcionPortfolio } from '../../function';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

export interface SobreMi{
  id:number;
  nombre:string;
  fechaDeNacimiento:Date;
  descripcion:string;
  urlFoto:string;
}
@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})

export class PageOneComponent implements OnInit{
  public opciones= new funcionPortfolio;
  public sobremi!: SobreMi;
  public nombre!:string;
  public fechaDeNacimiento!:Date;
  public descripcion!:string;
  public urlFoto!:string;
  formCarga!: FormGroup;

  constructor(private datos:PortfolioService, private formBuilder: FormBuilder){
    this.buildForms();
  }

  ngOnInit():void {
    this.datos.SobreMi().subscribe(sobre=>{
      this.sobremi=sobre[0];
      this.nombre=this.sobremi.nombre;
      this.descripcion=this.sobremi.descripcion;
      this.fechaDeNacimiento=this.sobremi.fechaDeNacimiento;
      this.urlFoto=this.sobremi.urlFoto;
    });
  }

  submit(){
    let form =this.formCarga.value;
    if (form.nombre!=null){
      this.sobremi.nombre=form.nombre;
    }
    if (form.urlFoto!=null){
      this.sobremi.urlFoto=form.urlFoto;
    }
    if (form.fechaDeNacimiento!=null){
      this.sobremi.fechaDeNacimiento=form.fechaDeNacimiento;
    }
    if (form.descripcion!=null){
      this.sobremi.descripcion=form.descripcion;
    }
//    this.datos.setSobreMi(this.sobremi);
  }
  buildForms(){
    this.formCarga =this.formBuilder.group({
      nombre:[],
      urlFoto:[],
      fechaDeNacimiento:[],
      descripcion:[],
  })
}
}