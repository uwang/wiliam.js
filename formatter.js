/**
 * 数字添加千分符
 * @param {Number} x 
 */
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

module.exports = {
    numberWithCommas
};