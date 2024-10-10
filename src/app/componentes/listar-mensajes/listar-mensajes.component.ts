import { Component,OnInit } from '@angular/core';
import { Mensajes } from '../page-six/page-six.component';

@Component({
  selector: 'app-listar-mensajes',
  templateUrl: './listar-mensajes.component.html',
  styleUrls: ['./listar-mensajes.component.css']
})
export class ListarMensajesComponent {
  public mensajes!:Mensajes[]
  constructor(){}
  ngOnInit():void {
}}
