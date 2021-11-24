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

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((element) => {
      this.data = element;
      console.log(this.data);
    });
  }

  ngOnChanges():void {
    this.search();
    this.filterProducts();
    console.log(this.data)
  }

  search() {
    if (this.getSearch == '') return this.data
    return this.filteredProducts = this.data.filter((product) => product.title.toUpperCase().includes(this.getSearch.toUpperCase()))
  }

  filterProducts(){
    this.filteredProducts = this.data.filter((item) => item.category == this.getClass);
  }

}
