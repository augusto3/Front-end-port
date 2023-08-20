import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageOneComponent } from './componentes/page-one/page-one.component';
import { PageTwoComponent } from './componentes/page-two/page-two.component';
import { PageThreeComponent } from './componentes/page-three/page-three.component';
import { PageFourComponent } from './componentes/page-four/page-four.component';
import { PageFiveComponent } from './componentes/page-five/page-five.component';
import { PageSixComponent } from './componentes/page-six/page-six.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { MenuHeadComponent } from './componentes/menu-head/menu-head.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PortfolioService } from './servicios/portfolio.service';
import { InterceptorService } from './servicios/interceptor.service';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideStorage,getStorage } from '@angular/fire/storage';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent,
    PageFourComponent,
    PageFiveComponent,
    PageSixComponent,
    MenuHeadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage())
  ],
  providers: [PortfolioService,
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService,multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
