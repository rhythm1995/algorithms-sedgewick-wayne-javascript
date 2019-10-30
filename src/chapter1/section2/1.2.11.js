/**
 * 根据日期类Date生成一个SmartDate，在日期非法时抛出异常
 */

class SmartDate {
	constructor(year, month, day) {
		if (this.isDateValid(year, month, day)) {
			throw new Error(this.isDateValid(year, month, day));
		}
		this.year = year;
		this.month = month;
		this.day = day;
	}

	isDateValid(year = this.year, month = this.month, day = this.day) {
		let dayArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
		if (this.isLeap(year)) {
			dayArr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
		}
		if (month > 12 || month < 1) {
			return 'Error month';
		}
		if (day < 1 || day > dayArr[month - 1]) {
			return 'Error day';
		}
		return false;
	}

	isLeap(year = this.year) {
		if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
			return true;
		} else {
			return false;
		}
	}
}

module.exports = SmartDate;