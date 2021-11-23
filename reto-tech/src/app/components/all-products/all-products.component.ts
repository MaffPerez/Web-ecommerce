import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.sass']
})
export class AllProductsComponent implements OnInit {

  constructor(private productsService: ProductsService) { }

  data:Array<any> = []

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((element) => {
      this.data = element;
      console.log(this.data);
    });
  }

}
