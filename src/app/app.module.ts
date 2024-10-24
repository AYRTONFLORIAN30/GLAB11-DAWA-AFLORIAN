import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule para usar ngModel
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Asegúrate de importar FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
