import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { StockResponse } from "src/app/models/stock-response";
import { TimePeriod } from "src/app/models/time-period.enum";

@Injectable({
    providedIn: 'root',
})
export class StockDataService {

    constructor(private http: HttpClient) { }

    getStockData(stock: string, range: TimePeriod, interval: TimePeriod) {
        let params = new HttpParams().set('range', range).set('interval', interval);

        return this.http.get<StockResponse>(this.urlAPI.concat(stock + ".SA"), { params });
    }

    get urlAPI() {
        return 'https://query2.finance.yahoo.com/v8/finance/chart/';
    }
}