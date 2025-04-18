import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  images = [
    'assets/images/moumita1.jpg',
    'assets/images/moumita2.jpg',
    'assets/images/moumita3.jpg',
    'assets/images/moumita4.jpg',
    'assets/images/moumita5.jpg',
    'assets/images/moumita6.jpg',
    'assets/images/moumita7.jpg',
    'assets/images/moumita8.jpg',
  ];

  currentIndex = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 1000); 
  }

  navigateToServices() {
    this.router.navigate(['/services']);
  }

}
