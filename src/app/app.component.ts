import {Component, OnInit} from '@angular/core';

import {ApiService} from "./api.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'currency-convertor';
  constructor(private api:ApiService) {
  }
  data:any;
  ngOnInit() {
    this.getCurrencies();
  }
  getCurrencies()
  {
    this.api.getAllCurrencies().subscribe((res:any)=>{
      this.data =Object.entries(res.results) ;
      console.log(this.data);
    })
  }
  valueAsdollar:any = 0;
  amount:any = 0;
  finalMoney:any = 0;
  changeCurrency($event: Event) {
   this.valueAsdollar = (<HTMLInputElement>$event.target).value ;
   this.finalMoney = this.amount * this.valueAsdollar;
  }
  changeAmount($event: Event) {
    this.amount = (<HTMLInputElement>$event.target).value;
    this.finalMoney = this.amount * this.valueAsdollar;

  }
}
