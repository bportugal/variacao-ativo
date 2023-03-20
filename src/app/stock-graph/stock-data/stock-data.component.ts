import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import * as moment from 'moment';
import { InfoTable } from 'src/app/models/info-table.model';
import { Result } from 'src/app/models/stock-response.model';
import { TimePeriod, getTimePeriodSpec, TimePeriodSpec } from 'src/app/models/time-period.enum';
import { StockDataService } from '../service/stock-data.service';

@Component({
  selector: 'app-stock-data',
  templateUrl: './stock-data.component.html',
  styleUrls: ['./stock-data.component.css']
})
export class StockDataComponent implements OnInit {

  stock: string; 
  range: string; 
  interval: string;

  errorMessage: string;
  searchDone: boolean = false;

  formStock: FormGroup;

  possibleTimeSelecion = Object.values(TimePeriod);

  chartData: Result[];

  displayedColumns: string[] = ['dia', 'data', 'valor', 'varAnterior', 'varD1'];
  dataSource = new MatTableDataSource<InfoTable>();

  constructor(private stockDataService: StockDataService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.formStock = this.formBuilder.group({
      stockFormControl: ["", Validators.required],
      rangeFormControl: [null, Validators.required],
      intervalFormControl: [null, Validators.required],
    });
  }

  getTimePeriodSpecWithin(item: TimePeriod): String {
    let spec: TimePeriodSpec = getTimePeriodSpec(item);
    return spec.descricao;
  }

  fetchStockData() {
    this.searchDone = false;
    this.getOneMonthData(this.stock);
    this.stockDataService.getStockData(this.stock, this.range, this.interval).subscribe({
      next: (value) => {
        this.searchDone = true;
        this.chartData = value;
      },
      error: (error) => {
        this.errorMessage = error?.error?.message;
        console.log(error);
      }      
    });
  }

  getOneMonthData(stock: string) {
    this.stockDataService.getStockData(this.stock, "1mo", "1d").subscribe({
      next: (value) => {
        this.dataSource.data = this.assembleTableData(value);
      },
      error: (error) => {
        this.errorMessage = error?.error?.message;
        console.log(error);
      }  
    });
  }

  assembleTableData(results: Result[]): InfoTable[] {
    let tableData: InfoTable[] = [];
    results.forEach(result => {
      const flattenedOpen = result.indicators.quote.flatMap(quote => quote.open);

      for (let i = 0; i < result.timestamp.length; i++) {
        const element = result.timestamp[i];
        let tableInfoObj: InfoTable = new InfoTable();
        tableInfoObj.dia = i + 1;
        tableInfoObj.data = moment.unix(element).format('DD/MM/YY');
        tableInfoObj.valor = flattenedOpen[i];
        tableInfoObj.varAnterior = i === 0 ? null : ((flattenedOpen[i] / flattenedOpen[i-1]) - 1);
        tableInfoObj.varD1 = i === 0 ? null : ((flattenedOpen[i] / flattenedOpen[0]) - 1);
        tableData.push(tableInfoObj);
      }
    });

    return tableData;
  }

}
