import { ChartType } from "angular-google-charts";
import { ChartProperties } from "./chart-properties.model";

export class ChartCandle implements ChartProperties {
    title: string = 'Variação ao Longo do Tempo';;
    type: ChartType = ChartType.CandlestickChart;
    data: any;
    width = 800;
    height = 600;
    options = {
        legend: 'none',
        candlestick: {
          fallingColor: { strokeWidth: 0, fill: '#a52714' }, // red
          risingColor: { strokeWidth: 0, fill: '#0f9d58' }   // green
        },
        vAxis: {
            title: 'Valor (R$)',
            format: 'currency'
         },
        hAxis:{
            title: 'Tempo'
        },
        language : 'pt'
    }
}