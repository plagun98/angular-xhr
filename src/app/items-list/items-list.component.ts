import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  productsList = [];
  constructor() { 
    (() => {
      let xhr = new XMLHttpRequest;
      let resp;
      xhr.onreadystatechange = () => {
        if(xhr.readyState == 4){
          resp = JSON.parse(xhr.response);
          this.productsList = Object.values(resp.products);
          console.log(this.productsList);
        }
      }
      xhr.open("GET","https://demo9165932.mockable.io/products",true);
      xhr.send();
    })();
  }

  ngOnInit() {
  }

}
