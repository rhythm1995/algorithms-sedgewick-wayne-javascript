/**
 * 实现一个Point2D类，传入x与y，计算x与y的距离
 */
class Point2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

function range(point1, point2) {
    const x1 = point1.x;
    const y1 = point1.y;
    const x2 = point2.x;
    const y2 = point2.y;
    return Math.sqrt((y2-y1)*(y2-y1) + (x2-x1)*(x2-x1));
}

module.exports = {
    Point2D,
    range
}