import { Component } from '@angular/core';
import { CurrencycalculatorService } from './currencycalculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'currency';
  curjson: any = [];
  displayVal:string=''
  getValue(val:string) {
    console.warn(val)
    this.displayVal=val
  }


  base = "USD";
  count2 = "USD";
  result: string = '1';
  currencyRate: string = ''


  changebase(a: string) {
    this.base = a;
    // console.log(this.base);
  }

    tocountry(b: string) {
    this.count2 = b;
    // console.log(this.count2);
    }
  
  constructor(private currency:CurrencycalculatorService) {}
  
  convert() {
    // console.log(this.base);
    // console.log(this.count2);
    this.currency.getcurrencydata(this.base).subscribe(data => {
      // console.log(data);
      this.curjson = JSON.stringify(data);
      // console.log(this.curjson);
      this.curjson = JSON.parse(this.curjson);
      console.log(this.curjson);

      this.currencyRate=this.curjson.rates.UAH
        console.log(this.displayVal)
      if (this.count2 === "USD") {
        this.result = this.curjson.rates.USD
        
      }

      if (this.count2 === "EUR") {
        this.result=this.curjson.rates.EUR
        }
         
      if (this.count2 === "UAH") {
        this.result = this.curjson.rates.UAH
      }
  
    })

  }
}
