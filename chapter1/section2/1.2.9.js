/**
 * 修改二分查找，增加一个count记录，用来记录被检查的key的总数，并返回这个数
 */

function BinarySearch(a, key) {
	// arr是一个有序数组，key是要查找的元素
	let lo = 0;
	let hi = a.length - 1;
	let count = 0;
	while(lo <= hi) {
		count ++
		let mid = lo + (hi - lo) / 2;
		if (key < a[mid]) {
			hi = mid - 1;
		}
		else if (key > a[mid]) {
			lo = mid + 1;
		}
		else return count;
	}
	return count;
}

module.exports = BinarySearch;
