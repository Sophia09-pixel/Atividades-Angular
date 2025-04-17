import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BlobOptions } from 'buffer';

@Component({
  selector: 'app-diretiva',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './diretiva.component.html',
  styleUrl: './diretiva.component.css'
})
export class DiretivaComponent {
  isActive: boolean = true;
  hasError: boolean = true;
  isSpecial: boolean = true;
  classes = ["text-success", "text-danger", "special"];

  //exemplis ngStyle

  size = '50px';
  font = 'Arial'
  color = 'yellow'

  currentItem: any = {
    name: ''
  }

  setUpperCaseName(value:string){
    this.currentItem.name = value.toLocaleUpperCase();
  }

}
