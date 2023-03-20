import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ChartType } from 'angular-google-charts';
import * as moment from 'moment';
import { ChartCandle } from '../models/chart-candle.model';
import { ChartLine } from '../models/chart-line.model';
import { ChartProperties } from '../models/chart-properties.model';
import { ChartTypesEnum } from '../models/chart-types.enum';
import { InfoTable } from '../models/info-table.model';
import { Result } from '../models/stock-response.model';

@Component({
  selector: 'app-data-visualization',
  templateUrl: './data-visualization.component.html',
  styleUrls: ['./data-visualization.component.css']
})
export class ChartComponent implements OnInit {

  type: ChartType = ChartType.CandlestickChart;

  @Input() chartData: Result[];
  @Input() dataSource: MatTableDataSource<InfoTable>;

  chartProperties: ChartProperties;

  possibleChartsSelecion = Object.values(ChartTypesEnum);

  displayedColumns: string[] = ['dia', 'data', 'valor', 'varAnterior', 'varD1'];

  constructor() { }

  ngOnInit(): void {
    this.chartProperties = new ChartCandle();
    this.chartProperties.data = this.assembleDataForCandleChart(this.chartData);
  }

  onChartTypeChanged(): void {
    switch(this.type) {
      case ChartType.CandlestickChart:
        this.chartProperties = new ChartCandle();
        this.chartProperties.data = this.assembleDataForCandleChart(this.chartData);
        return;
      default:
        this.chartProperties = new ChartLine();
        this.chartProperties.data = this.assembleDataForLineChart(this.chartData);
        return;
    }
  }

  private assembleDataForCandleChart(chartData: Result[]): (string | number)[][] {
    let dataCandleChart: (string | number)[][] = [];

    chartData.forEach(result => {
      const flattenedOpen = result.indicators.quote.flatMap(quote => quote.open);
      const flattenedClose = result.indicators.quote.flatMap(quote => quote.close);
      const flattenedMax = result.indicators.quote.flatMap(quote => quote.high);
      const flattenedMin = result.indicators.quote.flatMap(quote => quote.low);

      for (let i = 0; i < result.timestamp.length; i++) {
        const element = result.timestamp[i];
        let perDayArray: (string | number)[] = [];
        perDayArray.push(moment.unix(element).format('DD/MM'));
        perDayArray.push(flattenedMin[i]);
        perDayArray.push(flattenedOpen[i]);
        perDayArray.push(flattenedClose[i]);
        perDayArray.push(flattenedMax[i]);
        dataCandleChart.push(perDayArray);
      }
    });

    return dataCandleChart;
  }

  private assembleDataForLineChart(chartData: Result[]): (string | number)[][] {
    let dataCandleChart: (string | number)[][] = [];

    chartData.forEach(result => {
      const flattenedOpen = result.indicators.quote.flatMap(quote => quote.open);

      for (let i = 0; i < result.timestamp.length; i++) {
        const element = result.timestamp[i];
        let perDayArray: (string | number)[] = [];
        perDayArray.push(moment.unix(element).format('DD/MM'));
        perDayArray.push(flattenedOpen[i]);
        dataCandleChart.push(perDayArray);
      }
    });

    return dataCandleChart;
  }

}


