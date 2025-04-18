import { Component, OnInit } from '@angular/core';

interface Service {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  link: string;
}

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent implements OnInit {
  // List of services or products
  services: Service[] = [
    {
      id: 1,
      name: 'Home Tuition for Class 3',
      description: 'Personalized home tuition for Class 3 students.',
      imageUrl: 'assets/images/home_tuition.jpg',
      link: '/home-tuition/class3'
    },
    {
      id: 2,
      name: 'Home Tuition for Class 4',
      description: 'Home tuition designed for Class 4 students.',
      imageUrl: 'assets/images/home_tuition.jpg',
      link: '/home-tuition/class4'
    },
    {
      id: 3,
      name: 'Home Tuition for Class 5',
      description: 'Customized tuition for Class 5 students.',
      imageUrl: 'assets/images/home_tuition.jpg',
      link: '/home-tuition/class5'
    },
    {
      id: 4,
      name: 'Dance Classes (Hip-Hop, Contemporary, Classical)',
      description: 'Dance classes for all age groups.',
      imageUrl: 'assets/images/dance_classes.png',
      link: '/dance-classes'
    },
    {
      id: 5,
      name: 'Zumba Sessions',
      description: 'Energetic Zumba sessions for fitness.',
      imageUrl: 'assets/images/zumba.jpg',
      link: '/zumba-sessions'
    }
  ];

  cartItems: Service[] = [];  // Initialize cartItems as an array of Service objects

  constructor() { }

  ngOnInit(): void {
  }

  // Check if the product is already in the cart
  isAddedToCart(service: Service): boolean {
    return this.cartItems.some(item => item.id === service.id);
  }

  // Add the service to the cart
  addToCart(service: Service): void {
    if (!this.isAddedToCart(service)) {
      this.cartItems.push(service);
    }
  }

  // Remove the service from the cart
  removeFromCart(service: Service): void {
    this.cartItems = this.cartItems.filter(item => item.id !== service.id);
  }
}
