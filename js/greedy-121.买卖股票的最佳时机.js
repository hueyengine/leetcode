/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let ans = 0;
    let minPrice = prices[0]
    for (const p of prices) {
        minPrice = Math.min(minPrice, p);
        ans = Math.max(ans, p - minPrice);
    }

    return ans;
};