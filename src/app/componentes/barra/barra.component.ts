import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FirebaseRDService } from 'src/app/servicios/firebase.rd.service';
export interface Redes{
  id:number;
  instagram:string;
  facebook:string;
  linkedin:string;
  github:string;
}
@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit{
  @Input() titulo!:string;
  redes!:Redes;
  instagram!:string;
  facebook!:string;
  linkedin!:string;
  github!:string;
  constructor(private fire:FirebaseRDService){}
  ngOnInit():void {
    this.fire.getDatos('redesSociales')
      .then((snapshot) => {
        this.redes=snapshot.val();
        this.instagram=this.redes.instagram;
        this.facebook=this.redes.facebook;
        this.linkedin=this.redes.linkedin;  
        this.github=this.redes.github;
    })
  }
}