import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-interpolation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interpolation.component.html',
  styleUrl: './interpolation.component.css'
})
export class InterpolationComponent {
  name: string = 'Sophia';
  age: number = 20;
  job = 'Developer';
  hobbies = ['Music', 'Sports', 'Movies'];
  car = { make: 'Ford', model: 'Fiesta' };
  //para exibir uma imagem busque uma imagem na web e salve dentro da pasta assets
  imageUrl = '../../../assets/anakin.jpg';

  constructor(){}

}
