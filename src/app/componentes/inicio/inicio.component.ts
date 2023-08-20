import { PortfolioService,} from 'src/app/servicios/portfolio.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{
  form!:FormGroup;

  constructor(private formBuilder:FormBuilder, private autenticacion: AutenticacionService, private ruta:Router){
    this.form=this.formBuilder.group(
      {
        user:["",[Validators.required,]],
        password:["",[Validators.required,Validators.minLength(4)]],
    })
  }

  ngOnInit(): void {
  }
  public get Username(){
    return this.form.get('user')
  }
  public get Password(){
    return this.form.get('password')
  }
  public onEnviar(event:Event){
    event.preventDefault;
    this.autenticacion.iniciarSesion({"nombreUsuario":this.Username?.value,"password":this.Password?.value}).subscribe(data=>{
      this.ruta.navigate(['/sobremi'])
    }
  )}
}
