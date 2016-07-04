import moment from 'moment';

export function createDataByMonth(year = moment().year(), month = moment().month(), selectedDay) {
	var daysInMonth = moment([year, month]).daysInMonth(); //查询一个月有多少天
	var firstDay = moment([year, month, 1]).day(); //查询第一天是星期几
	var rowCount = Math.ceil((daysInMonth + firstDay) / 7.0); //获取当月月历有多少行

	var data = new Array();
	var nextDay = moment([year, month, 1]).add(-firstDay, 'days');

	for (var i = 0; i < rowCount; i++) {
		var row = new Array();

		for (var j = 0; j < 7; j++) {
			var day = nextDay.month() == month ? nextDay.date() : null;
			// console.log('add Day[' + i + '][' + j + ']:' + day);
			var selected = day && selectedDay && selectedDay.year === year && selectedDay.month === month && selectedDay.date === day;

			row.push({
				year: year,
				month: month,
				date: day,
				selected: selected
			});
			nextDay = nextDay.add(1, 'days');
		}

		data.push(row);
	}

	return data;
}

export function initData() {
	return createDataByMonth();
}

export function preMonth(year = moment().year(), month = moment().month()) {
	var pre = moment([year, month]).add(-1, 'months');
	var yearPre = pre.year();
	var monthPre = pre.month();
	return createDataByMonth(yearPre, monthPre);
}

export function nextMonth(year = moment().year(), month = moment().month()) {
	var next = moment([year, month]).add(1, 'months');
	var yearNext = next.year();
	var monthNext = next.month();
	return createDataByMonth(yearNext, monthNext);

}