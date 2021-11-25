import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-products',
  templateUrl: './filter-products.component.html',
  styleUrls: ['./filter-products.component.sass']
})
export class FilterProductsComponent implements OnInit {

  @Output()
  sendClass: EventEmitter<string> = new EventEmitter<string>() 


  constructor() { }

  ngOnInit(): void {
  }

  getClass($event:any){
    this.sendClass.emit($event.target.classList.toString());
  }



}
