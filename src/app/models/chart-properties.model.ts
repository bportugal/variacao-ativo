import { ChartType } from "angular-google-charts";

export interface ChartProperties {
    title: string;
    type: ChartType;
    data: any;
    width: number;
    height: number;
    options?: any;
    columns?: any;
}
