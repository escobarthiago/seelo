import { Component, OnInit} from '@angular/core';
import { ListaItensService } from '../lista-itens.service';

@Component({
  selector: 'app-form-insercao',
  templateUrl: './form-insercao.component.html',
  styleUrls: ['./form-insercao.component.css']
})
export class FormInsercaoComponent implements OnInit {

  constructor(
    private listaItensService: ListaItensService
    ) { }

  adicionarItem(novoItem:string):void{
    if(novoItem !== ""){
      this.listaItensService.adicionarItem(novoItem);
    }
  }

  ngOnInit() {
  }

}