import { Timestamp } from "rxjs";

export class StockResponse {
    chart: Chart;
}

export class Chart {
    error: string;
    result: Result[];
}

export class Result {
    indicators: Indicator;
    meta: Meta;
    timestamp: number[];
}

export class Indicator {
    quote: Quote[];
}

export class Quote {
    close: number[];
    high: number[];
    low: number[];
    open: number[];
    volume: number[];
}

export class Meta {
    chartPreviousClose: number;
    currency: string;
    currentTradingPeriod: CurrentTradingPeriod;
    dataGranularity: string;
    exchangeTimezoneName: string;
    firstTradeDate: number;
    gmtoffset: GeolocationPosition;
    instrumentType: string;
    previousClose: number;
    priceHint: number;
    range: string;
    regularMarketPrice: number;
    regularMarketTime: number;
    scale?: number;
    symbol: string;
    timezone: string;
    tradingPeriods?: TradingPeriod[];
    validRanges: string[];
}

export class CurrentTradingPeriod {
    post: TradingPeriod;
    pre: TradingPeriod;
    regular: TradingPeriod;
}

export class TradingPeriod {
    end: number;
    gmtoffset: GeolocationPosition;
    start: number;
    timezone: string;
}