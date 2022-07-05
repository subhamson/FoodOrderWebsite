import { Component, OnInit } from '@angular/core';
// import { FoodService } from '../services/food/food.service';
import { SharedService } from '../services/shared.service';
import { ActivatedRoute, Router } from '@angular/router';

import { CartPageService } from '../services/cart-page.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // foods:string[]=[];
// creating a variable of type string and named it foods
  searchKey:string='';

  constructor(private service:SharedService, private route:ActivatedRoute, private cartService : CartPageService, private router:Router) { }

  FoodListItem:any=[];

  ngOnInit(): void {

    
    // this.foods = this.fs.getAll()
    this.refreshFoodList();

    this.service.search.subscribe((val:any) =>{
      this.searchKey = val;
    })
  }

  addToCart(item: any){
    this.cartService.addtoCart(item);
    // this.cartService.addToCart(this.FoodListItem);
    // this.router.navigateByUrl('/cart-page')
  }

  refreshFoodList(){
    this.service.getFoodLists().subscribe(data=>{
      this.FoodListItem=data;

      this.FoodListItem.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.Price})
      });

    });
  }

}
