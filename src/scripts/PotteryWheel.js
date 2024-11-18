let potteryKey = 0;

const makePottery = (shape, weight, height) => {
    potteryKey ++;
    return {
        id: potteryKey,
        shape: shape,
        weight: weight,
        height: height
    };
}

module.exports = { makePottery }