
const getNumBottles = (fullBottles, emptyBottles, numExchange) => {
    let bottlesDrank = fullBottles;
    let emptiedBottles = fullBottles + emptyBottles;

    if(emptiedBottles < numExchange){
        return bottlesDrank;
    }

    const fullBottlesExchanged = Math.floor(emptiedBottles/numExchange);
    const leftOverEmptyBottles = emptiedBottles % numExchange;

    return bottlesDrank + getNumBottles(fullBottlesExchanged, leftOverEmptyBottles, numExchange);
}

/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
        return getNumBottles(numBottles, 0, numExchange);
};
