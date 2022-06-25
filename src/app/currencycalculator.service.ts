import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CurrencycalculatorService {

  currencyUrl: string = 'https://api.exchangerate.host/latest?base=';

  constructor(private http: HttpClient) { }

  getcurrencyDollar() {
    return this.http.get(`${this.currencyUrl}USD`).pipe(
      map((data: any) => {
        return data.rates.UAH;
      })
    );
  }

  getcurrencyEuro() {
        return this.http.get(`${this.currencyUrl}EUR`).pipe(
      map((data: any) => {
        return data.rates.UAH;
      })
    );
  }
  
    getcurrency(base:string) {
        return this.http.get(`${this.currencyUrl}${base}`)
   }
  
}
