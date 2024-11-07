import {  Component, ElementRef, HostListener, ViewChild,} from '@angular/core';
import { FirebaseAuth } from './servicios/firebaseAuth.service';
import { funcion } from './servicios/function';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  public opciones= new funcion();
  public titulo:string='sobre mi';
  @ViewChild('sobremi') sobremi!:ElementRef<HTMLDivElement>;
  @ViewChild('experiencia') experiencia!:ElementRef<HTMLDivElement>;
  @ViewChild('educacion') educacion!:ElementRef<HTMLDivElement>;
  @ViewChild('habilidades') habilidades!:ElementRef<HTMLDivElement>;
  @ViewChild('proyectos') proyectos!:ElementRef<HTMLDivElement>;
  constructor(private fire:FirebaseAuth){}
  cerrar(){
    this.fire.signOut();
    this.opciones.getAdmin();
  }
  inicio(){
    if(this.titulo!='iniciar sesion'){
      this.titulo='iniciar sesion';
      window.history.pushState(null, "", '/#inicio');
    }else{
      this.titulo='sobre mi';
      window.history.pushState(null, "", '/#sobremi');
    }
  }
  confirm():boolean{
    return location.hash=='#inicio'
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(){
    const sobremiY= this.sobremi.nativeElement.getBoundingClientRect().y;
    const experienciaY= this.experiencia.nativeElement.getBoundingClientRect().y;
    const educacionY= this.educacion.nativeElement.getBoundingClientRect().y;
    const habilidadesY= this.habilidades.nativeElement.getBoundingClientRect().y;
    const proyectosY= this.proyectos.nativeElement.getBoundingClientRect().y;
    if (sobremiY < 30 && experienciaY >30 && this.titulo !='sobre mi' && location.pathname!='/#sobremi'){
      window.history.pushState(null, "", '/#sobremi');
      this.titulo='sobre mi';
    }
    else if (experienciaY < 30 && educacionY > 30 && this.titulo !='experiencia' && location.pathname!='/#experiencia'){
      window.history.pushState(null, "", '/#experiencia');
      this.titulo='experiencia';
    }
    else if (educacionY < 30 && habilidadesY > 30 && this.titulo !='educacion' && location.pathname!='/#educacion'){
      window.history.pushState(null, "", '/#educacion');
      this.titulo='educacion';
    }
    else if (habilidadesY < 30 && proyectosY > 30 && this.titulo !='habilidades' && location.pathname!='/#habilidades'){
      window.history.pushState(null, "", '/#habilidades');
      this.titulo='habilidades';
    }
    else if (proyectosY < 30 && this.titulo !='proyectos' && location.pathname!='/#proyectos'){
      window.history.pushState(null, "", '/#proyectos');
      this.titulo='proyectos';
    }
  }
}