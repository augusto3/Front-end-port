import { Component, Input,} from '@angular/core';
import { funcion } from 'src/app/servicios/function'; 
import { FirebaseAuth } from 'src/app/servicios/firebaseAuth.service';
@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent {
  @Input() titulo!:String;
  public opciones= new funcion();
  constructor(private fire:FirebaseAuth){}
  cerrar(){
    this.fire.signOut();
    this.opciones.getAdmin();
  }
}
