import { CommonModule } from '@angular/common'; //importar o módulo Comm
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'; //importar o módulo Fo
import { Clientes } from '../../interfaces/Clientes'; //importar a interface Cliente
import { ClienteService } from './../../services/cliente.service';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css',
})
export class ClienteComponent {
  clienteForm: FormGroup = new FormGroup({});
  clientes: Clientes[] = [];
  clienteIdEdicao: string | null = null;

  ngOnInit(): void {
    this.list();
  }

  constructor(
    private clienteService: ClienteService,
    private formBuilder: FormBuilder
  ) {
    this.clienteForm = formBuilder.group({
      nome: ['', Validators.required],
      telefone: [''],
    });
  }

  list(): void {
    this.clienteService.list().subscribe((response) => (this.clientes = response));
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

  save(): void {
    if (this.clienteForm.valid) {
      const formData = this.clienteForm.value;

      if (this.clienteIdEdicao) {
        const clienteUpdate: Clientes = {
          id: this.clienteIdEdicao,
          nome: formData.nome,
          telefone: formData.telefone,
        };
        this.clienteService.update(this.clienteIdEdicao, clienteUpdate);
        alert('Alterado com sucesso!');
      } else {
        const clienteAdd: Clientes = {
          id: this.generateRandomString(6),
          nome: formData.nome,
          telefone: formData.telefone,
        };

        this.clienteService.add(clienteAdd);
        alert('cliente inserido com successo!');
      }
    } else {
      alert('Formulário inválido!');
    }

    this.clienteForm.reset();
  }

  editar(id: string) {
    // buscando todos os clientes e filtrando pelo id enviado como parametro
    // const cliente = this.clienteService.list().find((cli) => cli.id == id);
    // console.log(cliente);

    // if (cliente) {
    //   this.clienteIdEdicao = cliente.id;
    //   this.clienteForm.patchValue({
    //     nome: cliente.nome,
    //     telefone: cliente.telefone,
    //   });
    // }
  }

  remover(id: string) {
    this.clienteService.remove(id);
  }
}
