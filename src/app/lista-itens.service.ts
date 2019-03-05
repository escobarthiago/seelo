import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Item } from './Item';

export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
  providedIn: 'root',
  factory: () => localStorage
});

@Injectable({
  providedIn: 'root'
})
export class ListaItensService {

  CHAVE_DO_STORAGE_LISTA:string = "Seelo-lista";
  CHAVE_DO_STORAGE_ID:string = "Seelo-lista-id";
  proximoIdDaLista:number;
  listaItens: Item[];

  pegarListaItens():Item[]{
    let listaSalva = this.pegarDoStorage(this.CHAVE_DO_STORAGE_LISTA);
    if(listaSalva === null || listaSalva===""){
      this.listaItens = [];
    }else{
      this.listaItens = JSON.parse(listaSalva);
    }
    let idLista = this.pegarDoStorage(this.CHAVE_DO_STORAGE_ID);
    if(idLista === null  || idLista===""){
      this.proximoIdDaLista = 0;
    }else{
      this.proximoIdDaLista = +JSON.parse(idLista);
    }
    return this.listaItens;
  }

  deletarItem(id:number):void{
    this.listaItens = this.listaItens.filter( item => item.id !== id);
    this.colocarNoStorage(this.CHAVE_DO_STORAGE_LISTA, this.listaItens.toString());
  }

  adicionarItem(nome:string):void{
    this.listaItens.push(new Item(this.proximoIdDaLista, nome));
    this.colocarNoStorage(this.CHAVE_DO_STORAGE_LISTA, JSON.stringify(this.listaItens));
    this.proximoIdDaLista = this.proximoIdDaLista+1;
    this.colocarNoStorage(this.CHAVE_DO_STORAGE_ID, JSON.stringify(this.proximoIdDaLista));
  }

  pegarListaItensAtualizada():Item[]{
    return this.listaItens;
  }

  private pegarDoStorage(chave: string):string {
    return this.storage.getItem(chave);
  }
 
  private colocarNoStorage(chave: string, valor: string):void {
    this.storage.setItem(chave, valor);
  }

  constructor(@Inject(BROWSER_STORAGE) public storage: Storage) {}
}
