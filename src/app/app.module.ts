import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormInsercaoComponent } from './form-insercao/form-insercao.component';
import { ListaItensComponent } from './lista-itens/lista-itens.component';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TelaDeLoginComponent } from './tela-de-login/tela-de-login.component';
import { TelaDeListasComponent } from './tela-de-listas/tela-de-listas.component';

@NgModule({
  declarations: [
    AppComponent,
    FormInsercaoComponent,
    ListaItensComponent,
    TelaDeLoginComponent,
    TelaDeListasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
