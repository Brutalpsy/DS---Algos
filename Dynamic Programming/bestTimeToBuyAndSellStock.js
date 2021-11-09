//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

var maxProfit = function (prices) {
  var min = Number.MAX_SAFE_INTEGER;
  var max = 0;
  for (var i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    max = Math.max(max, prices[i] - min);
  }
  return max;
};

// var maxProfitAnotherSolution = function (prices) {
//   let profit = 0;
//   let min = prices[0];

//   for (let i = 1; i < prices.length; ++i) {
//     if (min > prices[i]) {
//       min = prices[i];
//     } else if (prices[i] - min > profit) {
//       profit = prices[i] - min;
//     }
//   }

//   return profit;
// };

// var maxProfitBadSolution = function (prices) {
//   let memo = {};
//   let priceToSell = 0;
//   for (let i = 0; i < prices.length; i++) {
//     let dayPrice = prices[i];
//     let bestPriceForTheDay = 0;

//     if (!memo[dayPrice]) {
//       for (let y = i + 1; y < prices.length; y++) {
//         let sellPrice = prices[y];
//         if (sellPrice > dayPrice) {
//           let profit = sellPrice - dayPrice;
//           if (profit > bestPriceForTheDay) {
//             bestPriceForTheDay = profit;
//           }
//         }
//       }
//       memo[dayPrice] = bestPriceForTheDay;
//       if (bestPriceForTheDay > priceToSell) {
//         priceToSell = bestPriceForTheDay;
//       }
//     }
//   }

//   return priceToSell;
// };

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// console.log(maxProfitBadSolution([7, 1, 5, 3, 6, 4]));
// console.log(maxProfitAnotherSolution([7, 1, 5, 3, 6, 4]));
