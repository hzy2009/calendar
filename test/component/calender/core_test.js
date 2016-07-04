import {
	expect
} from 'chai'
import moment from 'moment'
import {
	createDataByMonth,
	initData,
	preMonth,
	nextMonth
} from '../../../src/js/component/calendar/core.js'

describe('日历组件测试', () => {
	it('根据月份生成数据数组', () => {
		var data = createDataByMonth(2016, 6); //2016年7月
		expect(data).to.be.ok;
		expect(data.length).to.equal(6);
		expect(data[0].length).to.equal(7);
		expect(data[4].length).to.equal(7);
		expect(data[0][5].date).to.equal(1);
		expect(data[5][0].date).to.equal(31);
	});

	it('生成当前月份的数据数组', () => {
		var firstDay = moment().date(1).day();

		var data = initData();
		expect(data).to.be.ok;
		expect(data[0].length).to.equal(7);
		expect(data[0][firstDay].date).to.equal(1);
	});

	it('生成上个月的数据数组', () => {
		var data = preMonth(2016, 6);
		expect(data).to.be.ok;
		expect(data[0].length).to.equal(7);
		expect(data[4].length).to.equal(7);
		expect(data[0][3].date).to.equal(1);
		expect(data[4][4].date).to.equal(30);
	});

	it('计算下个月的数据数组', () => {
		var data = nextMonth(2016, 6);
		expect(data).to.be.ok;
		expect(data[0].length).to.equal(7);
		expect(data[4].length).to.equal(7);
		expect(data[0][1].date).to.equal(1);
		expect(data[4][3].date).to.equal(31);
	});
});