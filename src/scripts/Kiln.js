const firePottery = (pottery, fireTemp) => {
    pottery.fired = true;
    if (fireTemp > 2200) {
        pottery.cracked = true;
    } else {
        pottery.cracked = false;
    }
    return pottery;
};

module.exports = { firePottery };