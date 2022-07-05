import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartPageService {
  public cartItemList : any =[]
  public foodList = new BehaviorSubject<any>([]);

  constructor() { }

  getFoods(){
    return this.foodList.asObservable();
  }

  setFoods(foods : any){
    this.cartItemList.push(...foods);
    this.foodList.next(foods);
  }
  addtoCart(foods : any){
    this.cartItemList.push(foods);
    this.foodList.next(this.cartItemList);
    this.getTotalPrice();
    // console.log(this.cartItemList)
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeCartItem(foods: any){
    this.cartItemList.map((a:any , index: any)=>{
      if(foods.id === a.id){
        this.cartItemList.splice(index , 1);
      }
    })
    this.foodList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.foodList.next(this.cartItemList);
  }
}
