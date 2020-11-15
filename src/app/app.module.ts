import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SobreComponent } from './sobre/sobre.component';
import { ErrorComponent } from './error404/error404.component';
import { SomaComponent } from './soma/soma.component';
import { FormsModule } from '@angular/forms';
import { VetoresComponent } from './vetores/vetores.component';
import { EstadoService } from './servicos/estado.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    SobreComponent,
    ErrorComponent,
    SomaComponent,
    VetoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [EstadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
