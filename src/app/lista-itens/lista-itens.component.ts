import { Component, OnInit } from '@angular/core';
import { Item } from '../Item';
import { ListaItensService } from '../lista-itens.service';

@Component({
  selector: 'app-lista-itens',
  templateUrl: './lista-itens.component.html',
  styleUrls: ['./lista-itens.component.css']
})
export class ListaItensComponent implements OnInit {
  
  listaItens: Item[];

  deletarItem(id:number):void{
    this.listaItensService.deletarItem(id);
    this.listaItens = this.listaItensService.pegarListaItensAtualizada();
  }
  constructor(private listaItensService: ListaItensService) { }

  ngOnInit() {
    this.listaItens = this.listaItensService.pegarListaItens();
  }

}
