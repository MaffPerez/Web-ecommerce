import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.sass']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private router: Router) { }

  datacart: any[] = [];

  ngOnInit(): void {
    const dataCart =JSON.parse(localStorage.getItem('cart') ||'[]');
    this.datacart.push(dataCart);
    console.log(dataCart);
  }

  btnBack() {
    this.router.navigate(['home']);
  }



}
