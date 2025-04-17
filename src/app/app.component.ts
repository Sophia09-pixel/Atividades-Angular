import { ControlFlowComponent } from './components/control-flow/control-flow.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { PropertieBindingComponent } from './components/propertie-binding/propertie-binding.component';
import { DiretivaComponent } from './components/diretiva/diretiva.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InterpolationComponent, ControlFlowComponent, PropertieBindingComponent, DiretivaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aula0904';
}
