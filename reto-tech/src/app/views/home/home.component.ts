import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private productsService: ProductsService) { }

  data:Array<any> = []

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((element) => {
      this.data = element;
      console.log(this.data);
    });
  }




}
