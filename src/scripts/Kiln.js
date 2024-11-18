const firePottery = (pottery, fireTemp) => {
    pottery.fired = true;
    //Added fireTemp to make it easier to double-check which pots are getting the cracked == true flag
    pottery.fireTemp = fireTemp;
    if (fireTemp > 2200) {
        pottery.cracked = true;
    } else {
        pottery.cracked = false;
    }
    return pottery;
};

module.exports = { firePottery };