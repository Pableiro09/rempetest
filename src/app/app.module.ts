import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ClienteComponent } from './components/cliente/cliente.component'; // Asegúrate de la ruta correcta

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent, // Asegúrate de incluir ClienteComponent aquí
    // Otros componentes que puedas tener
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // Otros módulos que puedas necesitar
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

