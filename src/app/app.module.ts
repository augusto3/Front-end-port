import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageOneComponent } from './componentes/page-one/page-one.component';
import { PageTwoComponent } from './componentes/page-two/page-two.component';
import { PageThreeComponent } from './componentes/page-three/page-three.component';
import { PageFourComponent } from './componentes/page-four/page-four.component';
import { PageFiveComponent } from './componentes/page-five/page-five.component';
import { PageSixComponent } from './componentes/page-six/page-six.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage} from '@angular/fire/storage';
import { HeadComponent } from './componentes/head/head.component';
import { BarraComponent } from './componentes/barra/barra.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
@NgModule({
  declarations: [
    AppComponent,
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent,
    PageFourComponent,
    PageFiveComponent,
    PageSixComponent,
    BarraComponent,
    HeadComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(()=> getStorage()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
