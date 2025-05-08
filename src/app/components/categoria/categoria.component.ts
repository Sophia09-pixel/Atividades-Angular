import { CommonModule } from '@angular/common';
import { Categorias } from '../../interfaces/Categorias';
import { CategoriaService } from './../../services/categoria.service';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css',
})
export class CategoriaComponent {
  categorias: Categorias[] = [];
  categoriaIdEdicao: string | null = null;
  categoriaForm: FormGroup = new FormGroup({});
  constructor(
    private categoriaService: CategoriaService,
    private formBuilder: FormBuilder
  ) {
    this.categoriaForm = formBuilder.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      ativo: [''],
    });
  }

  ngOnInit() {
    this.list();
  }

  list(): void {
    this.categoriaService
      .list()
      .subscribe((response) => (this.categorias = response));
  }

  save(): void {
    if (this.categoriaForm.valid) {
      const formData = this.categoriaForm.value;

      const categoriaAdd: Categorias = {
        id: this.generateRandomString(6),
        nome: formData.nome,
        descricao: formData.descricao,
        ativa: formData.ativo.toLowerCase() === "ativo" ? true : false,
      };

      this.categoriaService.add(categoriaAdd).subscribe();
      alert('categoria inserida com successo!');
    } else {
      alert('Formulário inválido!');
    }
    this.categoriaForm.reset();
    this.list();
  }

  generateRandomString(length: number): string {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
