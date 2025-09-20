import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { Route } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-headers',
  imports: [RouterModule,CommonModule],
  standalone: true,  
  templateUrl: './headers.html',
  styleUrls: ['./headers.css']
  // styleUrls: ['./about.css']

})
export class Headers {
   isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
