import { Component, inject} from '@angular/core';
import { FormBuilder,FormGroup, Validators} from '@angular/forms';
import { FirebaseRDService } from 'src/app/servicios/firebase.rd.service';

export interface Mensajes{
  id:number;
  nombre:string;
  apellido:string;
  email: string,
  celular: string,
  mensaje: string,
  fecha:string,
}
@Component({
  selector: 'app-page-six',
  templateUrl: './page-six.component.html',
  styleUrls: ['./page-six.component.css']
})
export class PageSixComponent{
  titulo:string="Contactame";
  formCarga!:FormGroup;
  forma!: Mensajes;
  fire=inject(FirebaseRDService);
  static id:number=0
  constructor(private formBuilder: FormBuilder){
    this.buildForms();
  }
  private buildForms(){
    this.formCarga =this.formBuilder.group({
      nombre:["",Validators.required],
      apellido: ["",Validators.required],
      correo: ['',Validators.compose([Validators.email,Validators.required])],
      celular: ["",Validators.required],
      mensaje: ["",Validators.required],
    })
  }
  formatoNum(numero:number):string{
    if (numero<10){
      return '0'+numero;
    }
    return numero.toString();
  }
  submitMensaje(){
    var meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    var dias_semana = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
    var fecha: Date=new Date;
    this.forma=this.formCarga.value;
    this.forma.fecha=(this.formatoNum(fecha.getHours())+':'+this.formatoNum(fecha.getMinutes())+' | '+ dias_semana[fecha.getDay()] + ', ' + fecha.getDate() + ' de ' + meses[fecha.getMonth()] + ' de ' + fecha.getUTCFullYear());
    this.fire.setDatos('mensajes',this.forma);
    PageSixComponent.id++
  }
}