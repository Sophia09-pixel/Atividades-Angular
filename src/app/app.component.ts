import { ControlFlowComponent } from './components/control-flow/control-flow.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { PropertieBindingComponent } from './components/propertie-binding/propertie-binding.component';
import { DiretivaComponent } from './components/diretiva/diretiva.component';
import { Carros } from './interfaces/Carros';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './components/cliente/cliente.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InterpolationComponent, ControlFlowComponent, PropertieBindingComponent, DiretivaComponent, CommonModule, ClienteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aula0904';

  carros: Carros[] = [
    {
      id: 1,
      nome: 'Corsa',
      marca: 'GM',
      ano: 1996,
      cor: 'Verde Agua'
    },
    {
      id: 2,
      nome: 'Celta',
      marca: 'GM',
      ano: 2000,
      cor: 'Rosa'
    },
    {
      id: 3,
      nome: 'Onix',
      marca: 'GM',
      ano: 2008,
      cor: 'Azul'
    },
  ]
}
