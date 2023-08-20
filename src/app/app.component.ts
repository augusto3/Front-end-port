import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './servicios/portfolio.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  urlFire="https://angular-3696a-default-rtdb.firebaseio.com";  
  data!:number[];
  constructor(private datos:PortfolioService, private http:HttpClient){}
   
  ngOnInit():void {
/**     this.data=[1,2,3,4,5];
    this.http.post(this.urlFire,this.data).subscribe(
      Response=>console.log("se ha guardado " + Response),
      )

    this.datos.sobremi().subscribe(sobremi=>{
      this.data=sobremi;
      console.log(this.data);
      this.http.post(this.urlFire,this.datos);
    })
    this.http.post(this.urlFire,this.data).subscribe(
      Response=>console.log("se ha guardado " + Response),
      Error=>console.log("error"+Error)
      )

 this.datos.cursos().subscribe(cursos=>{
      this.data=cursos;
      console.log(this.data);
      this.http.post(this.urlFire,this.data);
    })
    this.datos.habilidades().subscribe(habilidad=>{
      this.data=habilidad;
      console.log(this.data);
      this.http.post(this.urlFire,this.data);
    })
    this.datos.experiencia().subscribe(experiencia=>{
      this.data=experiencia;
      console.log(this.data);
      this.http.post(this.urlFire,this.data);
    })
    this.datos.proyectos().subscribe(proyectos=>{
      this.data=proyectos;
      console.log(this.data);
    })
    this.http.post(this.urlFire,this.data).subscribe(
      Response=>console.log("se ha guardado " + Response),
      Error=>console.log("error"+Error)
    );
    this.datos.mensajes().subscribe(mensaje=>{
      this.data=mensaje;
      console.log(this.data);
      this.http.post(this.urlFire,this.data);
    })
    this.datos.universidad().subscribe(univer=>{
      this.data=univer;
      console.log(univer);
      this.http.post(this.urlFire,this.data);
    })
    this.datos.redes().subscribe(redes=>{
      this.data=redes;
      console.log(redes);
      this.http.post(this.urlFire,this.data);
    })**/
  }
  routesInicioSesion():boolean{
    return location.pathname == '/iniciar-sesion';
  }
}