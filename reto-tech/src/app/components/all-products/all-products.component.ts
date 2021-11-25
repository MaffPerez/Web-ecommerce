import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.sass']
})
export class AllProductsComponent implements OnInit, OnChanges {

  @Input()
  getSearch:string = '';
  @Input()
  getClass:string = '';
  constructor(private productsService: ProductsService) { }

  data:any[] = []
  filteredProducts:any[] = [];
  cart: any[] = [];
  base: number = 1;
  amount: number = 1;
  

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((element) => {
      this.data = element;
      console.log(this.data);
    });
  }

  ngOnChanges():void {
    this.search();
    this.filterProducts();
    // console.log(this.data)
  }

  search() {
    if (this.getSearch == '') return this.data
    return this.filteredProducts = this.data.filter((product:any) =>
    product.title.toUpperCase().includes(this.getSearch.toUpperCase()))
  }

  filterProducts(){
    this.filteredProducts = this.data.filter((item) => item.category == this.getClass);
  }

  changeAmount(base:number, item:any){
    if (item.amount + base < 1) {
      item.amount === 1;
    }else{
      item.amount= item.amount + base
    }
  }

  addCart(id:any, data:Object){
    const productSelected = this.cart.find((product) => product.id == id);
    if(productSelected === undefined){
      this.cart.push({
        data,
        amount:1,
        statusProduct:true
      })
      console.log(this.cart)
      localStorage.setItem('cart', JSON.stringify(this.cart))
    }
  }

  changeStatusProduct(product:any){
    product.statusProduct = !product.statusProduct
  }

}
