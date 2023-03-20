export enum TimePeriod {
    ONE_DAY = "1d",
	FIVE_DAYS = "5d",
	ONE_MONTH = "1mo"
}

const TimePeriodValues = {
	ONE_DAY: {
		tipo: TimePeriod.ONE_DAY,
		descricao: '1 dia'
	},
	FIVE_DAYS: {
		tipo: TimePeriod.FIVE_DAYS,
		descricao: '5 dias'
  	},
  	ONE_MONTH: {
		tipo: TimePeriod.ONE_MONTH,
		descricao: '1 mês'
	}
};

export class TimePeriodSpec {
	tipo: TimePeriod;
	descricao: String;
}

export function getTimePeriodSpec(metodo: TimePeriod): TimePeriodSpec {
	switch (metodo) {
		case TimePeriod.ONE_DAY:
			return TimePeriodValues.ONE_DAY;
		case TimePeriod.FIVE_DAYS:
			return TimePeriodValues.FIVE_DAYS;
		case TimePeriod.ONE_MONTH:
			return TimePeriodValues.ONE_MONTH;
	}
}
