import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categorias } from '../interfaces/Categorias';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  categoria: Categorias[] = [];
  private apiUrl = 'http://localhost:3000/categorias';

  constructor(private http: HttpClient) { }

  list(): Observable<Categorias[]>{
    return this.http.get<Categorias[]>(this.apiUrl) as Observable<Categorias[]>;
  }

    //método para adicionar um cliente na lista
    add(categoria: Categorias) {
      const httpHeaders = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      return this.http.post(this.apiUrl, categoria, httpHeaders);
      //this.clientes.push(cliente);
      //console.log(this.clientes);
    }
}
