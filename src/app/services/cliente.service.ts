import { Injectable } from '@angular/core';
import { Clientes } from '../interfaces/Clientes';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  //lista fake
  clientes: Clientes[] = [
    {
      id: '3sfaergagf',
      nome: 'Livia Gallafrio',
      telefone: '11922331123'
    },
    {
      id: 'gyuioykdth',
      nome: 'Minguel',
      telefone: '11922661123'
    },
    {
      id: 'gayasddso',
      nome: 'Macuco'
    },
  ]

  constructor() { }

  //retornar a lista de clientes
  list(): Clientes[]{
    return this.clientes;
  }

  //metodo para remover um cliente
  remove(id: string){
    //busca o cliente pelo id na lista
    const cliente = this.clientes.find(c => c.id == id);
    //se o cliente foi encontrado
    if(cliente){
      //busca o index
      const index = this.clientes.indexOf(cliente);
      //remove da lista
      this.clientes.splice(index, 1);
    }
  }

  add(cliente: Clientes){
    this.clientes.push(cliente);
    console.log(this.clientes);
  }

  update(id: string, cliente: Clientes){
    const index = this.clientes.findIndex(c => c.id == id);

    //verifica se encontrou
    if(index != -1){
      //atualiza na lista atraves do index
      this.clientes[index] =
      {
        ...this.clientes[index],
        ...cliente
      }
    }
  }
}
