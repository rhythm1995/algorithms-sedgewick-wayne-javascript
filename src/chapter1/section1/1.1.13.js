// 转置二维数组
function transposit(arr) {
	let ret = [];
	// 二维数组初始化
  for (let k = 0; k < arr[0].length; k++) {
		ret[k] = [];
	}
	// 给二维数组填充数据
	for (let i = 0; i < arr[0].length; i++) {
		for (let j = 0; j< arr[0].length; j++) {
			ret[j][i] = arr[i][j];
		}
	}

	return ret;
}

module.exports = transposit;