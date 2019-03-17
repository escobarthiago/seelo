import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-tela-de-login',
  templateUrl: './tela-de-login.component.html',
  styleUrls: ['./tela-de-login.component.css']
})
export class TelaDeLoginComponent implements OnInit {

  constructor(private router: Router, private snackBar: MatSnackBar) { }

  logarNoSistema(login, senha){
    if(login === "" || senha === "" ){
      this.snackBar.open("Coloque seu login e senha para entrar no sistema.","", {
        duration: 2000,
      });
    }else{
      if(login === "thiago" && senha==="senha"){
        this.router.navigate(['/listas']);
      }else{
        this.snackBar.open("Login e/ou senha errados.","", {
          duration: 2000,
        });
      }
    }
  }

  ngOnInit() {
  }

}
