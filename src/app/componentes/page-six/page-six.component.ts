import { Component} from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { FormControl, FormBuilder,FormGroup, Validators, Form} from '@angular/forms';

export interface Mensajes{
  id:number;
  nombre:string;
  apellido:string;
  email: string,
  celular: string,
  mensaje: string,
  fecha:string,
  persona_id:number;
}

@Component({
  selector: 'app-page-six',
  templateUrl: './page-six.component.html',
  styleUrls: ['./page-six.component.css']
})
export class PageSixComponent{
  titulo:string="Contactame";
  formCarga!:FormGroup;
  mensaje!: Mensajes[];
  forma!: Mensajes;
  constructor(private datosPortafolio:PortfolioService, private formBuilder: FormBuilder){
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

  cargarForms(event:Event){
    event.preventDefault();
    var meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    var dias_semana = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
    var fecha: Date=new Date;
    if (this.formCarga.valid) {
      this.forma=this.formCarga.value;
      this.forma.fecha=(this.formatoNum(fecha.getHours())+':'+this.formatoNum(fecha.getMinutes())+' | '+ dias_semana[fecha.getDay()] + ', ' + fecha.getDate() + ' de ' + meses[fecha.getMonth()] + ' de ' + fecha.getUTCFullYear());
      this.mensaje.push(this.forma);
      console.log(this.mensaje);
    }
  }
  mostrarForms(indice: number):string{
    return "nombre: "+this.mensaje[indice].nombre+", apellido: "+this.mensaje[indice].apellido +", correo: "+this.mensaje[indice].email+", celular: "+this.mensaje[indice].celular+", mensaje: "+this.mensaje[indice].mensaje;
  }
  mostrarTodos():string{
    for (var i:number=0; i <this.mensaje.length;i++){
      return this.mostrarForms(i);
    }
    return "";
  }
}