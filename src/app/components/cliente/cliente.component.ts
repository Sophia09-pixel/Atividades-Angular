import { ClienteService } from './../../services/cliente.service';
import { Component } from '@angular/core';
import { Clientes } from '../../interfaces/Clientes'; //importar a interface Cliente
import { CommonModule } from '@angular/common'; //importar o módulo Comm
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms'; //importar o módulo Fo

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {
  clienteForm: FormGroup = new FormGroup({})
  cliente: Clientes[] = [];

  ngOnInit(): void{
    this.list();
  }

  constructor(
    private clienteService: ClienteService,
    private formBuilder: FormBuilder
  )
  {
    this.clienteForm = formBuilder.group({
      nome: ['', Validators.required],
      telefone: ['']
    });
  }

  list(): void {
    this.cliente = this.clienteService.list();
  }

  save(): void{
    if(this.clienteForm.valid){
      alert('Podemos salvar!');
    }else{
      alert('Formulário inválido!')
    }
  }
}
