import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageOneComponent} from './componentes/page-one/page-one.component'
import { PageTwoComponent } from './componentes/page-two/page-two.component';
import { PageThreeComponent } from './componentes/page-three/page-three.component';
import { PageFourComponent } from './componentes/page-four/page-four.component';
import { PageFiveComponent } from './componentes/page-five/page-five.component';
import { PageSixComponent } from './componentes/page-six/page-six.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ListarMensajesComponent } from './componentes/listar-mensajes/listar-mensajes.component';
const routes: Routes = [
  {path: 'sobremi', component:PageOneComponent},
  {path: 'experiencia', component:PageTwoComponent},
  {path: 'educacion', component:PageThreeComponent},
  {path: 'habilidades', component:PageFourComponent},
  {path: 'proyectos', component:PageFiveComponent},
  {path: 'contactame', component:PageSixComponent},
  {path: 'iniciar-sesion', component:InicioComponent},
  {path: 'mensajes',component:ListarMensajesComponent},
  {path: '**', redirectTo:'sobremi',pathMatch:'full'},
  {path: '', redirectTo: 'sobremi', pathMatch: 'full'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppRoutingModule { 
}

