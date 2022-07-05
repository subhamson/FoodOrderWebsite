import { Component, OnInit } from '@angular/core';
import { CartPageService } from '../services/cart-page.service';


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  public product: any = [];
  public grandTotal !: number;

  constructor(private cartService : CartPageService) {}

  ngOnInit(): void {
    this.cartService.getFoods()
    .subscribe(res=>{
      this.product = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  removeItem(item : any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }
  

}
