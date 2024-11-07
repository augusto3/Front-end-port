import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { AppComponent } from './app.component';
const routes: Routes = [
  {path: '', component:AppComponent},
  {path: 'iniciar-sesion', component:InicioComponent},
  {path: '**', redirectTo:'',pathMatch:'full'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppRoutingModule { 
}

