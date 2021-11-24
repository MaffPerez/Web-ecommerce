import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.sass']
})
export class ShoppingCartComponent implements OnInit {

  base: number = 1;
  total: number = 0;
  cart: any[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getCart();
    this.getTotalAmount();
  }

  btnBack() {
    this.router.navigate(['home']);
  }

  getCart(){
    const dataCart =JSON.parse(localStorage.getItem('cart') ||'{}');
    this.cart = dataCart;
    console.log(dataCart);
  }

  changeQuantity(base:number, item:any){
    if (item.amount + base < 1) {
      item.amount === 1;
    } else {
      item.amount += base;
    }
    this.getTotalAmount();
  }

  getTotalAmount(){
    this.total = this.cart
    .map((item: { amount: number; data: { price:number} }) => item.amount * item.data.price)
    .reduce((acc: any, item: any) => (acc += item), 0);
  }

  deleteProduct(id:string){
    this.cart = this.cart.filter((product:{data:{id:string} }) => product.data.id !== id)
    this.getTotalAmount();
  }
}
