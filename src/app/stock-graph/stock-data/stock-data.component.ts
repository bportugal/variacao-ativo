import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TimePeriod } from 'src/app/models/time-period.enum';
import { StockDataService } from '../service/stock-data.service';

@Component({
  selector: 'app-stock-data',
  templateUrl: './stock-data.component.html',
  styleUrls: ['./stock-data.component.css']
})
export class StockDataComponent implements OnInit {

  stock: string; 
  range: TimePeriod; 
  interval: TimePeriod;

  formStock: FormGroup;

  possibleTimeSelecion = Object.values(TimePeriod);

  constructor(private stockDataService: StockDataService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    //this.fetchStockData();
    this.initForm();
  }

  private initForm() {
    this.formStock = this.formBuilder.group({
      stockFormControl: ["", Validators.required],
      rangeFormControl: [null, Validators.required],
      intervalFormControl: [null, Validators.required],
    });
  }

  fetchStockData() {
    this.stockDataService.getStockData(this.stock, this.range, this.interval).subscribe(value => {
      value.chart.result.forEach(item => console.log(item.timestamp[0]));
    })
  }

  

}
