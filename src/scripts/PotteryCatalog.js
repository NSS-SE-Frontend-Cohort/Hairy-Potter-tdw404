const inventoryList = []

const toSellOrNotToSell = (pot) => {
    if (!pot.cracked) {
        if (pot.weight < 6) {
            pot.price = 20
        } else {
            pot.price = 40
        };
        inventoryList.push(pot)
    }
    return pot
};

const usePottery = () => {
    return structuredClone(inventoryList)
}

export { toSellOrNotToSell, usePottery }