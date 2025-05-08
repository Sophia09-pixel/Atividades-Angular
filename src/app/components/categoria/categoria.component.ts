import { CommonModule } from '@angular/common';
import { Categorias } from '../../interfaces/Categorias';
import { CategoriaService } from './../../services/categoria.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css'
})
export class CategoriaComponent {
  categorias: Categorias[] = [];
  constructor(private categoriaService: CategoriaService){}

  ngOnInit(){
    this.list();
  }

  list(): void{
    this.categoriaService.list().subscribe((response) => (this.categorias = response));
  }
}
