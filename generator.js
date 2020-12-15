require('./polyfill/array.js')

/**
 * 
 * @param {number} start 开始值
 * @param {number} stop 结束值
 * @param {number} step 间隔
 */
function range (start, stop, step) {
    return Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step))
}

/**
 * 获取未来年份列表
 * @param {Number} count 年份数量
 */
function getFutureYears (count) {
    const currentYear = (new Date()).getFullYear()
    return range(currentYear, currentYear + count, 1)
}

module.exports = {
    range,
    getFutureYears
}