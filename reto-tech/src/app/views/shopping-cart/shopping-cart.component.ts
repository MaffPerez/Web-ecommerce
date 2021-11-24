import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.sass']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private router: Router) { }

  cart: any[] = [];

  ngOnInit(): void {
    this.getCart();
  }

  btnBack() {
    this.router.navigate(['home']);
  }

  getCart(){
    const dataCart =JSON.parse(localStorage.getItem('cart') ||'{}');
    this.cart = dataCart;
    console.log(dataCart);
  }

  changeAmount(){
    
  }
}
