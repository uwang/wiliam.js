require('./polyfill/array.js')
const faker = require('faker/locale/zh_CN')

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

function generateMembers (count) {
    const members = []
    for (var i = count; i >= 0; i--) {
        members.push({
            name: faker.name.lastName() + faker.name.firstName(),
            email: faker.internet.email()
        })
    }
    return members
}

module.exports = {
    range,
    getFutureYears,
    generateMembers
}