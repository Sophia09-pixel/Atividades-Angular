import { Injectable } from '@angular/core';
import { Clientes } from '../interfaces/Clientes';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  //lista fake
  clientes: Clientes[] = [];

  private apiUrl = 'http://localhost:3000/clientes';

  constructor(private http: HttpClient) {}

  //retornar a lista de clientes
  list(): Observable<Clientes[]> {
    return this.http.get<Clientes[]>(this.apiUrl) as Observable<Clientes[]>;
  }

  //metodo para remover um cliente
  remove(id: string) {
    //busca o cliente pelo id na lista
    const cliente = this.clientes.find((c) => c.id == id);
    //se o cliente foi encontrado
    if (cliente) {
      //busca o index
      const index = this.clientes.indexOf(cliente);
      //remove da lista
      this.clientes.splice(index, 1);
    }
  }

  //método para adicionar um cliente na lista
  add(cliente: Clientes) {
    const httpHeaders = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return this.http.post(this.apiUrl, cliente, httpHeaders);
    //this.clientes.push(cliente);
    //console.log(this.clientes);
  }

  update(id: string, cliente: Clientes) {
    const index = this.clientes.findIndex((c) => c.id == id);

    //verifica se encontrou
    if (index != -1) {
      //atualiza na lista atraves do index
      this.clientes[index] = {
        ...this.clientes[index],
        ...cliente,
      };
    }
  }
}
