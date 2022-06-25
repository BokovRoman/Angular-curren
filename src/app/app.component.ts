import { Component} from '@angular/core';
import { CurrencycalculatorService } from './currencycalculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  currencyRateDollar: any = this.currency.getcurrencyDollar();
  currencyRateEuro: any = this.currency.getcurrencyEuro();
  inputValue: any = '';
  currencies: any = 'USD EUR UAH'.split(' ');
  selectedCurrency: any = 'USD';
  inputResult: any = '';
  selectedCurrencyResult: any = 'USD';
  
  constructor(private currency:CurrencycalculatorService) {}
   
  inputValueChange(value: any) {
    this.inputValue = value;
    this.currency.getcurrency(this.selectedCurrency).subscribe((data: any)=> {
      this.inputResult = value * data.rates[this.selectedCurrencyResult];
    })
  }

  currencyBaseChange(value: any) {
    this.selectedCurrency = value;
    this.currency.getcurrency(this.selectedCurrency).subscribe((data: any)=> {
      this.inputResult = this.inputValue * data.rates[this.selectedCurrencyResult];
    })
  }

  currencyResultChange(value: any) {
    this.selectedCurrencyResult = value;
    this.currency.getcurrency(this.selectedCurrency).subscribe((data: any)=> {
      this.inputResult = this.inputValue * data.rates[this.selectedCurrencyResult];
    })
  }
}
