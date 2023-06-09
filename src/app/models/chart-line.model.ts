import { ChartType } from "angular-google-charts";
import { ChartProperties } from "./chart-properties.model";

export class ChartLine implements ChartProperties {
   title: string = 'Variação ao Longo do Tempo (Valores de Abertura)';
   type: ChartType;
   data: any;
   width = 900;
   height = 600;
   options = {
      legend: 'none',
      vAxis: {
         title: 'Valor (R$)',
         format: 'currency'
      },
      hAxis: {
         title: 'Tempo'
      },
      crosshair: {
         color: '#000000',
         trigger: 'selection'
      }
   };
}