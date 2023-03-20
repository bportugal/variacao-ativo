import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Result, StockResponse } from "src/app/models/stock-response.model";
import * as moment from 'moment';
import { catchError, map, tap, throwError } from "rxjs";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class StockDataService {

    constructor(private http: HttpClient) { }

    getStockData(stock: string, range: string, interval: string): Observable<Result[]> {
        moment.locale('fr');
        let params = new HttpParams().set('range', range).set('interval', interval);

        return this.http.get<StockResponse>('/api/'.concat(stock + ".SA"), { params })
            .pipe(
                map(value => value.chart.result),
                catchError(this.handleErrorObservable));
    }

    private handleErrorObservable(error: any) {
        console.error(error.message || error);
        return throwError(() => new Error(error.message));
    } 

}