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

  data:Array<any> = []
  filteredProducts:any[] = [];
  cart: any[] = [];

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((element) => {
      this.data = element;
      // console.log(this.data);
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

  addCart(id:any, data:Object){
    const productSelected = this.cart.find((product) => product.id == id);
    if(productSelected === undefined){
      this.cart.push({
        id,
        data
      })
      console.log(this.cart)
    }
    localStorage.setItem('cart', JSON.stringify(this.cart))
  }
}
