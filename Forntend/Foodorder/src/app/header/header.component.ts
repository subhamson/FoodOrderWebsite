import { Component, OnInit } from '@angular/core';
import { CartPageService } from '../services/cart-page.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public totalItem: number =0;
  
  constructor(private cartService: CartPageService) { }

  ngOnInit(): void {
    this.cartService.getFoods()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }

}
