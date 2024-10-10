import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseAuth } from 'src/app/servicios/firebaseAuth.service';
import { LoginCredentials } from 'src/app/model/login-credentials.interface';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{
  formCarga!:FormGroup;

  constructor(private formBuilder:FormBuilder,private ruta:Router,private fire:FirebaseAuth){
  this.buildForms();
  }
  buildForms(){
  this.formCarga=this.formBuilder.group({
    email:["",[Validators.required,Validators.email]],
    password:["",[Validators.required,Validators.minLength(7)]],})
  }
  ngOnInit(): void {}
  public get Email(){
    return this.formCarga.get('email');
  }
  public get Password(){
    return this.formCarga.get('password');
  }
  public onEnviar(event:Event){
    event.preventDefault;
    let form=this.formCarga.value;
    if (form){
      this.fire.loginUp(form).then(dato=>{
        sessionStorage.setItem('UID',dato.user.uid);
      })
    }
    this.ruta.navigate(['/sobremi']);}
}